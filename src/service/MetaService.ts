import api from '../api'
import _ServiceBase from './_ServiceBase';

class MetaService extends _ServiceBase {
    async getMeta() {
        return await api.get<any>('/meta');
    }

    async getPing() {
        return await api.get<any>('/meta/ping');
    }
}

export default new MetaService();

