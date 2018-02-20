define([ "backbone", "handlebars", "text!app/template/figureControlView.html",
		"app/view/pointView", "app/view/pointItemView", "app/model/point",
		"app/outils/geometrie", "bootstrap"], function(Backbone, Handlebars, tpl,
		PointView, PointItemView, Point, Geometrie) {

	var hbTemplate = Handlebars.compile(tpl);

	var FigureControlView = Backbone.View
			.extend({

				template : hbTemplate,
				className : "modal",

				events : {
					"change #input-angle" : "majAngle",
					"click #rotate" : "rotationFigure",
					"click #calcul-angle" : "calculAngle",
					"click #modifier-centre" : "renderPointView",
					"click .close" : "remove"
				},

				initialize : function(args) {
					info("FigureControlView : [ENTER] : initialize");
					this.centreRotation = new Point();
					this.angle = 0;
					this.views = {};

					this.render();

					this.$el.modal();

				},

				render : function() {
					info("FigureControlView : [ENTER] : render");
					var data = {};
					data.angle = this.angle;
					this.$el.html(this.template(data));

					this.renderPointItemView();

				},

				renderPointItemView : function() {
					this.views.pointItem = new PointItemView({
						model : this.centreRotation
					});
					this.$("#centre-value").html(this.views.pointItem.$el);
					this.views.pointItem.render();
				},

				renderPointView : function() {
					this.views.point = new PointView({
						model : this.centreRotation
					});
				},

				removeView : function(view) {
					if (view) {
						this.stopListening(view);
						view.undelegateEvents();
						view.remove();
					}
				},
				majAngle : function(event) {
					this.angle = parseFloat(event.currentTarget.value.replace(
							",", "."));
				},

				rotationFigure : function() {
					this.trigger("rotationFigure",{angle:this.angle, centre: this.centreRotation.toJSON()});
				},

				calculAngle : function() {
					this.angle = Geometrie.angleRotationOptimal(this.model.get("points").toJSON());
					this.render();
				}

			});

	return FigureControlView;
});