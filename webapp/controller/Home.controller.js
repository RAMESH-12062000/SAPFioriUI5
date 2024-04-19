sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    //here must should be used "JSONModel" parameter and which come from==>"sap/ui/model/json/JSONModel"
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.app.sapfiori.controller.Home", {
            onInit: function () {
                //Here we passing only one user data and optional calling as model coz in the <this.getView().setModel(oJsonModel)> by default its takes..
                /* const oPerson = {
                    employee: {
                        EmployeeName: "Ramesh",
                        EmployeeAge: 26,
                        ContractStarted: new Date(),
                        Email: "ramesh.rams@gmail.com"
                    }
                }
                const oJsonModel = new JSONModel(oPerson);
                this.getView().setModel(oJsonModel);
                //after this you need maitain some Structure in Home.view.xml file for the creating structure at o/p webpage...
                //for refer this u get clarity==>Employee details trough the sapfiori(notepadfile).
                */
            }
        });
    });
