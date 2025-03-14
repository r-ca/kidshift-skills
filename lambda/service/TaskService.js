"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const _ServiceBase_1 = __importDefault(require("./_ServiceBase"));
class TaskService extends _ServiceBase_1.default {
    async getTasks() {
        return await api_1.default.get('/task');
    }
    async completeTask(taskId, childId) {
        const params = new URLSearchParams();
        params.append('childId', childId);
        return await api_1.default.post(`/task/${taskId}/complete`, {}, params);
    }
}
exports.default = new TaskService();
//# sourceMappingURL=TaskService.js.map