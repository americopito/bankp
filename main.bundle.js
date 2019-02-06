webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-list></app-list>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__serviceb_service__ = __webpack_require__("./src/app/serviceb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__list_list_component__["a" /* ListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__serviceb_service__["a" /* ServicebService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n#team {\r\n    background: #eee !important;\r\n}\r\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    outline: none;\r\n}\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\r\nsection {\r\n    padding: 60px 0;\r\n    \r\n}\r\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n#team .card {\r\n    border: none;\r\n    background: #ffffff;\r\n}\r\n.card:hover{\r\n    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\r\n    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\r\n    \r\n}\r\n.frontside {\r\n    position: relative;\r\n    -webkit-transform: rotateY(0deg);\r\n    -ms-transform: rotateY(0deg);\r\n    z-index: 2;\r\n    margin-bottom: 30px;\r\n    \r\n}\r\n.frontside {\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -moz-transition: 1s;\r\n    -moz-transform-style: preserve-3d;\r\n    -o-transition: 1s;\r\n    -o-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n}\r\n.frontside .card,\r\n.backside .card {\r\n    min-height: 312px;\r\n}\r\n.backside .card a {\r\n    font-size: 18px;\r\n    color: #007b5e !important;\r\n}\r\n.frontside .card .card-title,\r\n.backside .card .card-title {\r\n    color: #f79400 !important;\r\n}\r\n.ctitle{\r\n    color: #f79400 !important;\r\n}\r\n.frontside .card .card-body img {\r\n    width: 40px;\r\n    height: 120px;\r\n    border-radius: 25%;\r\n}\r\n.modal-body img {\r\n    width: 100px;\r\n    height: 320px;\r\n    border-radius: 25%;\r\n    \r\n}\r\n.des{\r\n    font-size: 12px;\r\n}\r\n.bot{\r\n    display:block;float:right;\r\n}\r\n.color{\r\n color:white;   \r\n}"

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"card\" class=\"col-12 col-md-6\"  style=\"width: 18rem;\" *ngFor=\"let l of list\">\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{l.name}}</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n  </div>\n</div>  \n--> \n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n   <nav class=\"bg-warning\">\n        <div class=\"container color\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                        <div class=\"float-right\">\n                        <a  href=\"\" >HOME</a>   &nbsp; FAVORITE</div>\n                        \n                </div>\n            </div>\n                <div class=\"row\">\n                <div class=\"col-12 text-center\">\n                        <h4>The Beer Bank</h4>\n                        <p style=\"font-size: 11px\">find your favorite beer here</p>\n                                    \n                    </div>\n                </div>\n                <div class=\"row \">\n                    <div class=\"col-12\">\n                        \n                                               <div class=\"form-group \">\n                                    \n                                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Search for beer name\">\n                                \n                                  </div>                    \n                               \n                            </div>\n                </div>\n                            \n          </div>\n     \n        </nav>\n<section id=\"team\" class=\"pb-5\">\n    <div class=\"container\">\n            \n        <div class=\"row\">\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let l of list\" id={{l.id}} >\n                \n                    \n                        <div class=\"frontside\">\n                            <div class=\"card\" (click)=\"open(content,l.id)\">\n                                <div class=\"card-body text-center\">\n                                        <div class=\"pull-right\"><i class=\"fa fa-star-o\"></i></div>\n                                    <p><img class=\" img-fluid\" src=\"{{l.image_url}}\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">{{l.name}}</h4>\n                                    <p class=\"card-text\">{{l.tagline}}</p>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                        \n                    \n                \n            </div>\n          \n        </div>\n    </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\"   >\n    <div class=\"modal-header\"  >\n      \n      \n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" *ngFor=\"let b of beer\">\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <img src={{b.image_url}} alt=\"\">\n            </div>\n            <div class=\"col-8\">\n                <h4 class=\"ctitle\">{{b.name}}</h4>\n                <p >{{b.tagline}}</p>\n                <p> <b>IBU: </b>{{b.ibu}} &nbsp;   <b>ABV: </b>{{b.abv}} &nbsp; <b> EBC: </b>{{b.ebc}} </p>\n                <p class=\"des text-justify\" >{{b.description}}</p>\n                <h6>best served with:</h6>\n                <ul  class=\"des\" *ngFor=\"let bi of b.food_pairing\">\n                    \n                    <li>{{bi}}</li> \n             </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div></div>\n                \n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\" *ngFor=\"let li of list | slice:0:3; let i=index\">\n                    <div class=\"card\" style=\"width: 8rem;\" >\n                            <img class=\"card-img-top\" style=\"width: 20px;height:60px\" src={{li.image_url}} >\n                            <div class=\"card-body\">\n                              <h6 class=\"card-title\">{{li.name}}</h6>\n                              \n                           \n                            </div>\n                          </div>      \n            </div>\n\n        </div>\n    </div>\n    \n  </ng-template>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serviceb_service__ = __webpack_require__("./src/app/serviceb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(serv, http, modalService) {
        this.serv = serv;
        this.http = http;
        this.modalService = modalService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getlistbeers();
    };
    ListComponent.prototype.getlistbeers = function () {
        var _this = this;
        this.serv.getBeers().subscribe(function (data) {
            _this.list = data;
        });
    };
    ListComponent.prototype.open = function (content, ids) {
        var _this = this;
        var index = ids;
        this.serv.getBeersbyid(ids).subscribe(function (data) {
            _this.beer = data;
            _this.list2 = _this.beer[0];
        });
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ListComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__serviceb_service__["a" /* ServicebService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/serviceb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicebService = /** @class */ (function () {
    function ServicebService(http) {
        this.http = http;
    }
    ServicebService.prototype.getBeers = function () {
        return this.http.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
            .map(function (res) { return res.json(); });
    };
    ServicebService.prototype.getBeersbyid = function (id) {
        return this.http.get('https://api.punkapi.com/v2/beers/' + id)
            .map(function (res) { return res.json(); });
    };
    ServicebService.prototype.getBeersbyname = function (name) {
        return this.http.get('https://api.punkapi.com/v2/beers?beer_name=' + name)
            .map(function (res) { return res.json(); });
    };
    ServicebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServicebService);
    return ServicebService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map