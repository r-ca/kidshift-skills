import api from '../api';
import { ChildListResponse } from '../models/Child';

class ChildService {
  async getChildList() {
    return api.get<ChildListResponse>('/child');
  }
}

export default new ChildService();
