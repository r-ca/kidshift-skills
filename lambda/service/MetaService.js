"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const _ServiceBase_1 = __importDefault(require("./_ServiceBase"));
class MetaService extends _ServiceBase_1.default {
    async getMeta() {
        return await api_1.default.get('/meta');
    }
    async getPing() {
        return await api_1.default.get('/meta/ping');
    }
}
exports.default = new MetaService();
//# sourceMappingURL=MetaService.js.map