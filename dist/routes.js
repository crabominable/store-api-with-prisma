"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var CreateCategoryController_1 = require("./controllers/CreateCategoryController");
var CreateProductCategoryController_1 = require("./controllers/CreateProductCategoryController");
var CreateProductController_1 = require("./controllers/CreateProductController");
var CreateProductWithExistCategory_1 = require("./controllers/CreateProductWithExistCategory");
var router = (0, express_1.Router)();
exports.router = router;
var createProduct = new CreateProductController_1.CreateProductController();
var createCategory = new CreateCategoryController_1.CreateCategoryController();
var createProductCategory = new CreateProductCategoryController_1.CreateProductCategoryController();
var createProductWithExistCategory = new CreateProductWithExistCategory_1.CreateProductWithExistCategory();
router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);
router.post('/productCategory', createProductCategory.handle);
router.post('/productWithCategory', createProductWithExistCategory.handle);
//# sourceMappingURL=routes.js.map