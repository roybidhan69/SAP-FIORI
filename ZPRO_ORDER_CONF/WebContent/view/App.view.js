sap.ui.jsview("sap.ui.pro_order.view.App", 
		{
			getControllerName : function() 
			{
				return "sap.ui.pro_order.view.App";
			},
			createContent : function(oController) 
			{
				this.app = new sap.m.SplitApp;
				var master = new sap.ui.xmlview("main","sap.ui.pro_order.view.Main");
				master.getController().nav = this.getController();
				this.app.addPage(master,true);
				var empty = new sap.ui.xmlview("empty","sap.ui.pro_order.view.Empty");
				this.app.addPage(empty,false);
				/*var oButton4 = new sap.ui.commons.Button({
					text : "Emphasized",
					style: sap.ui.commons.ButtonStyle.Emph,
					press : function() {alert('Alert from ' + oButton4.getText());}
				}).placeAt("content");

				//create an accept button
				var oButton5 = new sap.ui.commons.Button({
					text : "Accept",
					style: sap.ui.commons.ButtonStyle.Accept,
					press : function() {alert('Alert from ' + oButton5.getText());}
				}).placeAt("content");

				//create a reject button
				var oButton6 = new sap.ui.commons.Button({
					text : "Reject",
					style: sap.ui.commons.ButtonStyle.Reject,
					press : function() {alert('Alert from ' + oButton6.getText());}
				}).placeAt("content");*/
				return this.app;
				
			}
			

});