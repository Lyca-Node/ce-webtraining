import os

from cdb import rte
from cdb import sig

from cs.platform.web import static
from cs.platform.web.root import Root

from cs.web.components.base.main import BaseApp
from cs.web.components.base.main import BaseModel


class WebtrainingApp(BaseApp):
    pass


@Root.mount(app=WebtrainingApp, path="/tr-webapp-webtraining")
def _mount_app():
    return WebtrainingApp()


@WebtrainingApp.view(model=BaseModel, name="document_title", internal=True)
def default_document_title(self, request):
    return "Webtraining"


@WebtrainingApp.view(model=BaseModel, name="app_component", internal=True)
def _setup(self, request):
    request.app.include("tr-webapp-webtraining", "0.0.1")
    return "tr-webapp-webtraining-MainComponent"


@WebtrainingApp.view(model=BaseModel, name="base_path", internal=True)
def get_base_path(self, request):
    return request.path


@sig.connect(rte.APPLICATIONS_LOADED_HOOK)
def _register_libraries():
    lib = static.Library("tr-webapp-webtraining", "0.0.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'build'))
    lib.add_file("tr-webapp-webtraining.js")
    lib.add_file("tr-webapp-webtraining.js.map")
    static.Registry().add(lib)
