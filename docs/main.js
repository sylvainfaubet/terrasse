(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sandbox/sandbox.component */ "./src/app/sandbox/sandbox.component.ts");
/* harmony import */ var _drawing_area_drawing_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing-area/drawing-area.component */ "./src/app/drawing-area/drawing-area.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'draw', component: _drawing_area_drawing_area_component__WEBPACK_IMPORTED_MODULE_4__["DrawingAreaComponent"] },
    {
        path: 'sandbox',
        component: _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_3__["SandboxComponent"],
        children: [
            {
                path: '',
                component: _drawing_area_drawing_area_component__WEBPACK_IMPORTED_MODULE_4__["DrawingAreaComponent"],
            },
        ],
    },
    { path: '', pathMatch: 'full', redirectTo: 'draw' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fxFill>\n    <mat-sidenav #sidenav>\n        <mat-list (click)=\"sidenav.toggle()\">\n            <mat-list-item *ngFor=\"let route of routes\" routerLink=\"{{route.path}}\" routerLinkActive=\"active\">{{route.path}}</mat-list-item>\n        </mat-list>\n    </mat-sidenav>\n    <mat-sidenav-content fxLayout=\"column\">\n        <mat-toolbar color=\"primary\">\n            <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n            <div id=\"title\">{{ title }}</div>\n        </mat-toolbar>\n        <div fxFlex fxLayoutAlign=\"start start\">\n            <router-outlet></router-outlet>\n        </div>\n        <terrasse-footer></terrasse-footer>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "terrasse-root mat-sidenav-content mat-toolbar #title {\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.routes = _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routes"];
        this.title = 'Terrasse 2.0';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terrasse-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _drawing_area_drawing_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drawing-area/drawing-area.component */ "./src/app/drawing-area/drawing-area.component.ts");
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sandbox/sandbox.component */ "./src/app/sandbox/sandbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _drawing_area_drawing_area_component__WEBPACK_IMPORTED_MODULE_9__["DrawingAreaComponent"], _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_10__["SandboxComponent"]],
            exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terrasse-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/drawing-area/drawing-area.component.html":
/*!**********************************************************!*\
  !*** ./src/app/drawing-area/drawing-area.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFill fxLayout=\"column\">\n    <mat-card fxLayout=\"row wrap\" fxLayoutAlign=\"space-around center\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n        <button mat-flat-button (click)=\"newPolygon()\">recommencer</button>\n        <mat-button-toggle-group #group=\"matButtonToggleGroup\" [value]=\"mode\" (change)=\"onModeChange($event.value)\">\n            <mat-button-toggle value=\"add\">ajouter</mat-button-toggle>\n            <!-- <mat-button-toggle value=\"modify\">modifier</mat-button-toggle> -->\n            <mat-button-toggle value=\"delete\">supprimer</mat-button-toggle>\n        </mat-button-toggle-group>\n        <span>aire : {{getArea(polygon)}}</span>\n        <span>perimetre : {{getPerimeter(polygon)}}</span>\n    </mat-card>\n    <div class=\"drawing-zone\" fxFlex fxLayoutAlign=\"start start\">\n        <svg (click)=\"onClick($event)\" [attr.viewBox]=\"getViewboxText()\" transform=\"scale(1,-1)\">\n            <polygon [attr.fill]=\"fill\" [attr.stroke]=\"stroke\" stroke-width=\"0.1\" [attr.points]=\"formatPoints(polygon)\"></polygon>\n            <circle *ngFor=\"let p of polygon\" [attr.cx]=\"p.x\" [attr.cy]=\"p.y\" r=\"0.2\" stroke=\"red\" fill=\"transparent\" stroke-width=\"0.1\"/>\n            <defs>\n                <pattern id=\"grid\" width=\"1\" height=\"1\" patternUnits=\"userSpaceOnUse\">\n                    <path d=\"M 0 1 L 1 1 1 0\" fill=\"none\" stroke=\"gray\" stroke-width=\"0.1\"/>\n                </pattern>\n            </defs>\n            <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n        </svg>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/drawing-area/drawing-area.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/drawing-area/drawing-area.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "terrasse-drawing-area {\n  width: 100%;\n  height: 100%; }\n  terrasse-drawing-area .drawing-zone {\n    border: 1px solid black; }\n  terrasse-drawing-area .drawing-zone svg {\n      width: 100%;\n      height: 100%; }\n"

/***/ }),

/***/ "./src/app/drawing-area/drawing-area.component.ts":
/*!********************************************************!*\
  !*** ./src/app/drawing-area/drawing-area.component.ts ***!
  \********************************************************/
/*! exports provided: DrawingAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingAreaComponent", function() { return DrawingAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_geometrie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/geometrie */ "./src/app/shared/geometrie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawingAreaComponent = /** @class */ (function () {
    function DrawingAreaComponent(el) {
        this.el = el;
        this.fill = 'red';
        this.stroke = 'black';
        this.mode = 'add';
        this.viewBoxHeight = 15;
        this.viewBoxRatio = 1.1;
    }
    DrawingAreaComponent.prototype.ngOnInit = function () {
        this.newPolygon();
        this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
        this.matrix = this.svg.createSVGMatrix().translate(0, this.viewBoxHeight).scale(1, -1);
    };
    DrawingAreaComponent.prototype.getArea = function (polygon) {
        return Object(_shared_geometrie__WEBPACK_IMPORTED_MODULE_1__["airePolygone"])(polygon);
    };
    DrawingAreaComponent.prototype.getPerimeter = function (polygon) {
        return Object(_shared_geometrie__WEBPACK_IMPORTED_MODULE_1__["perimetrePolygone"])(polygon);
    };
    DrawingAreaComponent.prototype.getViewboxText = function () {
        if (!this.viewBoxRatioDone) {
            this.viewBoxRatio = Math.round(this.svg.parentElement.clientWidth / this.svg.parentElement.clientHeight);
            this.viewBoxRatioDone = true;
        }
        return '0 0 ' + this.viewBoxRatio * this.viewBoxHeight + ' ' + this.viewBoxHeight;
    };
    DrawingAreaComponent.prototype.newPolygon = function () {
        this.polygon = new Array();
    };
    DrawingAreaComponent.prototype.formatPoints = function (polygon) {
        return polygon.map(function (point) { return point.x + ',' + point.y; }).join(' ');
    };
    DrawingAreaComponent.prototype.onModeChange = function (value) {
        this.mode = value;
    };
    DrawingAreaComponent.prototype.onClick = function (event) {
        console.log(event);
        var clickedPoint = this.getClickedPoint(event);
        clickedPoint.roundPosition();
        var foundPoint = Object(_shared_geometrie__WEBPACK_IMPORTED_MODULE_1__["findPointInPolygon"])(this.polygon, clickedPoint, 1);
        switch (this.mode) {
            case 'add':
                this.polygon.push(clickedPoint);
                break;
            case 'modify':
                break;
            case 'delete':
                if (foundPoint) {
                    this.polygon.splice(this.polygon.indexOf(foundPoint), 1);
                }
                break;
            default:
        }
    };
    DrawingAreaComponent.prototype.getClickedPoint = function (event) {
        var svg = event.currentTarget;
        var p = svg.createSVGPoint();
        p.x = event.clientX;
        p.y = event.clientY;
        var goodPoint = p.matrixTransform(svg.getScreenCTM().inverse()).matrixTransform(this.matrix);
        return new _shared_geometrie__WEBPACK_IMPORTED_MODULE_1__["Point"](goodPoint.x, goodPoint.y);
    };
    DrawingAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terrasse-drawing-area',
            template: __webpack_require__(/*! ./drawing-area.component.html */ "./src/app/drawing-area/drawing-area.component.html"),
            styles: [__webpack_require__(/*! ./drawing-area.component.scss */ "./src/app/drawing-area/drawing-area.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DrawingAreaComponent);
    return DrawingAreaComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  footer works!\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "terrasse-footer {\n  width: 100%; }\n  terrasse-footer .mat-toolbar {\n    height: 40px;\n    font-size: 0.8em; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terrasse-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: Modules,
            exports: Modules,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/sandbox/sandbox.component.html":
/*!************************************************!*\
  !*** ./src/app/sandbox/sandbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sandbox\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/sandbox/sandbox.component.scss":
/*!************************************************!*\
  !*** ./src/app/sandbox/sandbox.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "terrasse-sandbox {\n  height: 100%;\n  width: 100%; }\n  terrasse-sandbox #sandbox {\n    background-color: lightblue;\n    height: 80%;\n    width: 80%;\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/sandbox/sandbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sandbox/sandbox.component.ts ***!
  \**********************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SandboxComponent = /** @class */ (function () {
    function SandboxComponent() {
    }
    SandboxComponent.prototype.ngOnInit = function () { };
    SandboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terrasse-sandbox',
            template: __webpack_require__(/*! ./sandbox.component.html */ "./src/app/sandbox/sandbox.component.html"),
            styles: [__webpack_require__(/*! ./sandbox.component.scss */ "./src/app/sandbox/sandbox.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SandboxComponent);
    return SandboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/geometrie.ts":
/*!*************************************!*\
  !*** ./src/app/shared/geometrie.ts ***!
  \*************************************/
/*! exports provided: Point, findPointInPolygon, distance, perimetrePolygone, airePolygone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPointInPolygon", function() { return findPointInPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perimetrePolygone", function() { return perimetrePolygone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airePolygone", function() { return airePolygone; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.roundPosition = function () {
        this.x = Math.round(this.x * 2) / 2;
        this.y = Math.round(this.y * 2) / 2;
    };
    return Point;
}());

var findPointInPolygon = function (polygon, point, maxDistance) {
    for (var _i = 0, polygon_1 = polygon; _i < polygon_1.length; _i++) {
        var polygonPoint = polygon_1[_i];
        if (distance(point, polygonPoint) < maxDistance) {
            return polygonPoint;
        }
    }
    return undefined;
};
var distance = function (a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};
var perimetrePolygone = function (path) {
    var perimetre = 0;
    for (var i = 1; i < path.length; i++) {
        var tmp1 = path[i - 1];
        var tmp2 = path[i];
        perimetre += distance(tmp1, tmp2);
    }
    if (path.length > 1) {
        perimetre += distance(path[path.length - 1], path[0]);
    }
    return perimetre;
};
var airePolygone = function (path) {
    var aire = 0;
    for (var i = 0; i < path.length; i++) {
        var pi = path[i];
        var pi1 = path[(i + 1) % path.length];
        aire += (pi.x + pi1.x) * (pi1.y - pi.y);
    }
    aire = aire / 2;
    return Math.sqrt(Math.pow(aire, 2));
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sfaubet/workspace/terrasse/terrasse-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map