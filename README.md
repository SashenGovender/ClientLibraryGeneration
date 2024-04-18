# Client Library Generation
This project demonstrated the following:
* Generate a typescript sdk client as an artefact of the Api build process which uses Nswag MS Build nuget package.
* Use the auto-generate client to execute API requests on an Angular App.

# Source Code
The Angular App and Api are stock standard projects with minor changes.

## Angular App
* App Module provider for API_BASE_URL.
* environment settings.
* A button click to trigger the http client requests.

## Api
* CORS settings.
* NSwag configuration file as per references.
* NSWag OpenApi code generation as per references.
* 

# References
* [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
* [nswagstudio save configuration file](https://stackoverflow.com/questions/62694220/nswagstudio-how-to-save-code-generation-settings)
* [getting started with nswag](https://learn.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-nswag?view=aspnetcore-8.0&tabs=visual-studio)
* [Nswag Issues](https://github.com/RicoSuter/NSwag/issues/4524)
* [NSwag.MSBuild Wiki](https://github.com/RicoSuter/NSwag/wiki/NSwag.MSBuild)
* [NSwag Configuration Document](https://github.com/RicoSuter/NSwag/wiki/NSwag-Configuration-Document)

# Author
Sashen Govender

