sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/core/routing/History"
],
    function (Controller, Filter, History) {
        return Controller.extend("yard.sapyard10.controller.orderLineItem", {
            onInit: function () {
                this._oRouter = this.getOwnerComponent().getRouter();
                this._oRouter.attachRoutePatternMatched(this.getData, this);
            },
            getData: function (params) {
                if (!this.oOrderID) {
                    this.oOrderID = params.getParameter("arguments").Order;
                    var oModel = this.getOwnerComponent().getModel("odataModel");
                    var aFilter = new Filter("OrderID", sap.ui.model.FilterOperator.EQ, this.oOrderID);
                    this.getView().byId("idTable").getBinding("items").filter(aFilter);
                }
            },
            onItemPress: function (oEvent) {
                var ProductId = oEvent.getSource().getBindingContextPath().split(",", 2)[1].split("=", 2)[1].split(")", 1);
                this._oRouter.navTo("products", {
                    Prd: ProductId[0]
                });
            },
            onBack: function () {
                var oHistory = History.getInstance();
                var oPrevioutTag = oHistory.getPreviousHash();
                if (oPrevioutTag != undefined) {
                    window.history.go(-1);
                } else {
                    this._oRouter.navTo("listOrder");
                }
                this.oOrderID = undefined;
            }
        });
    });
