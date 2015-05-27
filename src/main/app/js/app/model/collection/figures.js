define([ "backbone","app/model/figure", "localstorage"],function(Backbone, Figure, Store){
	var Figures = Backbone.Collection.extend({
		model: Figure,
		
		url:"/json/figures.json",
		
		localStorage: new Store("Figures")
	});
	return Figures;
});
