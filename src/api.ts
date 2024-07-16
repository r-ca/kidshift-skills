import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Const
const BASE_URL = 'https://kidshift-beta.nem.one';
const TIMEOUT = 5000;

class ApiClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: BASE_URL,
            timeout: TIMEOUT,
        });
    }

    private getHeaders(includeToken: boolean): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };
        if (includeToken) {
            const token = 'placeholder_token';
            headers['Authorization'] = `Bearer ${token}`;
        }
        return headers;
    }

    async get<T>(url: string, params?: any, includeToken = true): Promise<T> {
        const headers = this.getHeaders(includeToken);
        const config: AxiosRequestConfig = {
            headers,
            params
        };
        const response = await this.client.get<T>(url, config);
        return response.data;
    }
    
    async post<T>(url: string, data: any, includeToken = true): Promise<T> {
        const headers = this.getHeaders(includeToken);
        const response = await this.client.post<T>(url, data, { headers });
        return response.data;
    }
}

export default new ApiClient();
