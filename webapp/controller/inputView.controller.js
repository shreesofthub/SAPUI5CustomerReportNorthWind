sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("yard.sapyard10.controller.inputView", {
            onInit: function () {
                this._oRouter = this.getOwnerComponent().getRouter();

            },
            onGetList: function () {
                var inputValue = this.byId("idInput").getValue();
                this._oRouter.navTo("orderQty", {
                    CID: inputValue
                });
            }
        });
    });