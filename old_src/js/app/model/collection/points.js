define([ "backbone","app/model/point"],function(Backbone, Point){
	var Points = Backbone.Collection.extend({
		model: Point
	});
	return Points;
});