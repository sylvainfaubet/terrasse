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
		},
		
		parse: function(json){
			
			json.points = new Points(json.points,{parse:true});
			
			return json;
		},
		
		
		
		toJSON:function(){
			var json = {};
			json.name = this.get("name");
			if(this.get("update")){
				json.points = this.get("update") ? this.get("update").toJSON() : this.get("update");
			}else{
				json.points = this.get("points") ? this.get("points").toJSON() : this.get("points");
			}
			return json;
		}

	});

	return Figure;
});