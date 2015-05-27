define([ "backbone", "handlebars",  "text!app/template/editionFigureView.html" , "app/view/pointListView", "app/view/dessinView", "app/view/infoFigureView"], function(
		Backbone, Handlebars, tpl, PointListView, DessinView, InfoFigureView) {
		
	var hbTemplate = Handlebars.compile(tpl);
	
	var EditionFigureView = Backbone.View.extend({
		
		template: hbTemplate,
		
		events : {
			
		},
		
		initialize : function(args){
			info("EditionFigureView : [ENTER] : initialize");
			this.views = {};
		},
		
		render : function(){
			info("EditionFigureView : [ENTER] : render");
			
			var data = this.model.toJSON();
			this.$el.html(this.template(data));
			
			this.renderPointListView();
			this.renderDessinView();
			this.renderInfoFigureView();
		},
		
		renderPointListView : function(){
			info("EditionFigureView : [ENTER] : renderPointListView");
			this.views.pointListView = new PointListView({
				collection : this.model.get("points") 
			});

			this.$el.append(this.views.pointListView.$el);
			
			this.views.pointListView.render();
		},
		
		renderDessinView : function(){
			info("EditionFigureView : [ENTER] : renderDessinView");
			this.views.dessinView = new DessinView({
				collection : this.model.get("points") 
			});

			this.$el.append(this.views.dessinView.$el);
			
			this.views.dessinView.render();
		},
		
		renderInfoFigureView : function(){
			info("EditionFigureView : [ENTER] : renderInfoFigureView");
			this.views.infoFigureView = new InfoFigureView({
				collection : this.model.get("points") 
			});

			this.$el.append(this.views.infoFigureView.$el);
			
			this.views.infoFigureView.render();
		},
	
			
	});
	
	return EditionFigureView;
});