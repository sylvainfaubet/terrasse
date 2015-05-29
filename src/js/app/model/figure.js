define([ "backbone","app/model/collection/points"

], function(Backbone, Points ) {
	'use strict';

	var Figure = Backbone.Model.extend({

		idAttribute:"name",
		
		defaults : {
			name : "",
			points: new Points()
		},
	
		initialize : function(){
			this.listenTo(this.get("points"),"all",this.save);
		},
		
		parse: function(json){
			
			json.points = new Points(json.points,{parse:true});
			
			return json;
		},

	});

	return Figure;
});