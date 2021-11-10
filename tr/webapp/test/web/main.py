import os

from cdb import rte
from cdb import sig

from cs.platform.web import static
from cs.platform.web.root import Root

from cs.web.components.base.main import BaseApp
from cs.web.components.base.main import BaseModel
from cs.web.components.base.main import GLOBAL_CUSTOMIZATION_HOOK

class WebApp(BaseApp):
    pass


@Root.mount(app=WebApp, path="/tr-webapp-test-web")
def _mount_app():
    return WebApp()


@WebApp.view(model=BaseModel, name="document_title", internal=True)
def default_document_title(self, request):
    return "Web"


@WebApp.view(model=BaseModel, name="app_component", internal=True)
def _setup(self, request):
    request.app.include("tr-webapp-test-web", "0.0.1")
    return "tr-webapp-test-web-MainComponent"

#@sig.connect(GLOBAL_CUSTOMIZATION_HOOK)
#def _get_page(request):
#    request.app.include("tr-webapp-test-web", "0.0.1")


@WebApp.view(model=BaseModel, name="base_path", internal=True)
def get_base_path(self, request):
    return request.path


@sig.connect(rte.APPLICATIONS_LOADED_HOOK)
def _register_libraries():
    lib = static.Library("tr-webapp-test-web", "0.0.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'build'))
    lib.add_file("tr-webapp-test-web.js")
    lib.add_file("tr-webapp-test-web.js.map")
    static.Registry().add(lib)
