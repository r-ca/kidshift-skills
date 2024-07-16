import api from '../api'
import { TokenResponse } from '../models/Common';

class AuthService {
    async login(loginCode: string) {
        return await api.post<TokenResponse>('/parent/auth/login' , { code: loginCode });
    }
}

export default new AuthService();
