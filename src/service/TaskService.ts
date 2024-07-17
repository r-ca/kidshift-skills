import api from '../api';
import { TaskListResponse } from '../models/Task';

class TaskService {
    async getTasks() {
        return await api.get<TaskListResponse>('/task');
    }
}

export default new TaskService();
