import * as Alexa from 'ask-sdk-core';

class AttributeUtils {
    private handlerInput: Alexa.HandlerInput;

    constructor(handlerInput: Alexa.HandlerInput) {
        this.handlerInput = handlerInput;
    }

    public async saveAttributes(): Promise<void> {
        await this.handlerInput.attributesManager.savePersistentAttributes();
    }

    public async setToken(token: string): Promise<void> {
        return await this.handlerInput.attributesManager.getPersistentAttributes().then((attributes) => {
            attributes.token = token;
            return attributes;
        }).then((attributes) => {
            this.handlerInput.attributesManager.setPersistentAttributes(attributes);
        }).finally(() => {
            return this.saveAttributes();
        });
    }

    public async getToken(): Promise<string> {
        return await this.handlerInput.attributesManager.getPersistentAttributes().then((attributes) => {
            return attributes.token;
        });
    }
}

export default AttributeUtils;
