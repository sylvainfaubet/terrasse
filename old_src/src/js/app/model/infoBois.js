define([ 'backbone'

], function(Backbone) {
	'use strict';

	var InfoBois = Backbone.Model.extend({

		defaults : {
			longueur : 0,
			largeur : 0,
			epaisseur : 0,
		},
	
		initialize : function(){
			
		}

	});

	return InfoBois;
});