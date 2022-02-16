sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"],
    function (oController, History) {
        return oController.extend("yard.sapyard10.controller.products", {
            onInit: function () {
                this._oRouter = this.getOwnerComponent().getRouter();
                this._oRouter.attachRoutePatternMatched(this.getData, this);
            },
            getData: function (params) {
                if (!this.productNo) {
                    this.productNo = params.getParameter("arguments").Prd;
                    var ProductsPath = "/Products(" + this.productNo + ")";
                    this.getView().bindElement(ProductsPath);
                    var sf = new sap.ui.layout.form.SimpleForm("idSF1", {
                        content: [
                            new sap.m.Label({ text: "Product ID" }),
                            new sap.m.Text({ text: "{ProductID}" }),
                            new sap.m.Label({ text: "Product Name" }),
                            new sap.m.Text({ text: "{ProductName}" }),
                            new sap.m.Label({ text: "SupplierID" }),
                            new sap.m.Text({ text: "{SupplierID}" }),
                            new sap.m.Label({ text: "Category ID" }),
                            new sap.m.Text({ text: "{CategoryID}" }),
                            new sap.m.Label({ text: "Quantity PerUnit" }),
                            new sap.m.Text({ text: "{QuantityPerUnit}" }),
                            new sap.m.Label({ text: "Unit Price" }),
                            new sap.m.Text({ text: "{UnitPrice}" }),
                            new sap.m.Label({ text: "Units InStock" }),
                            new sap.m.Text({ text: "{UnitsInStock}" }),
                            new sap.m.Label({ text: "Units OnOrder" }),
                            new sap.m.Text({ text: "{UnitsOnOrder}" }),
                            new sap.m.Label({ text: "ReorderLevel" }),
                            new sap.m.Text({ text: "{ReorderLevel}" }),
                            new sap.m.Label({ text: "Discontinued" }),
                            new sap.m.Text({ text: "{Discontinued}" })
                        ]
                    });
                    this.byId("vbox5").insertItem(sf);
                }
            },
            onBack: function () {
                var oHistory = History.getInstance();
                var oPreviousTag = oHistory.getPreviousHash();
                if (oPreviousTag != undefined) {
                    window.history.go(-1);
                } else {
                    this._oRouter.navTo("orderLineItem", {
                        Order: "1"
                    });
                }
                this.productNo = undefined;
            }

        });
    });