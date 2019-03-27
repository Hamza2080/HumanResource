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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/user-profile/user-profile.component */ "./src/app/components/home/user-profile/user-profile.component.ts");
/* harmony import */ var _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/dashboard/dashboard.component */ "./src/app/components/home/dashboard/dashboard.component.ts");







var routes = [
    {
        path: 'error',
        component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            {
                path: 'profile',
                component: _components_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"]
            },
            {
                path: 'dashboard',
                component: _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'error',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'humanResourceProject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/header/header.component */ "./src/app/components/home/header/header.component.ts");
/* harmony import */ var _components_home_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/sidebar/sidebar.component */ "./src/app/components/home/sidebar/sidebar.component.ts");
/* harmony import */ var _components_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/user-profile/user-profile.component */ "./src/app/components/home/user-profile/user-profile.component.ts");
/* harmony import */ var _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/dashboard/dashboard.component */ "./src/app/components/home/dashboard/dashboard.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_home_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_home_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _components_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex flex-row justify-content-center my-flex-container\">\n    <div class=\"p-2 my-flex-item\">\n      <span class=\"error\">\n          Error 404! Page not found.\n      </span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  font-size: 2em;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbXphL0Rlc2t0b3AvSHVtYW4gUmVzb3VyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/components/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/home/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display new user data -->\n<div class=\"row\">\n  <div class=\"col\">\n    <button class=\"button-create-user btn btn-primary btn-md\" (click)=\"lgModal.show()\">Create New User</button>\n  </div>\n</div>\n\n\n<!-- table display user data -->\n<table datatable class=\"row-border hover\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Address</th>\n      <th>Contact</th>\n      <th>Company</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of userData\">\n      <td>{{user?.id}}</td>\n      <td>{{user?.name}}</td>\n      <td>{{user?.email}}</td>\n      <td>{{user?.address?.street}}-{{user?.address?.city}}</td>\n      <td>{{user?.phone}}</td>\n      <td>{{user?.company?.name}}</td>\n    </tr>\n  </tbody>\n</table>\n\n<!-- data table display data code ends -->\n\n\n\n<!-- Modal -->\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Create New User Object</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col card\">\n            <div class=\"card-block\">\n              <form class=\"form-horizontal\" [formGroup]=\"userForm\" (ngSubmit)=\"submitUserForm()\" novalidate>\n\n                <!-- alert error -->\n                <div class=\"alert alert-danger\" *ngIf=\"userError\">\n                  <strong>Error!</strong> there is something wrong please check console for error detail.\n                </div>\n\n                <!-- alert success -->\n                <div class=\"alert alert-success\" *ngIf=\"userSuccess\">\n                  <strong>Congrats!</strong> Your data posted successfully.\n                </div>\n\n                <!-- name -->\n                <div class=\"mb-3\">\n                  <div class=\"input-group\">\n                    <input type=\"name\" class=\"form-control\" placeholder=\"Name\" [formControl]=\"userForm.controls['name']\"\n                      [ngClass]=\"{'userForm-control-danger': (userForm.controls['name'].hasError('required') && userForm.controls['name'].touched)}\">\n                  </div>\n                </div>\n\n                <!-- email -->\n                <div class=\"mb-3\">\n                  <div class=\"input-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\"\n                      [formControl]=\"userForm.controls['email']\"\n                      [ngClass]=\"{'userForm-control-danger': ((userForm.controls['email'].hasError('required') && userForm.controls['email'].touched) || (userForm.controls['email'].invalid && userForm.controls['email'].touched))}\">\n                  </div>\n                  <div style=\"color:red\" class=\"form-control-feedback\"\n                    *ngIf=\"(userForm.controls['email'].invalid && userForm.controls['email'].touched && !userForm.controls['email'].hasError('required'))\">\n                    Correct syntax : example@123.com</div>\n                </div>\n\n                <!-- address -->\n                <div class=\"mb-3\">\n                  <div class=\"input-group\">\n                    <input type=\"address\" class=\"form-control\" placeholder=\"address\"\n                      [formControl]=\"userForm.controls['address']\"\n                      [ngClass]=\"{'userForm-control-danger': (userForm.controls['address'].hasError('required') && userForm.controls['address'].touched)}\">\n                  </div>\n                </div>\n\n                <!-- company -->\n                <div class=\"mb-3\">\n                  <div class=\"input-group\">\n                    <input type=\"company\" class=\"form-control\" placeholder=\"company\"\n                      [formControl]=\"userForm.controls['company']\"\n                      [ngClass]=\"{'userForm-control-danger': (userForm.controls['company'].hasError('required') && userForm.controls['company'].touched)}\">\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <button class=\"btn btn-primary px-4\" type=\"submit\"\n                      [ngClass]=\"{'not-allowed' : !userForm.valid, 'allowed' : userForm.valid}\"\n                      [disabled]=\"!userForm.valid\">Send Data To Dummy Server</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/dashboard/dashboard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/home/dashboard/dashboard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-create-user {\n  float: right;\n  margin: 10px 0px; }\n\n.userForm-control-danger, .form-control-feedback {\n  border-color: red; }\n\n.allowed {\n  cursor: pointer; }\n\n.not-allowed {\n  cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbXphL0Rlc2t0b3AvSHVtYW4gUmVzb3VyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVc7RUFDWCxpQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxnQkFDSixFQUFDOztBQUVEO0VBQ0ksb0JBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jcmVhdGUtdXNlcntcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4gOiAxMHB4IDBweDtcbn1cblxuLnVzZXJGb3JtLWNvbnRyb2wtZGFuZ2VyLCAuZm9ybS1jb250cm9sLWZlZWRiYWNre1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uYWxsb3dlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5ub3QtYWxsb3dlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/home/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http-service.service */ "./src/app/shared/services/http-service.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, httpService, modalService) {
        this.fb = fb;
        this.httpService = httpService;
        this.modalService = modalService;
        this.userData = [];
        this.userError = false;
        this.userSuccess = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userFormInitializer();
        // get user data from get api method in service 
        this.httpService.getData()
            .subscribe(function (data) { return _this.userData = data; }, function (error) {
            _this.userError = true;
            console.error(error);
            setTimeout(function () {
                _this.userError = false;
            }, 3000);
        });
    };
    /**
     * @author : Hamza Javed
     * @method : createUserFormuilder
     * input   : Nill
     * output  : Nill
     * @description : initialize user_form with form builder object
     */
    DashboardComponent.prototype.userFormInitializer = function () {
        this.userForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
                ]
            ],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            company: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    /**
     * @author : Hamza Javed
     * @method : submitUserForm
     * input   : Nill
     * output  : Nill
     * @description : submit user form data
     */
    DashboardComponent.prototype.submitUserForm = function () {
        var _this = this;
        this.httpService
            .postData(this.userForm.value)
            .subscribe(function (data) {
            _this.userSuccess = true;
            setTimeout(function () {
                _this.userSuccess = false;
                _this.modal.hide();
            }, 3000);
        }, function (error) {
            _this.userError = true;
            console.error(error);
            setTimeout(function () {
                _this.userError = false;
            }, 3000);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lgModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], DashboardComponent.prototype, "modal", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/home/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/home/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n  <div class=\"col-2 logo-col pr-3\">\n    <span class=\"logo-text\">\n        Human Focus\n    </span>\n  </div>\n  <div class=\"col-10\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/home/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  margin: 10px 20px;\n  background: #3F51b5;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  min-height: 50px;\n  color: white;\n  font-size: 1.5em; }\n\n.logo-text {\n  margin: 10px 20px; }\n\n.logo-col {\n  border-right: 0.5px solid white;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbXphL0Rlc2t0b3AvSHVtYW4gUmVzb3VyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM3QixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGdDQUErQjtFQUMvQixjQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzNGNTFiNTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5sb2dvLXRleHQge1xuICAgIG1hcmdpbjogMTBweCAyMHB4O1xufVxuXG4ubG9nby1jb2wge1xuICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzoxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/home/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/home/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\" style=\"padding:0px 20px\">\n  <div class=\"col-2\" style=\"padding-right:0px;height:100vh\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"col-10\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/sidebar/sidebar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/home/sidebar/sidebar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let element of siderbarComponents\" (click)=\"menuItemChanged(element)\" style=\"padding:5px 0px\">\n  <div [ngClass]=\"{'sidebar-component-container-acive': element?.active}\" class=\"sidebar-component-container\">\n    <span class=\"mx-2\">\n      <i [class]=\"element?.iconClass\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"sidebar-text mx-1\">\n      {{element?.name}}\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/sidebar/sidebar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/home/sidebar/sidebar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-text {\n  font-size: 1em;\n  color: grey; }\n\n.sidebar-icon {\n  color: grey; }\n\n.sidebar-component-container {\n  padding: 10px;\n  cursor: pointer; }\n\n.sidebar-component-container:hover, .sidebar-component-container-acive {\n  background: red; }\n\n.sidebar-component-container:hover .sidebar-icon,\n.sidebar-component-container:hover .sidebar-text,\n.sidebar-component-container-acive .sidebar-text,\n.sidebar-component-container-acive .sidebar-icon {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbXphL0Rlc2t0b3AvSHVtYW4gUmVzb3VyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBYztFQUNkLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNJLGNBQWE7RUFDYixnQkFDSixFQUFDOztBQUVEO0VBQ0ksZ0JBQWMsRUFDakI7O0FBR0Q7Ozs7RUFJSSxhQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2lkZWJhci10ZXh0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuICBcbiAgLnNpZGViYXItaWNvbiB7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWNvbXBvbmVudC1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICB9XG4gIFxuICAuc2lkZWJhci1jb21wb25lbnQtY29udGFpbmVyOmhvdmVyLCAuc2lkZWJhci1jb21wb25lbnQtY29udGFpbmVyLWFjaXZle1xuICAgICAgYmFja2dyb3VuZDpyZWQ7XG4gIH1cbiAgXG4gIFxuICAuc2lkZWJhci1jb21wb25lbnQtY29udGFpbmVyOmhvdmVyIC5zaWRlYmFyLWljb24sIFxuICAuc2lkZWJhci1jb21wb25lbnQtY29udGFpbmVyOmhvdmVyIC5zaWRlYmFyLXRleHQsIFxuICAuc2lkZWJhci1jb21wb25lbnQtY29udGFpbmVyLWFjaXZlIC5zaWRlYmFyLXRleHQsXG4gIC5zaWRlYmFyLWNvbXBvbmVudC1jb250YWluZXItYWNpdmUgLnNpZGViYXItaWNvbiB7XG4gICAgICBjb2xvciA6IHdoaXRlXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/sidebar/sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.siderbarComponents = new Array();
        this.siderbarComponents = [
            {
                name: "e Folder Home",
                path: "home/dashboard",
                iconClass: "fa fa-caret-square-o-down fa-2x sidebar-icon",
                active: true
            },
            {
                name: "User Profile",
                path: "home/profile",
                iconClass: "fa fa-user fa-2x sidebar-icon",
                active: false
            }
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.menuItemChanged = function (element) {
        var _this = this;
        var path = element.path;
        this.siderbarComponents.forEach(function (component, i) {
            if (component["name"] == element["name"]) {
                component["active"] = true;
                path = component["path"];
            }
            else
                component["active"] = false;
            if (i == _this.siderbarComponents.length - 1) {
                _this.router.navigate(["./" + path]);
            }
        });
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/home/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/home/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-profile/user-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/user-profile/user-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/user-profile/user-profile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/user-profile/user-profile.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/user-profile/user-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/home/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/components/home/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/http-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/http-service.service.ts ***!
  \*********************************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http) {
        this.http = http;
    }
    // get data from api
    HttpServiceService.prototype.getData = function () {
        return this.http.get("https://jsonplaceholder.typicode.com/users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    //post data to dummy server
    HttpServiceService.prototype.postData = function (data) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http
            .post("https://jsonplaceholder.typicode.com/users", JSON.stringify(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hamza/Desktop/Human Resource/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map