define([ "backbone", "handlebars", 
		"text!app/template/mainView.html" ], function(Backbone, Handlebars,
		tpl) {

	var hbTemplate = Handlebars.compile(tpl);

	var MainView = Backbone.View.extend({

		template : hbTemplate,

		events : {

		},

		initialize : function(args) {
			info("MainView : [ENTER] : initialize");
		},

		render : function() {
			info("MainView : [ENTER] : render");
			var data = {};
			this.$el.html(this.template(data));
		}

	});

	return MainView;
});