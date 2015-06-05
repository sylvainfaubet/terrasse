define([ "backbone", "handlebars", 
		"text!app/template/navbarView.html" ], function(Backbone, Handlebars,
		tpl) {

	var hbTemplate = Handlebars.compile(tpl);

	var NavbarView = Backbone.View.extend({

		template : hbTemplate,

		events : {

		},

		initialize : function(args) {
			info("NavbarView : [ENTER] : initialize");
		},

		render : function() {
			info("NavbarView : [ENTER] : render");
			var data = {};
			this.$el.html(this.template(data));
		}

	});

	return NavbarView;
});