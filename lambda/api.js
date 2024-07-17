"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'https://kidshift-beta.nem.one';
const TIMEOUT = 5000;
class ApiClient {
    constructor() {
        this.token = null;
        this.client = axios_1.default.create({
            baseURL: BASE_URL,
            timeout: TIMEOUT,
        });
    }
    setToken(token) {
        this.token = token;
    }
    getHeaders(includeToken) {
        const headers = {
            'Content-Type': 'application/json',
        };
        if (includeToken) {
            const token = this.token;
            headers['Authorization'] = `Bearer ${token}`;
        }
        return headers;
    }
    async get(url, params, includeToken = true) {
        const headers = this.getHeaders(includeToken);
        const config = {
            headers,
            params
        };
        const response = await this.client.get(url, config);
        return response.data;
    }
    async post(url, data, params, includeToken = true) {
        const headers = this.getHeaders(includeToken);
        const response = await this.client.post(url, data, { headers, params });
        return response.data;
    }
}
exports.default = new ApiClient();
//# sourceMappingURL=api.js.map