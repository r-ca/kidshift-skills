"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const _ServiceBase_1 = __importDefault(require("./_ServiceBase"));
class ChildService extends _ServiceBase_1.default {
    async getChildList() {
        return api_1.default.get('/child');
    }
}
exports.default = new ChildService();
//# sourceMappingURL=ChildService.js.map