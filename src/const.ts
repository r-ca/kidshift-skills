
const Configs = Object.freeze({
    API_BASE: 'https://kidshift-beta.nem.one',
});

const Endpoints = Object.freeze({
});

enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

interface EndpointItem {
    method: Method,
    endpoint: string,
    response: any,
    request?: any,
    requireAuth?: boolean,
}
