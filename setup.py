from cdb.comparch.pkgtools import setup

setup(
    name="tr.webapp",
    version="1.0.0",
    install_requires=['cs.platform'],
    docsets=[
        # Add a relative path for each documentation set in this package
        ],
    cdb_modules=[
        # List the package's modules in the correct (initialization) order as
        # computed by cdb.comparch topological sort. This list goes into
        # `cdb_modules.txt` in the EGG-INFO.
        "tr.webapp"
        ],
    cdb_services=[
        # List the services of this packages by their class names. This list
        # goes into `cdb_services.txt` in EGG-INFO.
        ],
)
