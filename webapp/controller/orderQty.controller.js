sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"],
    function (oController,History) {
        return oController.extend("yard.sapyard10.controller.orderQty", {
            onBeforeRendering: function () {
                this._oRouter = this.getOwnerComponent().getRouter();
                this._oRouter.attachRoutePatternMatched(this.getData, this);

            },
            getData: function (parameters) {
                if (!this.customerId) {
                    this.customerId = parameters.getParameter("arguments").CID;
                    var oI18n = this.getView().getModel("i18n").getResourceBundle();
                    this.byId("orderQtyPage").setTitle(oI18n.getText("qtyViewTitle").concat(this.customerId));
                    var aFilter = [new sap.ui.model.Filter("CustomerID", sap.ui.model.FilterOperator.EQ, this.customerId)];
                    var oModel = this.getView().getModel();
                    oModel.read("/Orders",
                        // {
                        // filters: aFilter,
                        // },
                        {
                            success: function (oData, response) {
                                var noofRecords = oData.results.length;
                                this.byId("idButton").setText(oI18n.getText("orderQtyButton") + noofRecords);
                                this.byId("idText").setText(oI18n.getText("orderQtyText") + noofRecords);
                                var jsonModel = new sap.ui.model.json.JSONModel();
                                jsonModel.setData(oData.results);
                                this.getOwnerComponent().setModel(jsonModel, "odataModel");
                            }.bind(this)
                        });
                        
                }
            },
            getListofOrders: function () {
                this._oRouter.navTo("listOrder");
            },
            onBack: function () {
                var oHistory = History.getInstance();
                var getPreviousHash = oHistory.getPreviousHash();
                if (getPreviousHash !== undefined) {
                    window.history.go(-1);
                }
                this.customerId = undefined;
            }
        });
    });