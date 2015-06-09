define(
		[ "backbone", "app/model/collection/figures",
				"app/model/collection/points", "app/model/figure",
				"app/view/mainView", "app/view/dessinView",
				"app/view/editionFigureView", "app/view/infoFigureView",
				"app/view/choixFigureView", "app/view/navbarView",
				"app/view/figureControlView","app/outils/geometrie" ],
		function(Backbone, Figures, Points, Figure, MainView, DessinView,
				EditionFigureView, InfoFigureView, ChoixFigureView, NavbarView,
				FigureControlView, Geometrie) {

			var MainController = Backbone.View
					.extend({

						initialize : function() {
							info("MainController : [ENTER] : initialize");
							this.views = {};
							this.collections = {};
							this.controllers = {};
							this.collections.figures = new Figures();
							this.collections.figures.fetch();
						},

						start : function() {
							info("MainController : [ENTER] : start");
							this.renderSocle();
							this.renderNavbar();
							this.renderChoixFigures();
						},

						renderSocle : function() {
							info("MainController : [ENTER] : renderSocle");
							this.views.mainView = new MainView();
							this.$el.html(this.views.mainView.$el);
							this.views.mainView.render();
						},

						renderChoixFigures : function() {
							info("MainController : [ENTER] : renderChoixFigures");

							this.removeAllView();

							this.views.choixFigures = new ChoixFigureView({
								collection : this.collections.figures
							});

							this.$("#main").html(this.views.choixFigures.$el);

							this.listenTo(this.views.choixFigures, "ajout",
									this.ajouterFigure);
							this.listenTo(this.views.choixFigures, "edition",
									this.editerFigure);

							this.views.choixFigures.render();
						},

						ajouterFigure : function() {
							var nom = prompt("entrez le nom de la figure");
							if (nom) {

								var figure = new Figure();
								this.collections.figures.add(figure);

								figure.set("name", nom);

								this.renderFigure(figure);
							}
						},

						editerFigure : function(itemView) {
							var figure = itemView.model;

							this.renderFigure(figure);
						},

						rotationFigure: function(params){
							var newPoints = Geometrie.rotationFigure(this.selectedFigure.get("points").toJSON(),params.centre,params.angle)
							this.selectedFigure.get("points").set(newPoints);
							this.selectedFigure.preSave();
//							this.renderFigure(this.selectedFigure);
						},
						
						renderFigure : function(figure) {
							info("MainController : [ENTER] : renderChoixFigures");

							this.removeAllView();

							this.views.editionFigures = new EditionFigureView({
								model : figure
							});

							this.$("#main").html(this.views.editionFigures.$el);

							this.selectedFigure = figure;

							this.views.editionFigures.render();
							this.views.editionFigures.postRender();
						},

						renderNavbar : function() {
							info("MainController : [ENTER] : renderNavbar");

							this.removeAllView();

							this.views.navbar = new NavbarView({});

							this.$(".navbar").html(this.views.navbar.$el);

							this.listenTo(this.views.navbar, "figure",
									this.renderChoixFigures)
							this.listenTo(this.views.navbar, "rotation",
									this.renderFigureControl)
							this.listenTo(this.views.navbar, "info",
									this.renderInfoFigureView)

							this.views.navbar.render();

						},

						renderFigureControl : function() {
							if (this.selectedFigure) {

								this.remove(this.views.figureControl);
								info("EditionFigureView : [ENTER] : renderFigureControl");
								this.views.figureControl = new FigureControlView(
										{
											model : this.selectedFigure
										});
								this.listenTo(this.views.figureControl,"rotationFigure",this.rotationFigure)
							}

						},

						renderInfoFigureView : function() {
							if (this.selectedFigure) {
								info("EditionFigureView : [ENTER] : renderInfoFigureView");
								this.views.infoFigureView = new InfoFigureView({
									model : this.selectedFigure
								});
							}
						},

						removeAllView : function() {
							this.remove(this.views.editionFigures);
							this.remove(this.views.choixFigures);
						},

						remove : function(view) {
							if (view) {
								this.stopListening(view);
								view.remove();
							}
						}

					});

			return MainController;

		});
