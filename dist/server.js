"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(routes_1.router);
app.listen(4003, function () { return console.log('Server is running at http://localhost:4003'); });
//# sourceMappingURL=server.js.map