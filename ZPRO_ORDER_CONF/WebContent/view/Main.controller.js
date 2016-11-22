
	
	sap.ui.define([
	               "sap/ui/core/mvc/Controller",
	               "sap/m/ColumnListItem",
	               "sap/m/Input",
	               "sap/m/DatePicker",
	               "sap/m/Button",
	               "sap/m/Label",
	               "sap/m/Text",
	               "sap/m/HBox",
	               "../Formatter/Formatter",
	               "sap/ui/commons/layout/MatrixLayout",
	               "sap/ui/commons/layout/MatrixLayoutRow",
	               "sap/ui/commons/layout/MatrixLayoutCell",
	               "sap/m/BusyDialog",
	               "sap/m/MessageBox",
	               "sap/ui/model/json/JSONModel",
	               "sap/ui/model/odata/ODataModel",
	               "sap/ui/model/Filter",
	               "sap/m/MessageToast"
	              ], function(Controller, ColumnListItem, Input, DatePicker, Button, Label, Text, HBox, Formatter, MatrixLayout, MatrixLayoutRow, MatrixLayoutCell, Busy, MessageBox, JSONModel,ODataModel, Filter, MessageToast) 
	              {
						"use strict";
						 return Controller.extend("sap.ui.pro_order.view.Main", 
						 {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Main
*/
	onInit: function() {
		// set explored app's demo model on this sample
		var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.pro_order", "/products.json"));
		this.getView().setModel(oModel);
	},
	onListItemPress:function(evt)
    {
    this.nav.to("Detail",evt.getSource().getBindingContext());	
    },
    searchItems:function(evt)
    {
    	  var filters = [];
    	  var query = evt.getParameter("query");
    	  if (query && query.length > 0) {
    	   var filter = new sap.ui.model.Filter("ProductId",
    	     sap.ui.model.FilterOperator.Contains, query);
    	   filters.push(filter);
    	  }
    	  // UPDATE LIST BINDING

    	  var list = this.getView().byId("list");
    	  var binding = list.getBinding("items");
    	  binding.filter(filters);
    }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Main
*/
//	onExit: function() {
//
//	}
						 });
});