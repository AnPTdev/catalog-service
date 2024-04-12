"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = exports.Routes = void 0;
const CategoryController_1 = require("./controllers/CategoryController");
const HealthController_1 = require("./controllers/HealthController");
var Routes;
(function (Routes) {
    Routes["HEALTH"] = "/health";
    Routes["CATEGORY"] = "/v1/category";
})(Routes || (exports.Routes = Routes = {}));
const setupRoutes = (app) => {
    app.get(Routes.HEALTH, HealthController_1.getHealth);
    /// Routes
    app.use(Routes.CATEGORY, CategoryController_1.Category);
};
exports.setupRoutes = setupRoutes;
