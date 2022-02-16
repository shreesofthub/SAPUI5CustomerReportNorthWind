sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"],
    function (oController, History) {
        return oController.extend("yard.sapyard10.controller.listOrder", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                var jsonModel = this.getOwnerComponent().getModel("odataModel");
                jsonModel.setSizeLimit(500);
            },
            onBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash != undefined) {
                    window.history.go(-1);
                } else {
                    this.oRouter.navTo("orderQty", {
                        CID: "1"
                    })
                }
            },
            onListSelection:function(oEvent){
                var sellectedObject = oEvent.getSource().mProperties.title;
                this.oRouter.navTo("orderLineItem",{
                    Order:sellectedObject
                });                              
            }
        });
    });