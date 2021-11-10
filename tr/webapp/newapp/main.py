import os

from cdb import rte
from cdb import sig
from cdb import auth
from cdb import util
from cdb import sqlapi
from cs.platform.web import static
from cs.platform.web.root import Root
from webob.exc import HTTPForbidden

from cs.web.components.base.main import BaseModel
from cs.web.components.configurable_ui import ConfigurableUIApp
from cs.web.components.base.main import GLOBAL_CUSTOMIZATION_HOOK

from cs.platform.web import root

from cs.pcs.projects import Project


class NewappApp(ConfigurableUIApp):
    def update_app_setup(self, app_setup, model, request):
        super(NewappApp, self).update_app_setup(app_setup, model, request)
        collection_app = root.get_v1(request).child("collection")
        user = auth.persno
        app_setup["tr-webapp-newapp"] = {"current_user": user}


@Root.mount(app=NewappApp, path="/tr.webapp/newapp")
def _mount_app():
    return NewappApp()


@NewappApp.path(path="/test/{id}", absorb=True)
class TestModel(BaseModel):
    def __init__(self, extra_parameters, absorb, id = 0, search = "-"):
        super(TestModel, self).__init__()
        self.id = id
        self.search = search
        self.absorb = absorb
        self.extra_parameters = extra_parameters

    def projects(self):
        user = auth.persno
        all_roles = util.get_roles('GlobalContext', "", user)
        if "Administrator" not in all_roles:
            raise HTTPForbidden()
        return Project.Query()


@NewappApp.path(path="/userdocs")
class UserDocsModel(BaseModel):
    def __init__(self):
        super(UserDocsModel, self).__init__()

    def user_docs(self):
        res = sqlapi.RecordSet2(sql="""
            SELECT angestellter.name, angestellter.personalnummer, COUNT(*) as doc_count 
            FROM zeichnung
            JOIN angestellter ON INSTR(zeichnung.autoren, angestellter.name) > 0
            GROUP BY angestellter.personalnummer
        """)
        return {
            "users": [{"name": u["name"], "persno": u["personalnummer"]} for u in res],
            "doc_count": [u["doc_count"] for u in res],
        }

@NewappApp.json(model=UserDocsModel)
def _user_docs_info(self, request):
    return {
        "data": self.user_docs(), 
    }

@NewappApp.json(model=TestModel)
def _user_info(self, request):
    collection_app = root.get_v1(request).child("collection")
    user = auth.persno
    all_roles = util.get_roles('GlobalContext', "", user)
    return {
        "test": "model",
        "id": self.id,
        "search": self.search,
        "userid": user,
        "roles": all_roles,
        "absorb": self.absorb,
        "extra_params": self.extra_parameters,
        "projects": [request.view(p, app=collection_app) for p in self.projects()]
    }

@NewappApp.view(model=BaseModel, name="document_title", internal=True)
def default_document_title(self, request):
    return "Newapp"


@NewappApp.view(model=BaseModel, name="app_component", internal=True)
def _setup(self, request):
    request.app.include("tr-webapp-newapp", "0.0.1")
    request.app.include("chart.js", "3.5.1")
    return "tr-webapp-newapp-MainComponent"


@NewappApp.view(model=BaseModel, name="base_path", internal=True)
def get_base_path(self, request):
    return request.path


# @sig.connect(GLOBAL_CUSTOMIZATION_HOOK)
# def _get_page(request):
#    request.app.include("chart.js", "3.5.1")
#    request.app.include("tr-webapp-newapp", "0.0.1")


@sig.connect(rte.APPLICATIONS_LOADED_HOOK)
def _register_libraries():
    lib = static.Library("tr-webapp-newapp", "0.0.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'build'))
    lib.add_file("tr-webapp-newapp.js")
    lib.add_file("tr-webapp-newapp.js.map")
    static.Registry().add(lib)

    lib = static.Library("chart.js", "3.5.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'vendor', 'chartjs'))
    lib.add_file("chart.js")
    static.Registry().add(lib)
