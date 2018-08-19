define([ 'backbone'

], function(Backbone) {
	'use strict';

	var Point = Backbone.Model.extend({

		defaults : {
			x : 0,
			y : 0
		},
	
		initialize : function(){
			
		},
		
		parse : function(json){
			return json;
		}

	});

	return Point;
});