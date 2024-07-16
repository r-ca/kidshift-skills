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
}
