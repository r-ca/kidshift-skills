"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
class _ServiceBase {
    setToken(token) {
        api_1.default.setToken(token);
    }
}
exports.default = _ServiceBase;
//# sourceMappingURL=_ServiceBase.js.map