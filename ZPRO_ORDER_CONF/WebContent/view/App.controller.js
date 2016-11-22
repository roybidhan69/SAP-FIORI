sap.ui.controller("sap.ui.pro_order.view.App",
		{
			to : function (pageId, context) {
					
					var app = this.getView().app;
					
					// load page on demand
					var master = ("Main" === pageId);
					if (app.getPage(pageId, master) === null) {
						var page = sap.ui.view({
							id : pageId,
							viewName : "sap.ui.pro_order.view." + pageId,
							type : "XML"
						});
						page.getController().nav = this;
						app.addPage(page, master);
						jQuery.sap.log.info("app controller > loaded page: " + pageId);
					}
					
					// show the page
					app.to(pageId);
					// set data context on the page
					if (context) 
					{
						var page = app.getPage(pageId);
						page.setBindingContext(context);
					}
			},
			back : function (pageId) 
			{
				this.getView().app.backToPage(pageId);
			},
			onInit: function() 
			{
		
			},
			onBeforeRendering: function() 
			{
		
			},
		
			onAfterRendering: function() 
			{
				
			},
		
			onExit: function() 
			{
		
			}

});