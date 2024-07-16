import { TokenResponse } from "./models";

const Configs = Object.freeze({
    API_BASE: 'https://kidshift-beta.nem.one',
});

enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

const Endpoints = Object.freeze({
    // Auth
    LOGIN: {
        method: Method.POST,
        endpoint: '/parent/auth/login',
        response: {} as TokenResponse,
        request: {} as { code: string },
    },
});


interface EndpointItem {
    method: Method,
    endpoint: string,
    response: any,
    request?: any,
    requireAuth?: boolean,
}

export {
    Configs,
    Endpoints,
    Method,
    EndpointItem,
}
