define([ "backbone", "handlebars", "text!app/template/navbarView.html",
		"app/text/textTranslation", "app/outils/configuration" ,"bootstrap"], function(
		Backbone, Handlebars, tpl, TextTranslation, Configuration) {

	var hbTemplate = Handlebars.compile(tpl);

	var NavbarView = Backbone.View.extend({

		template : hbTemplate,

		events : {
			"click li ul li" : "triggerClick",
		},

		initialize : function(args) {
			info("NavbarView : [ENTER] : initialize");
		},

		render : function() {
			info("NavbarView : [ENTER] : render");
			var data = {};
			data.translate = new TextTranslation().toJSON();
			data.constantes = new Configuration().toJSON();
			data.etape = this.etape;
			this.$el.html(this.template(data));
		},

		triggerClick : function(event) {
			this.trigger(event.currentTarget.id);
		},

		setEtape : function(etape) {
			this.etape = etape;
			this.render();
		}
	});

	return NavbarView;
});
