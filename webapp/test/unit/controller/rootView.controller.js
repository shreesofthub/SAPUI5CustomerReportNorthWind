/*global QUnit*/

sap.ui.define([
	"yard/sapyard10/controller/rootView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("rootView Controller");

	QUnit.test("I should test the rootView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
