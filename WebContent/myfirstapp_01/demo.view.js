sap.ui.jsview("myfirstapp_01.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp_01.demo
	*/ 
	getControllerName : function() {
		return "myfirstapp_01.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp_01.demo
	*/ 
	createContent : function(oController) {
		
		const oSimpleInput = new sap.m.Input({
			placeholder: "Enter Name",
		});

// the properties are defined in the brackets
		const oBtn = new sap.m.Button({
			text: "Enter",

		})

// Looks like the pattern is to define all the content, then put it in the   content   array of the oPage object.
		const oPage = new sap.m.Page({
			title: "Simple App",
			content: [
				oSimpleInput,
				oBtn,
			]
		});

		return oPage;
	}
// doing a little test here.  and some more!
});