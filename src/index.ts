import * as Alexa from 'ask-sdk-core';
import * as AWS from 'aws-sdk';
import * as DynamoDBPersistantAttributesAdapter from 'ask-sdk-dynamodb-persistence-adapter';
import { DialogState } from 'ask-sdk-model';
import MetaService from './service/MetaService';
import AuthService from './service/AuthService';

const LaunchRequestHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    async handle(handlerInput: Alexa.HandlerInput) {
        const speakOutput = 'Hello World!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const KidShiftAuthIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'KidShiftAuthIntent';
    },
    async handle(handlerInput: Alexa.HandlerInput) {
        const loginCode = Alexa.getSlotValue(handlerInput.requestEnvelope, 'loginCode');

        const tokenResponse = await AuthService.login(loginCode);
        if (tokenResponse) {
            handlerInput.attributesManager.setPersistentAttributes(tokenResponse);
            await handlerInput.attributesManager.savePersistentAttributes();
            return handlerInput.responseBuilder
            .speak('Login successful')
            .getResponse();
        } else {
            return handlerInput.responseBuilder
            .speak('Login failed')
            .getResponse();
        }
    }
};


const KidShiftMetaIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'KidShiftMetaIntent';
    },
    async handle(handlerInput: Alexa.HandlerInput) {
        return MetaService.getMeta().then((resp) => {
            return handlerInput.responseBuilder
                .speak(JSON.stringify(resp))
                .getResponse();
        }).catch((err) => {
            return handlerInput.responseBuilder
                .speak('Error occured')
                .getResponse();
        });
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput: Alexa.HandlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput: Alexa.HandlerInput, error: Error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        KidShiftAuthIntentHandler,
        KidShiftMetaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withPersistenceAdapter(new DynamoDBPersistantAttributesAdapter.DynamoDbPersistenceAdapter({
        tableName: process.env.DYNAMODB_PERSISTENCE_TABLE_NAME || 'ask-sdk-table',
        createTable: false,
        dynamoDBClient: new AWS.DynamoDB({ apiVersion: 'latest', region: process.env.DYNAMODB_PERSISTENCE_REGION })
    }))
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
