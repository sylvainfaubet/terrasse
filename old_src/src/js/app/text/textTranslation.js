define(["backbone"],function(Backbone){
	'use strict';
	
	var translation = Backbone.Model.extend({
		defaults:{
			"navbar":{
				"title":"Construire ma terrasse en bois",
				"menubar":{
					"titles":{
						"item1":"figure",
						
					},
					"menus":{
						"item1":{
							"idSelect":"Selectionner la figure",
							"idRotation":"rotation",
							"idInformation":"information",
							"idSave":"sauvegarder",
						}
						
					}
				}
			}
		}
	});
	
	return translation;
});