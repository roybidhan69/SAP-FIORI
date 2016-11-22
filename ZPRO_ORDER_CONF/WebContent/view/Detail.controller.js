sap.ui.define([
	               "sap/ui/core/mvc/Controller",
	               "sap/m/ColumnListItem",
	               "sap/m/Input",
	               "sap/m/DatePicker",
	               "sap/m/Button",
	               "sap/m/Label",
	               "sap/m/Text",
	               "sap/m/HBox",
	               "sap/m/Select",
	               "sap/ui/commons/layout/MatrixLayout",
	               "sap/ui/commons/layout/MatrixLayoutRow",
	               "sap/ui/commons/layout/MatrixLayoutCell",
	               "sap/m/BusyDialog",
	               "sap/m/MessageBox",
	               "sap/ui/model/json/JSONModel",
	               "sap/ui/model/odata/ODataModel",
	               "sap/ui/model/Filter",
	               "sap/m/MessageToast"
	              ], function(Controller, ColumnListItem, Input, DatePicker, Button, Label, Text, HBox, Select, MatrixLayout, MatrixLayoutRow, MatrixLayoutCell, Busy, MessageBox, JSONModel,ODataModel, Filter, MessageToast) 
	              {
						"use strict";
						 return Controller.extend("sap.ui.pro_order.view.Detail", 
						 {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Detail
*/
	onInit: function() {
		sap.ui.getCore().DetailView = {};
		sap.ui.getCore().DetailView = this.getView();
		var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.pro_order", "/products.json"));
		this.getView().setModel(oModel);
		this.addTableData();
		
	},

	addTableData:function()
		    {
			 var count=1;
			 var oTable = this.getView().byId("materialTable");
			 var col1=new sap.m.Column({
				 width:"1%",
				 hAlign:"Center",
				 header:new sap.m.Label
				   ({
					   text:"Item"
				   })
			 })
			 
			 var col2=new sap.m.Column({
				 width:"5%",
				 hAlign:"Center",
				 header:new sap.m.Label
				   ({
					   text:"Loss type"
				   })  
			 })
			 
			 var col3=new sap.m.Column({
				 width:"5%",
				 hAlign:"Center",
				 header:new sap.m.Label
				   ({
					   text:"Loss Quantity"
				   })  
			 })
			 
			 var col4=new sap.m.Column({
				 width:"5%",
				 hAlign:"Center",
				 header:new sap.m.Label
				   ({
					   text:"Remarks"
				   })  
			 })
			 var col5=new sap.m.Column({
				 width:"2%",
				 hAlign:"Center",
				 header:new sap.m.Label
				   ({
					   text:"Delete"
				   })  
			 })
			 
			 oTable.addColumn(col1);
		     oTable.addColumn(col2);
		     oTable.addColumn(col3);
		     oTable.addColumn(col4); 
		     oTable.addColumn(col5); 
		     this.addItem(count);
    },
    
    addItem:function(count)
		    {	
    	var oTable = this.getView().byId("materialTable");
    	var columnListItem = "";
    	//sap.ui.getCore().appData.mainView.Flag = true;
    	//sap.ui.getCore().appData.mainView.itemEVT = evt;
    			
    			var text1 = new Text
				   ({
					   text:count
	    		   }).addStyleClass("item_cls");
    			
    			var inp2 = new Select
				   ({
						  name:"Select",
						  width:"100%",
						  items:
                          {
                           path:"/ProductCollection",
                           template: new sap.ui.core.Item
                               ({
                                 key:"{ProductId}", 
                                 text:"{Name}"
                               })
                                 
                          },
						  change:jQuery.proxy(
						             this.onValueLossQuantity,this)
				   }).addStyleClass("item_cls");

		    	
    			
				var inp3 = new Input
						   ({
								  type:"Text", 
								  change:jQuery.proxy(
								             this.onValueLossQuantity,this)
						   }).addStyleClass("item_cls");
				
				var inp4 = new Input
				   ({
						  type:"Text", 
						  change:jQuery.proxy(
						             this.onValueLossQuantity,this)
				   }).addStyleClass("item_cls");
				
				var Button5=new Button
				({
					  icon:"sap-icon://delete",
					  press:jQuery.proxy(
					            this.deleteRow, this)
				});
				
				/*new Button
			    ({
				   icon:"sap-icon://delete",
				   press:jQuery.proxy(
				             this.deleteRow, this)
			    })*/
    			

			
				
				
				var columnListItem = new ColumnListItem
				 ({
					 cells:
						 	[
						 	 	text1,
						 	 	inp2,
						 	 	inp3,
						 	 	inp4,
						 	 	Button5
						 	 	
						 	]
				 }) 
				
				oTable.addItem(columnListItem).addDelegate(
						{
							onAfterRendering : function() 
											   {
													/*if(sap.ui.getCore().appData.mainView.itemEVT)
													{
														var firstItem = oTable.getItems()[oTable.getItems().length - 1].getCells()[0].sId;
														$("#"+firstItem + "-inner").focus();
													}*/
											   },
						    onBeforeRendering:function()
											  {
													
											  }
						})
				
				
				
				
    },
    
    addRow:function(evt)
    {	
    	var count;
    	if(this.getView().byId("materialTable").getItems().length==0)
    		{
	    		count=1;
	    	    this.addItem(count);
	    	    var oTable = this.getView().byId("materialTable");
    		}
    	    else
    		{
    	    	$.each(this.getView().byId("materialTable").getItems(),function(index,value){
    	    	count=index+2;
    	    });
    	        this.addItem(count);
    		}
    },
    onValueLossType:function()
    {
    	
    },
    onValueLossQuantity:function()
    {
    	
    },
    onValueRemarks:function()
    {
    	
    },
    deleteRow:function(evt)
    {
    	var itemLength = sap.ui.getCore().DetailView.byId("materialTable").getItems().length;
    	
		    	//evt.getSource().getParent().destroy();
		    	evt.getSource().getParent().destroy();
		    	var matTable = sap.ui.getCore().DetailView.byId("materialTable");
		    
		    		$.each(matTable.getItems(),function(ind,val)
							{
		    			     val.getCells()[0].setText(ind+1);
								
							});
		    		
    	
    	
    }
    
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Detail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Detail
*/
//	onExit: function() {
//
//	}
						 });
	              });