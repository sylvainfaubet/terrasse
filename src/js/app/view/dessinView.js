define([ "backbone", "handlebars", 
		"text!app/template/dessinView.html", "app/outils/geometrie",
		"app/model/point" ], function(Backbone, Handlebars,  tpl,
		Geometrie, Point) {

	var hbTemplate = Handlebars.compile(tpl);

	var DessinView = Backbone.View.extend({

		template : hbTemplate,
		

		scale : 50,

		origine : {
			x : 200,
			y : 200
		},

		events : {

		},

		initialize : function(args) {
			info("DessinView : [ENTER] : initialize");
			this.listenTo(this.collection, "all", this.render);
		},

		render : function() {
			info("DessinView : [ENTER] : render");
			var data = {};
			this.$el.html(this.template(data));

			// récupération du context du canvas
			var context = this.getContext();
			// definition du dessin de la figure
			if (context) {
				for ( var i = 0; i < this.collection.length; i++) {
					if (i == 0) {
						this.moveTo(context, this.collection.at(i));
					} else {
						this.lineTo(context, this.collection.at(i));
					}

				}
			}

			// dessin effectif de la figure.
			this.draw(context);
		},

		getContext : function() {
			info("DessinView : [ENTER] : getContext");

			// récupération canvas
			var canvas = document.getElementById('canvas');
			if (!canvas) {
				alert("Impossible de récupérer le canvas");
				return undefined;
			}

			// recup context
			var context = canvas.getContext('2d');
			if (!context) {
				alert("Impossible de récupérer le context du canvas");
				return undefined;
			}

			// récup des min et max
			this.minMax = Geometrie.minMax(this.collection.toJSON());

			// déplacement de l'origine sur le dessin pour caler le coin en haut
			// à gauche
			// sur le sommet du rectangle englobant la figure
			this.origine = {
				x : -this.withScale(this.minMax.xmin),
				y : this.withScale(this.minMax.ymax)
			}

			// configuration de la taille du canvas pour caler le coin en bas à
			// droite
			// sur le sommet du rectangle englobant.
			context.canvas.width = (this.minMax.xmax - this.minMax.xmin)
					* this.scale;
			context.canvas.height = (this.minMax.ymax - this.minMax.ymin)
					* this.scale;

			// dessin du rectangle englobant
			context.strokeRect(this.positionX(this.minMax.xmin), this
					.positionY(this.minMax.ymin), this
					.withScale(this.minMax.xmax - this.minMax.xmin), -this
					.withScale(this.minMax.ymax - this.minMax.ymin));

			context.beginPath();

			// couleur de la figure
			context.fillStyle = "#990000";

			return context;
		},

		moveTo : function(context, point) {
			info("DessinView : [ENTER] : moveTo");
			context.moveTo(this.positionX(point.get("x")), this.positionY(point
					.get("y")));
		},
		lineTo : function(context, point) {
			info("DessinView : [ENTER] : lineTo");
			context.lineTo(this.positionX(point.get("x")), this.positionY(point
					.get("y")));
		},

		draw : function(context) {
			info("DessinView : [ENTER] : draw");
			// dessin plein
			context.fill();
			// fermeture de la figure.
			context.closePath();

			context.beginPath();

			var axeOrdonneePointMin = new Point();
			var axeOrdonneePointMax = new Point();

			axeOrdonneePointMin.set({
				y : this.minMax.ymin,
				x : 0
			});
			axeOrdonneePointMax.set({
				y : this.minMax.ymax,
				x : 0
			});

			this.moveTo(context, axeOrdonneePointMin);
			this.lineTo(context, axeOrdonneePointMax);

			context.stroke();
			context.closePath();

			context.beginPath();

			var axeAbscissePointMin = new Point();
			var axeAbscissePointMax = new Point();

			axeAbscissePointMin.set({
				x : this.minMax.xmin,
				y : 0
			});
			axeAbscissePointMax.set({
				x : this.minMax.xmax,
				y : 0
			});
			axeAbscissePointMax.set("y", 0);

			this.moveTo(context, axeAbscissePointMin);
			this.lineTo(context, axeAbscissePointMax);

			context.stroke();
			context.closePath();

		},

		positionX : function(x) {
			info("DessinView : [ENTER] : positionX");
			// conversion repere perso-> repere canvas
			return this.origine.x + (x * this.scale);
		},
		positionY : function(y) {
			info("DessinView : [ENTER] : positionY");
			// conversion repere perso-> repere canvas
			return this.origine.y - (y * this.scale);
		},
		withScale : function(exp) {
			info("DessinView : [ENTER] : withScale");
			// conversion longueurs repere perso -> repere canvas
			return exp * this.scale;
		}

	});

	return DessinView;
});