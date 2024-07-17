import api from '../api';
import { ChildListResponse } from '../models/Child';
import _ServiceBase from './_ServiceBase';

class ChildService extends _ServiceBase {
  async getChildList() {
    return api.get<ChildListResponse>('/child');
  }
}

export default new ChildService();
