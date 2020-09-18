(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akshay/Documents/test/newspaper/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppService {
    constructor(http) {
        this.http = http;
    }
    downloadHT(id, fullDate) {
        let date = ('0' + fullDate.getDate()).slice(-2);
        let month = ('0' + (fullDate.getMonth() + 1)).slice(-2);
        let year = '' + fullDate.getFullYear();
        var dateString = "" + date + "%2F" + month + "%2F" + year;
        var url = "https://epaper.hindustantimes.com/Home/downloadpdfedition_page?id=" + id + "&type=" + 5 + "&Date=" + dateString;
        // console.log(url);
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf8' }) });
    }
    getPDF(url) {
        return this.http.get(url, { responseType: 'blob' });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


















function AppComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0926\u094B \u092E\u0939\u0940\u0928\u0947 \u0915\u0947 \u092D\u0940\u0924\u0930 \u0915\u0940 \u090F\u0915 \u0924\u093E\u0930\u0940\u0916 \u091A\u0941\u0928\u0947\u0902");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a date within 2 months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-extended-pdf-viewer", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.url)("mobileFriendlyZoom", ctx_r4.zoom)("enablePinchOnMobile", ctx_r4.enablePinchOnMobile);
} }
function AppComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(fb, router, appservie, dateAdapter) {
        this.fb = fb;
        this.router = router;
        this.appservie = appservie;
        this.dateAdapter = dateAdapter;
        this.zoom = '140%';
        this.title = 'newspaper';
        this.readingMode = false;
        this.newspaperForm = undefined;
        this.isLoading = false;
        this.enablePinchOnMobile = true;
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width',
            0.2, 0.25, 0.33, 0.5, 0.67, 0.75, 0.82, 0.9, 1, 1.1, 1.15,
            1.25, 1.5, 1.66, 1.8, 2, 2.5, 3, 3.5, 4];
        this.holidays = [
            { date: 17, month: 9 },
            { date: 15, month: 8 },
            { date: 26, month: 1 },
            { date: 2, month: 10 },
            { date: 1, month: 5 } // labour day
        ];
        this.readTries = 0;
        this.downloadTries = 0;
        this.htIDs = {
            51: "patna",
            1: "delhi",
            58: "ranchi",
            54: "pune",
            64: "westup",
            46: "mumbai",
            65: "uttarakhand"
        };
        this.DateFilterFn = (date) => {
            for (var i = 0; i < this.holidays.length; i++) {
                if (date.getMonth() == this.holidays[i].month - 1 && date.getDate() == this.holidays[i].date + 1)
                    return false;
            }
            return true;
        };
        this.newspaperForm = this.fb.group({
            edition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 59);
        this.dateAdapter.setLocale('hi');
    }
    ;
    tabClick(event) {
        this.newspaperForm.reset();
        const tab = event.tab.textLabel;
        if (tab === "हिन्दुस्तान") {
            this.dateAdapter.setLocale('hi');
        }
        else {
            this.dateAdapter.setLocale('en-in');
        }
    }
    getUrl() {
        let edition = this.newspaperForm.value.edition;
        var fullDate = this.newspaperForm.value.date;
        let date = ('0' + fullDate.getDate()).slice(-2);
        let month = ('0' + (fullDate.getMonth() + 1)).slice(-2);
        let year = '' + fullDate.getFullYear();
        fullDate = date + month + year;
        let url = "https://epaper.livehindustan.com/downloadPdf.php?filepath=epaperimages/" + fullDate + "/" + fullDate + "-" + edition + ".pdf&filename=" + fullDate + "-" + edition + ".pdf";
        return url;
    }
    read() {
        this.readingMode = false;
        this.isLoading = true;
        this.appservie.getPDF(this.getUrl())
            .subscribe(x => {
            var check = new Blob([x], { type: "text/plain" });
            const reader = new FileReader();
            reader.addEventListener('loadend', (e) => {
                // window.location.href = url;
                var newBlob = new Blob([x], { type: "application/pdf" });
                // IE doesn't allow using a blob object directly as link href
                // instead it is necessary to use msSaveOrOpenBlob
                // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                //   window.navigator.msSaveOrOpenBlob(newBlob);
                //   return;
                // }
                // For other browsers: 
                // Create a link pointing to the ObjectURL containing the blob.
                const data = window.URL.createObjectURL(newBlob);
                var link = document.createElement('a');
                link.href = data;
                this.url = data;
                this.isLoading = false;
                this.readingMode = true;
            });
            reader.readAsText(x);
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
        });
    }
    readHT() {
        this.readingMode = false;
        this.isLoading = true;
        if (this.readTries > 100) {
            this.readTries = 0;
            return;
        }
        this.readTries += 1;
        this.appservie.downloadHT(this.newspaperForm.value.edition, this.newspaperForm.value.date).subscribe(data => {
            var name = "HT" + this.htIDs[this.newspaperForm.value.edition] + "-" + this.newspaperForm.value.date.getDate() + "-" + (this.newspaperForm.value.date.getMonth() + 1);
            var downloadResponse = data;
            // console.log(data);
            var fileName = downloadResponse.FileName;
            var url = "https://epaper.hindustantimes.com/Home/Download?Filename=" + fileName;
            // this.url = url;
            this.appservie.getPDF(url)
                .subscribe(x => {
                var check = new Blob([x], { type: "text/plain" });
                const reader = new FileReader();
                reader.addEventListener('loadend', (e) => {
                    const text = e.srcElement["result"];
                    // console.log(text);
                    if (text == '"Link expire, please try again"') {
                        this.readHT();
                        return;
                    }
                    else {
                        this.readTries = 0;
                        // window.location.href = url;
                        var newBlob = new Blob([x], { type: "application/pdf" });
                        // IE doesn't allow using a blob object directly as link href
                        // instead it is necessary to use msSaveOrOpenBlob
                        // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        //   window.navigator.msSaveOrOpenBlob(newBlob);
                        //   return;
                        // }
                        // For other browsers: 
                        // Create a link pointing to the ObjectURL containing the blob.
                        const data = window.URL.createObjectURL(newBlob);
                        var link = document.createElement('a');
                        link.href = data;
                        this.url = data;
                        this.isLoading = false;
                        this.readingMode = true;
                    }
                });
                reader.readAsText(x);
                // It is necessary to create a new blob object with mime-type explicitly set
                // otherwise only Chrome works like it should
            });
        });
    }
    downloadHT() {
        this.readingMode = false;
        this.isLoading = true;
        if (this.downloadTries > 100) {
            this.downloadTries = 0;
            return;
        }
        this.downloadTries += 1;
        this.appservie.downloadHT(this.newspaperForm.value.edition, this.newspaperForm.value.date).subscribe(data => {
            var name = "HT" + this.htIDs[this.newspaperForm.value.edition] + "-" + this.newspaperForm.value.date.getDate() + "-" + (this.newspaperForm.value.date.getMonth() + 1);
            var downloadResponse = data;
            // console.log(data);
            var fileName = downloadResponse.FileName;
            var url = "https://epaper.hindustantimes.com/Home/Download?Filename=" + fileName;
            this.url = url;
            this.appservie.getPDF(url)
                .subscribe(x => {
                var check = new Blob([x], { type: "text/plain" });
                const reader = new FileReader();
                reader.addEventListener('loadend', (e) => {
                    const text = e.srcElement["result"];
                    // console.log(text);
                    if (text == '"Link expire, please try again"') {
                        this.downloadHT();
                        return;
                    }
                    else {
                        // window.location.href = url;
                        this.downloadTries = 0;
                        var newBlob = new Blob([x], { type: "application/pdf" });
                        // IE doesn't allow using a blob object directly as link href
                        // instead it is necessary to use msSaveOrOpenBlob
                        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                            window.navigator.msSaveOrOpenBlob(newBlob);
                            return;
                        }
                        // For other browsers: 
                        // Create a link pointing to the ObjectURL containing the blob.
                        const data = window.URL.createObjectURL(newBlob);
                        var link = document.createElement('a');
                        link.href = data;
                        link.download = name + ".pdf";
                        // this is necessary as link.click() does not work on the latest firefox
                        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                        setTimeout(function () {
                            // For Firefox it is necessary to delay revoking the ObjectURL
                            window.URL.revokeObjectURL(data);
                            link.remove();
                        }, 100);
                        this.isLoading = false;
                    }
                });
                reader.readAsText(x);
                // It is necessary to create a new blob object with mime-type explicitly set
                // otherwise only Chrome works like it should
            });
        });
    }
    download() {
        this.readingMode = false;
        var url = this.getUrl();
        window.location.href = url;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 99, vars: 20, consts: [[1, "intro-section"], ["fxLayout", "row", "fxLayout.xs", "column", "fxFlexFill", "", "fxLayoutAlign", "center center"], [1, "example-container"], [3, "selectedTabChange"], ["label", "\u0939\u093F\u0928\u094D\u0926\u0941\u0938\u094D\u0924\u093E\u0928"], [2, "text-align", "center"], [3, "formGroup"], ["appearance", "fill"], ["matInput", "", "formControlName", "date", "placeholder", "MM/DD/YYYY", 3, "matDatepicker", "min", "max", "matDatepickerFilter", "focus"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "edition"], ["value", "KOS-BHG"], ["value", "NG1R-DEL"], ["value", "NGR-PAT"], ["value", "NGR-RAN"], ["value", "PRN-BHG"], ["value", "KTR-BHG"], ["value", "DRB-MUZ"], ["value", "MDB-MUZ"], ["value", "MRT-MRT"], ["value", "MZN-MRT"], ["mat-raised-button", "", "color", "basic", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["label", "Hindustan Times"], ["picker2", ""], ["value", "51"], ["value", "58"], ["value", "1"], ["value", "54"], ["value", "46"], ["value", "64"], ["value", "65"], ["style", "padding-left: 2%; padding-right: 2%", 4, "ngIf"], ["fxLayout", "row", "fxFlexFill", "", "fxLayoutAlign", "center"], ["class", "example-container", 4, "ngIf"], [2, "padding-left", "2%", "padding-right", "2%"], ["useBrowserLocale", "true", "height", "100vh", 3, "src", "mobileFriendlyZoom", "enablePinchOnMobile"], [2, "font-size", "24"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function AppComponent_Template_mat_tab_group_selectedTabChange_3_listener($event) { return ctx.tabClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0939\u093F\u0928\u094D\u0926\u0941\u0938\u094D\u0924\u093E\u0928 \u0908-\u092A\u0947\u092A\u0930 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0928\u0947/ \u092A\u0922\u093C\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0914\u0930 \u0926\u093F\u0928\u093E\u0902\u0915 \u091A\u0941\u0928\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0926\u093F\u0928\u093E\u0902\u0915 \u091A\u0941\u0928\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AppComponent_Template_input_focus_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_mat_error_20_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0938\u0902\u0938\u094D\u0915\u0930\u0923");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0938\u0939\u0930\u0938\u093E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0926\u093F\u0932\u094D\u0932\u0940 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u092A\u091F\u0928\u093E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0930\u093E\u0902\u091A\u0940 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u092A\u0942\u0930\u094D\u0923\u093F\u092F\u093E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0915\u091F\u093F\u0939\u093E\u0930 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u0926\u0930\u092D\u0902\u0917\u093E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u092E\u0927\u0941\u092C\u0928\u0940 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u092E\u0947\u0930\u0920 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u092E\u0941\u091C\u093C\u092B\u094D\u092B\u0930\u0928\u0917\u0930 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_48_listener() { return ctx.read(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u092A\u0922\u093C\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_51_listener() { return ctx.download(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0921\u093E\u0909\u0928\u0932\u094B\u0921");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Hindustan Times E-Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Choose Edition and Date to download/read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AppComponent_Template_input_focus_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return _r2.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "mat-datepicker", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AppComponent_mat_error_69_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Edition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Patna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Ranchi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Delhi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Pune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " West UP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Uttarakhand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_91_listener() { return ctx.readHT(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_94_listener() { return ctx.downloadHT(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AppComponent_div_96_Template, 2, 3, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AppComponent_div_98_Template, 4, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newspaperForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("min", ctx.minDate)("max", ctx.maxDate)("matDatepickerFilter", ctx.DateFilterFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newspaperForm.value.date < ctx.minDate || ctx.newspaperForm.value.date > ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newspaperForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newspaperForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newspaperForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("min", ctx.minDate)("max", ctx.maxDate)("matDatepickerFilter", ctx.DateFilterFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newspaperForm.value.date < ctx.minDate || ctx.newspaperForm.value.date > ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newspaperForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newspaperForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readingMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["NgxExtendedPdfViewerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]], styles: [".intro-section[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\nmat-datepicker-toggle[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyby1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                providers: []
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxExtendedPdfViewerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxExtendedPdfViewerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxExtendedPdfViewerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

































class AppMaterialModule {
}
AppMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModule });
AppMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); }, providers: [], imports: [[], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, { exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [],
                providers: [],
                bootstrap: [],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map