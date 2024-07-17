"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeUtils {
    constructor(handlerInput) {
        this.handlerInput = handlerInput;
    }
    async saveAttributes() {
        await this.handlerInput.attributesManager.savePersistentAttributes();
    }
    async setToken(token) {
        return await this.handlerInput.attributesManager.getPersistentAttributes().then((attributes) => {
            attributes.token = token;
            return attributes;
        }).then((attributes) => {
            this.handlerInput.attributesManager.setPersistentAttributes(attributes);
        }).finally(() => {
            return this.saveAttributes();
        });
    }
    async getToken() {
        return await this.handlerInput.attributesManager.getPersistentAttributes().then((attributes) => {
            return attributes.token;
        });
    }
}
exports.default = AttributeUtils;
//# sourceMappingURL=AttributeUtils.js.map