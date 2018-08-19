define(
		[ "backbone", "handlebars", "text!app/template/dessinView.html",
				"app/outils/geometrie", "app/model/point",
				"app/outils/configuration" ],
		function(Backbone, Handlebars, tpl, Geometrie, Point, Configuration) {

			var hbTemplate = Handlebars.compile(tpl);

			var DessinView = Backbone.View
					.extend({

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

							var config = new Configuration().toJSON();

							var context = this.getContextAndSetup();

							this.longueurX = Geometrie.longueurAxe(
									this.minMax.xmin, this.minMax.xmax);
							this.longueurY = Geometrie.longueurAxe(
									this.minMax.ymin, this.minMax.ymax);

							this.ecartX = Geometrie.calculEcart(this.longueurX,
									config.structure.minEcartDirect,
									config.structure.maxEcartDirect,
									config.structure.bordMinDirect,
									config.structure.bordMaxDirect);
							this.ecartY = Geometrie.calculEcart(this.longueurY,
									config.structure.minEcartIndirect,
									config.structure.maxEcartIndirect,
									config.structure.bordMinIndirect,
									config.structure.bordMaxIndirect);

							this.dessinFormePleine(context, this.collection,
									config.drawingColors.figure);

							this.dessinAxes(context, config.drawingColors.axes);

							if (this.ecartX) {
								for ( var i = 0; i <= this.ecartX.nbEntraxes; i++) {
									this.dessinAxe(context,
											config.drawingColors.axes, "x",
											this.minMax.xmin + this.ecartX.bord + i
													* this.ecartX.entraxe);
								}
							}
							if (this.ecartY) {
								for ( var i = 0; i <= this.ecartY.nbEntraxes; i++) {
									this.dessinAxe(context,
											config.drawingColors.axes, "y",
											this.minMax.ymin + this.ecartY.bord + i
													* this.ecartY.entraxe);
								}
							}

						},

						getContextAndSetup : function() {
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

							// r�cup des min et max
							this.minMax = Geometrie.minMax(this.collection
									.toJSON());

							this.scale = this.$el.width()
									/ (this.minMax.xmax - this.minMax.xmin);

							// d�placement de l'origine sur le dessin pour caler
							// le coin en haut
							// � gauche
							// sur le sommet du rectangle englobant la figure
							this.origine = {
								x : -this.withScale(this.minMax.xmin),
								y : this.withScale(this.minMax.ymax)
							}

							// configuration de la taille du canvas pour caler
							// le coin en bas �
							// droite
							// sur le sommet du rectangle englobant.
							context.canvas.width = (this.minMax.xmax - this.minMax.xmin)
									* this.scale;
							context.canvas.height = (this.minMax.ymax - this.minMax.ymin)
									* this.scale;

							// dessin du rectangle englobant
							context.strokeRect(
									this.positionX(this.minMax.xmin), this
											.positionY(this.minMax.ymin), this
											.withScale(this.minMax.xmax
													- this.minMax.xmin), -this
											.withScale(this.minMax.ymax
													- this.minMax.ymin));

							return context;
						},

						moveTo : function(context, point) {
							info("DessinView : [ENTER] : moveTo");
							context.moveTo(this.positionX(point.get("x")), this
									.positionY(point.get("y")));
						},
						lineTo : function(context, point) {
							info("DessinView : [ENTER] : lineTo");
							context.lineTo(this.positionX(point.get("x")), this
									.positionY(point.get("y")));
						},

						/**
						 * axe = "x" ou "y"
						 * 
						 */
						dessinAxe : function(context, color, axe, value) {
							context.beginPath();

							var axePointMin = new Point();
							var axePointMax = new Point();
							context.fillStyle = color;

							if (axe === "x") {
								axePointMin.set("y", this.minMax.ymin);
								axePointMax.set("y", this.minMax.ymax);
								axePointMin.set("x", value);
								axePointMax.set("x", value);
							} else {
								axePointMin.set("x", this.minMax.xmin);
								axePointMax.set("x", this.minMax.xmax);
								axePointMin.set("y", value);
								axePointMax.set("y", value);
							}
							this.moveTo(context, axePointMin);
							this.lineTo(context, axePointMax);

							context.stroke();
							context.closePath();
						},

						dessinAxes : function(context, color) {
							// couleur des lignes
							context.fillStyle = color;

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

						dessinFormePleine : function(context, collection, color) {
							context.beginPath();
							context.fillStyle = color;
							for ( var i = 0; i < collection.length; i++) {
								if (i == 0) {
									this.moveTo(context, collection.at(i));
								} else {
									this.lineTo(context, collection.at(i));
								}

							}
							context.fill();
							context.closePath();
						},

						dessinFormeLigne : function(context, collection, color) {
							context.beginPath();
							context.fillStyle = color;
							for ( var i = 0; i < collection.length; i++) {
								if (i == 0) {
									this.moveTo(context, collection.at(i));
								} else {
									this.lineTo(context, collection.at(i));
								}

							}
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
							// conversion longueurs repere perso -> repere
							// canvas
							return exp * this.scale;
						}

					});

			return DessinView;
		});