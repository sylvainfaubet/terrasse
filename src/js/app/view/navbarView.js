define([ "backbone", "handlebars", 
		"text!app/template/navbarView.html" ], function(Backbone, Handlebars,
		tpl) {

	var hbTemplate = Handlebars.compile(tpl);

	var NavbarView = Backbone.View.extend({

		template : hbTemplate,

		events : {
			"click li ul li":"triggerClick",
		},

		initialize : function(args) {
			info("NavbarView : [ENTER] : initialize");
			this.menuFigure=false;
		},

		render : function() {
			info("NavbarView : [ENTER] : render");
			var data = {};
			data.menuFigure = this.menuFigure;
			this.$el.html(this.template(data));
		},
		
		
		triggerClick : function(event){
			this.trigger(event.currentTarget.id);
		},
		
       showMenuFigure: function(){
		   this.menuFigure = true;
		   this.render();
	   },
	   
	   hideMenuFigure: function(){
		   this.menuFigure=false;this.render();
	   }
	});

	return NavbarView;
});
