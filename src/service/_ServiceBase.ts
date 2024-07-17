import api from '../api';

class _ServiceBase {
    setToken(token: string): void {
        api.setToken(token);
    }
}

export default _ServiceBase;
