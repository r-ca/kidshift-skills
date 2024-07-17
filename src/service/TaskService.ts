import api from '../api';
import { TaskListResponse } from '../models/Task';
import _ServiceBase from './_ServiceBase';

class TaskService extends _ServiceBase {
    async getTasks() {
        return await api.get<TaskListResponse>('/task');
    }
}

export default new TaskService();
