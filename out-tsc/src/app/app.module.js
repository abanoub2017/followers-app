"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var form_component_1 = require("./form/form.component");
var header_component_1 = require("./header/header.component");
var fixed_slider_bar_component_1 = require("./fixed-slider-bar/fixed-slider-bar.component");
var my_component_component_1 = require("./my-component/my-component.component");
var serves_component_1 = require("./serves/serves.component");
var data_service_1 = require("./data.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        form_component_1.FormComponent,
                        header_component_1.HeaderComponent,
                        fixed_slider_bar_component_1.FixedSliderBarComponent,
                        my_component_component_1.MyComponentComponent,
                        serves_component_1.ServesComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule
                    ],
                    providers: [data_service_1.DataService],
                    bootstrap: [
                        app_component_1.AppComponent
                    ]
                },] },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map