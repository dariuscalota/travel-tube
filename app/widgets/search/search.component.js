"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var SearchComponent = (function () {
    function SearchComponent(router) {
        this.router = router;
        this.searchSize = "small"; /* can be: mini / small / large / big / huge / massive */
    }
    SearchComponent.prototype.onSubmit = function (data) {
        var params = (data.search === null) ? "" : data.search;
        this.router.navigateByUrl('/videos?search=' + params);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchComponent.prototype, "searchSize", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'app/widgets/search/search.component.html',
            inputs: ['searchSize']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map