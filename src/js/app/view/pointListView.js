define(
		[ "backbone", "handlebars", "text!app/template/pointListView.html",
				"app/model/point", "app/view/pointItemView",
				"app/view/pointView" ],
		function(Backbone, Handlebars, tpl, Point, PointItemView, PointView) {

			var hbTemplate = Handlebars.compile(tpl);

			var PointListView = Backbone.View
					.extend({

						// tagName:"ul",
						template : hbTemplate,

						events : {
							"click #ajouter" : "newPoint",
							"click #supprimer" : "supprimerElem",
							"click #modifier" : "modifierElem",

						},

						initialize : function(args) {
							info("PointListView : [ENTER] : initialize");
							
							this.states = new Backbone.Model();
							
							this.itemViewArray = new Array();

							this.views = {};

							this.listenTo(this.collection, "all", this.render);

						},

						render : function() {
							info("PointListView : [ENTER] : render");

							var data = {};
							
							this.$el.html(this.template(data));
							this.$elList = this.$("#liste");
							this.renderList(this.collection);
						},

						renderList : function(collection) {
							info("PointListView : [ENTER] : renderList");
							var listElem = this.$elList;
							this.removeOldItemView();

							for ( var i = 0; i < collection.length; i++) {
								
								
								
								var itemView = this.renderItem(
										collection.models[i], i);

								if (itemView === null) {
									continue;
								}

								this.itemViewArray.push(itemView);

								listElem.append(itemView.$el);

								
							}

							this.states.set("selectedItem", collection.models[0]);

						},

						renderItem : function(model, numero) {
							info("PointListView : [ENTER] : renderItem");

							var itemView = new PointItemView({
								model : model
							});

							itemView.render();

							this.listenTo(itemView, "itemSelected",
									this.itemSelected);

							return itemView;
						},

						itemSelected : function(view) {
							info("PointListView : [ENTER] : itemSelected");
							this.states.set("selectedItem" , view.model);
							this.selectItem();
						l},

						selectItem : function() {
							info("PointListView : [ENTER] : selectItem");
							var itemSelected = this.get("selectedItem");
							for ( var i = 0; i < this.itemViewArray.length; i++) {
								var itemView = this.itemViewArray[i];
								itemView.states.set("selected",	itemSelected == itemView.model);
							}
						},

						removeOldItemView : function() {
							info("PointListView : [ENTER] : removeOldItemView");
							for ( var i = 0; i < this.itemViewArray.length; i++) {
								this.stopListening(this.itemViewArray[i]);
								this.itemViewArray[i].remove();
							}
							this.itemViewArray = new Array();
						},

						remove : function() {
							info("PointListView : [ENTER] : remove");
							Backbone.View.prototype.remove.call(this);
							this.removeOldItemView();
						},

						empty : function() {
							info("PointListView : [ENTER] : empty");
							Backbone.View.prototype.empty.call(this);
							this.removeOldItemView();
						},

						modifierElem : function() {
							info("PointListView : [ENTER] : modifierElem");
							if (this.states.get("selectedItem")) {
								this.renderPoint(this.states.get("selectedItem"));
							}
						},

						supprimerElem : function() {
							info("PointListView : [ENTER] : supprimerElem");
							if (this.states.get("selectedItem")) {
								this.collection.remove(this.states.get("selectedItem"));
								this.states.set("selectedItem", this.collection.at(0));
							}
						},

						newPoint : function() {
							var point = new Point();

							this.renderPoint(point);

							this.listenTo(this.views.pointView, "modelOk",
									this.addPointToCollection);
						},

						addPointToCollection : function(point) {
							this.collection.push(point);
							
						},

						hidePoint : function() {
							this.states.set("selectedItem",this.views.pointView.model);
							this.removeView(this.views.pointView);
							this.$("#vue-point").addClass("hidden")
							
						},

						renderPoint : function(point) {
							this.removeView(this.views.pointView);

							this.views.pointView = new PointView({
								model : point
							});

							this.$("#vue-point").html(this.views.pointView.$el);
							this.views.pointView.render();

							this.listenTo(this.views.pointView, "modelOk",
									this.hidePoint);

							this.$("#vue-point").removeClass("hidden");
							
						},
						removeView : function(view) {
							if (view) {
								this.stopListening(view);
								view.undelegateEvents();
								view.remove();
							}
						},

					});

			return PointListView;
		});
