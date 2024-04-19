## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Apr 19 2024 04:35:22 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.13.2|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>sapfiori|
|**Application Title**<br>Sap Fiori|
|**Namespace**<br>com.app|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.123.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## sapfiori

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


//For getting huge data from a file and creating table structure refer this home.view.xml from SAPFIORI project...(TableStructure ref will be created throgh this)
#must maintaing these...
in MANIFEST.json file creat this as follow after "sourceTemplate"
"dataSources": {
      "GlobalModel":{
        "uri": "model/GlobalModel.json",
        "type": "JSON"
      }
    }

#create one model for setting the data into table structure...
@model section...
"":{
     "type": "sap.ui.model.json.JSONModel",
     "dataSource": "GlobalModel"
    }
#NOTE: here only you can cosume json formate data...


