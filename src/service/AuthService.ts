import api from '../api'
import { TokenResponse } from '../models/Common';
import _ServiceBase from './_ServiceBase';

class AuthService extends _ServiceBase {
    async login(loginCode: string) {
        return await api.post<TokenResponse>('/parent/auth/login' , { code: loginCode });
    }
}

export default new AuthService();
