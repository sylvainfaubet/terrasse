define([ "backbone", "handlebars", 
		"text!app/template/pointView.html" ], function(Backbone, Handlebars,
		 tpl) {

	var hbTemplate = Handlebars.compile(tpl);

	var PointView = Backbone.View.extend({

		template : hbTemplate,

		events : {
			"click #save" : "setModel",

		},

		initialize : function(args) {
			info("PointView : [ENTER] : initialize");
		},

		render : function() {
			info("PointView : [ENTER] : render");
			var data = this.model.toJSON();

			this.$el.html(this.template(data));
		},

		setModel : function(event) {
			info("PointView : [ENTER] : setModel");

			this.model.set({
				x : parseFloat(this.$("#input_x").val()),
				y : parseFloat(this.$("#input_y").val())
			});

			console.log(this.model.toJSON());
			this.trigger("modelOk", this.model);
		}

	});

	return PointView;
});