import api from '../api'

class MetaService {
    async getMeta() {
        return await api.get<any>('/meta');
    }

    async getPing() {
        return await api.get<any>('/meta/ping');
    }
}

export default new MetaService();

