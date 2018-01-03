define([],
		function() {
			return {
				// un point est un objet javascript {x:<val_x>,y:<val_y>}
				longueurSegment : function(a, b) {
					return Math.sqrt(Math.pow(b.x - a.x, 2)
							+ Math.pow(b.y - a.y, 2));
				},
				
				longueurAxe : function(a,b){
					return b>a?b-a:a-b;
				},

				// path =
				// [{x:<val_x>,y:<val_y>},{x:<val_x>,y:<val_y>},{x:<val_x>,y:<val_y>},{x:<val_x>,y:<val_y>},...]
				perimetrePolygone : function(path) {
					var perimetre = 0;

					for ( var i = 1; i < path.length; i++) {
						var tmp1 = path[i - 1];
						var tmp2 = path[i];

						perimetre += this.longueurSegment(tmp1, tmp2);
					}
					if (path.length > 1) {
						perimetre += this.longueurSegment(
								path[path.length - 1], path[0]);
					}
					return perimetre;
				},

				// path =
				// [{x:<val_x>,y:<val_y>},{x:<val_x>,y:<val_y>},{x:<val_x>,y:<val_y>},{x:<val_x>,y:<val_y>},...]
				minMax : function(path) {

					var response = {
						xmin : Infinity,
						xmax : -Infinity,
						ymin : Infinity,
						ymax : -Infinity
					};

					for ( var i = 0; i < path.length; i++) {
						var point = path[i];
						if (point.x < response.xmin) {
							response.xmin = point.x;
						}
						if (point.x > response.xmax) {
							response.xmax = point.x;
						}
						if (point.y < response.ymin) {
							response.ymin = point.y;
						}
						if (point.y > response.ymax) {
							response.ymax = point.y;
						}
					}
					return response;
				},

				//
				aireRectangleEnglobant : function(path) {
					var minMax = this.minMax(path);
					return (minMax.xmax - minMax.xmin)
							* (minMax.ymax - minMax.ymin);
				},

				aireTriangle : function(pointA, pointB, pointC) {
					return 1 / 2 * Math.sqrt(Math.pow((pointB.x - pointA.x)
							* (pointC.y - pointA.y) - (pointC.x - pointA.x)
							* (pointB.y - pointA.y), 2));
				},

				airePolygone : function(path) {
					var aire = 0;
					for ( var i = 0; i < path.length; i++) {
						var pi = path[i];
						var pi1 = path[(i + 1) % path.length];
						aire += (pi.x + pi1.x) * (pi1.y - pi.y);
					}
					aire = aire / 2;

					return Math.sqrt(Math.pow(aire, 2));
				},
				// point = {x : <val_x>, y :<val_y>}
				// centre = {x : <val_x>, y :<val_y>}
				// angle = valeur en degr� sens trigo

				rotationPoint : function(point, centre, angle) {
					var x = (point.x - centre.x)
							* Math.cos(angle * Math.PI / 180)
							- (point.y - centre.y)
							* Math.sin(angle * Math.PI / 180);
					var y = (point.x - centre.x)
							* Math.sin(angle * Math.PI / 180)
							+ (point.y - centre.y)
							* Math.cos(angle * Math.PI / 180);

					return {
						x : centre.x + x,
						y : centre.y + y
					};

				},

				rotationFigure : function(points, centre, angle) {
					var array = [];
					if (Array.isArray(points)) {
						for ( var elem in points) {
							array.push(this.rotationPoint(points[elem], centre,
									angle));
						}
					}
					return array;
				},

				angleRotationOptimal : function(collection) {
					var angleRotation = 0;
					var centre = {
						x : 0,
						y : 0
					};
					var surfaceRectangle = this
							.aireRectangleEnglobant(collection);

					for ( var i = 0; i < 360; i++) {
						var collectionTournee = this.rotationFigure(collection,
								centre, i);
						aireRectangleTournee = this
								.aireRectangleEnglobant(collectionTournee);
						var minMax = this.minMax(collectionTournee);
						if (surfaceRectangle >= aireRectangleTournee
								&& this.longueurSegment({
									x : minMax.xmin,
									y : minMax.ymin
								}, {
									x : minMax.xmax,
									y : minMax.ymin
								}) > this.longueurSegment({
									x : minMax.xmin,
									y : minMax.ymin
								}, {
									x : minMax.xmin,
									y : minMax.ymax
								})) {
							surfaceRectangle = aireRectangleTournee;
							angleRotation = i;
						}
					}

					return angleRotation;
				},
				// collection : [point1,point2, ...]
				// rangeMin, rangeMax : borne inf et sup de l'écart calculable
				// axe nom de l'axe recherché : "x" ou "y"
				// minBord, maxBord 
				calculEcart : function(longueur, rangeMin, rangeMax, minBord, maxBord) {
					for ( var i = rangeMax*100; i >= rangeMin*100; i--) {
						var largeurBords = longueur % (i/100);
						if(largeurBords>=minBord*2 && largeurBords <= maxBord*2){
							return {entraxe : i/100, bord : largeurBords/2, nbEntraxes : Math.trunc(longueur / (i/100))};
						}
					}
				}
			};

		});