import os
import shutil

print(os.getcwd())

def remove(filepath):
    if os.path.isfile(filepath):
        os.remove(filepath)
    elif os.path.isdir(filepath):
        shutil.rmtree(filepath)

create_graphql = '{{cookiecutter.graphql_client}}' == 'true'

if not create_graphql:
    # remove top-level file inside the generated folder
    remove('src/app/graphql.module.ts')
    remove('src/app/modules/lazy-example')
