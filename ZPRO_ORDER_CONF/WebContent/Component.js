jQuery.sap.declare("sap.ui.pro_order.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
sap.ui.core.UIComponent.extend("sap.ui.pro_order.Component",
		{
			init:function()
			{
				sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
				jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("sap.ui.pro_order")+"/css/style.css","style");
			},
			createContent:function()
			{
				var oView = new sap.ui.view(
						{
							id:"app",
							viewName:"sap.ui.pro_order.view.App",
							type:"JS",
							viewData:
									{
										component:this
									}
						})
				return oView;
			}
		})