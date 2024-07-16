"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = exports.Endpoints = exports.Configs = void 0;
const Configs = Object.freeze({
    API_BASE: 'https://kidshift-beta.nem.one',
});
exports.Configs = Configs;
var Method;
(function (Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["DELETE"] = "DELETE";
})(Method || (exports.Method = Method = {}));
const Endpoints = Object.freeze({
    LOGIN: {
        method: Method.POST,
        endpoint: '/parent/auth/login',
        response: {},
        request: {},
    },
});
exports.Endpoints = Endpoints;
//# sourceMappingURL=const.js.map