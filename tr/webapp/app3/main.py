import os

from cdb import rte
from cdb import sig

from cs.platform.web import static
from cs.platform.web.root import Root

from cs.web.components.base.main import BaseApp
from cs.web.components.base.main import BaseModel


class App3App(BaseApp):
    pass


@Root.mount(app=App3App, path="/tr-webapp-app3")
def _mount_app():
    return App3App()


@App3App.view(model=BaseModel, name="document_title", internal=True)
def default_document_title(self, request):
    return "App3"


@App3App.view(model=BaseModel, name="app_component", internal=True)
def _setup(self, request):
    request.app.include("tr-webapp-app3", "0.0.1")
    return "tr-webapp-app3-MainComponent"


@App3App.view(model=BaseModel, name="base_path", internal=True)
def get_base_path(self, request):
    return request.path


@sig.connect(rte.APPLICATIONS_LOADED_HOOK)
def _register_libraries():
    lib = static.Library("tr-webapp-app3", "0.0.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'build'))
    lib.add_file("tr-webapp-app3.js")
    lib.add_file("tr-webapp-app3.js.map")
    static.Registry().add(lib)
