"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const _ServiceBase_1 = __importDefault(require("./_ServiceBase"));
class AuthService extends _ServiceBase_1.default {
    async login(loginCode) {
        return await api_1.default.post('/parent/auth/login', { code: loginCode });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=AuthService.js.map