import api from '../api'

class MetaService {
  async getMeta() {
    return await api.get<any>('/meta');
  }
}

export default new MetaService();

