sap.ui.define(function() {
	"use strict";
 
	var Formatter = {
 
		status :  function (sStatus) {
				if (sStatus === "Confirmed") {
					return "Success";
				} else if (sStatus === "Closed") {
					return "Warning";
				} else if (sStatus === "Open"){
					return "Error";
				} else {
					return "None";
				}
		}
	};
 
	return Formatter;
 
}, /* bExport= */ true);