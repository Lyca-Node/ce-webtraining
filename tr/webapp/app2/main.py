import os
from webob.exc import HTTPError

from cdb import rte
from cdb import sig

from cs.platform.web import static
from cs.platform.web.root import Root
from cs.platform.web import root
from cs.pcs.projects import Project

from cs.web.components.base.main import BaseApp
from cs.web.components.base.main import BaseModel

TODO_ITEMS = []

class ModuleApp(BaseApp):
    pass

@Root.mount(app=ModuleApp, path="/tr.webapp/")
def _mount_module_app():
    return ModuleApp()


class App2App(BaseApp):
    def update_app_setup(self, app_setup, model, request):
        super(App2App, self).update_app_setup(app_setup, model, request)
        app_setup["tr-webapp-app2"] = {
            "todo_items": TODO_ITEMS
        }

@ModuleApp.mount(app=App2App, path="/tr-webapp-app2/")
def _mount_app():
    return App2App()



@App2App.path(path="")
class App2Model(BaseModel):
    def __init__(self, search=""):
        super(App2Model, self).__init__()
        self.search = search
    
    def get_projects(self):
        return Project.Query()


# @App2App.json(model=App2Model, request_method="PUT")
# def _send_data(self, request):
#     data = request.json
#     return data
    

@App2App.json(model=App2Model, name="debug")
def _app2model_view(self, request):
    collection_app = root.get_v1(request).child("collection")
    return {
        "search": self.search,
        "projects": [request.view(p, app=collection_app) for p in self.get_projects()],
    }

@App2App.json(model=App2Model, name="items")
def _app2items_view(self, request):
    return {
        "items": TODO_ITEMS 
    }

@App2App.json(model=App2Model, name="items", request_method="POST")
def _app2items_view(self, request):
    data = request.json
    text = data["text"]
    TODO_ITEMS.append(text)
    return {
        "text": text 
    }

@App2App.json(model=HTTPError)
def _error_view(self, request):
    @request.after
    def set_status_code(response):
        response.status_code = self.code
    return {
        "error": self.explanation,
        "code": self.code,
    }


@App2App.view(model=BaseModel, name="document_title", internal=True)
def default_document_title(self, request):
    return "App2"


@App2App.view(model=BaseModel, name="app_component", internal=True)
def _setup(self, request):
    request.app.include("tr-webapp-app2", "0.0.1")
    request.app.include("chart.js", "3.6.0")
    return "tr-webapp-app2-MainComponent"


@App2App.view(model=BaseModel, name="base_path", internal=True)
def get_base_path(self, request):
    return request.path

# from cs.web.components.base.main import GLOBAL_CUSTOMIZATION_HOOK

# @sig.connect(GLOBAL_CUSTOMIZATION_HOOK)
# def _get_page(request):
#     request.app.include("tr-webapp-app2", "0.0.1")

@sig.connect(rte.APPLICATIONS_LOADED_HOOK)
def _register_libraries():
    lib = static.Library("tr-webapp-app2", "0.0.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'build'))
    lib.add_file("tr-webapp-app2.js")
    lib.add_file("tr-webapp-app2.js.map")
    static.Registry().add(lib)

    lib = static.Library("chart.js", "3.6.0",
                         os.path.join(os.path.dirname(__file__), 'js', 'vendor'))
    lib.add_file("chart.min.js")
    static.Registry().add(lib)
