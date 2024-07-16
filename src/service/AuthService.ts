import api from '../api'

class AuthService {
    async login(loginCode: string) {
        return await api.post<any>('/parent/auth/login' , { code: loginCode });
    }
}

export default new AuthService();
