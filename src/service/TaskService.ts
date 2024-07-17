import api from '../api';
import { TaskListResponse } from '../models/Task';
import _ServiceBase from './_ServiceBase';

class TaskService extends _ServiceBase {
    async getTasks() {
        return await api.get<TaskListResponse>('/task');
    }

    async completeTask(taskId: string, childId: string) {
        const params = new URLSearchParams();
        params.append('childId', childId);
        return await api.post<void>(`/task/${taskId}/complete`, {}, params);
    }
}

export default new TaskService();
