"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Alexa = __importStar(require("ask-sdk-core"));
const AWS = __importStar(require("aws-sdk"));
const DynamoDBPersistantAttributesAdapter = __importStar(require("ask-sdk-dynamodb-persistence-adapter"));
const MetaService_1 = __importDefault(require("./service/MetaService"));
const AuthService_1 = __importDefault(require("./service/AuthService"));
const TaskService_1 = __importDefault(require("./service/TaskService"));
const AttributeUtils_1 = __importDefault(require("./AttributeUtils"));
const ChildService_1 = __importDefault(require("./service/ChildService"));
const const_1 = require("./const");
const TaskCompletedDerective_1 = __importDefault(require("./apl/TaskCompletedDerective"));
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    async handle(handlerInput) {
        const speakOutput = 'Hello World!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const KidShiftAuthIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'KidShiftAuthIntent';
    },
    async handle(handlerInput) {
        const loginCode = Alexa.getSlotValue(handlerInput.requestEnvelope, 'loginCode');
        const tokenResponse = await AuthService_1.default.login(loginCode);
        if (tokenResponse) {
            const attributeUtils = new AttributeUtils_1.default(handlerInput);
            await attributeUtils.setToken(tokenResponse.accessToken);
            await attributeUtils.saveAttributes();
            return handlerInput.responseBuilder
                .speak(const_1.MESSAGES.LOGGED_IN)
                .getResponse();
        }
        else {
            return handlerInput.responseBuilder
                .speak('Login failed')
                .getResponse();
        }
    }
};
const KidShiftTaskListIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'KidShiftTaskListIntent';
    },
    async handle(handlerInput) {
        const attributeUtils = new AttributeUtils_1.default(handlerInput);
        TaskService_1.default.setToken(await attributeUtils.getToken());
        const taskList = await TaskService_1.default.getTasks();
        return handlerInput.responseBuilder
            .speak(taskList.list.map((task) => task.name).join(', '))
            .getResponse();
    }
};
const KidShiftTaskCompleteIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'KidShiftTaskCompleteIntent';
    },
    async handle(handlerInput) {
        const attributeUtils = new AttributeUtils_1.default(handlerInput);
        TaskService_1.default.setToken(await attributeUtils.getToken());
        const taskList = await TaskService_1.default.getTasks();
        const childList = await ChildService_1.default.getChildList();
        const taskName = Alexa.getSlotValue(handlerInput.requestEnvelope, 'taskName');
        const childName = Alexa.getSlotValue(handlerInput.requestEnvelope, 'childName');
        const task = taskList.list.find((task) => task.name === taskName);
        if (!task) {
            return handlerInput.responseBuilder
                .speak(const_1.MESSAGES.TASK_NOT_FOUND)
                .getResponse();
        }
        const child = childList.list.find((child) => child.name === childName);
        if (!child) {
            return handlerInput.responseBuilder
                .speak(const_1.MESSAGES.CHILD_NOT_FOUND)
                .getResponse();
        }
        return TaskService_1.default.completeTask(task.id, child.id).then(() => {
            const dataSources = TaskCompletedDerective_1.default.createDataSources(task.name, " + " + task.reward + " 円");
            const directivePayload = TaskCompletedDerective_1.default.createDirectivePayload(dataSources);
            return handlerInput.responseBuilder
                .speak(const_1.MESSAGES.TASK_COMPLETED)
                .addDirective(directivePayload)
                .getResponse();
        }).catch(() => {
            return handlerInput.responseBuilder
                .speak(const_1.MESSAGES.ERROR_OCCURRED)
                .getResponse();
        });
    }
};
const KidShiftMetaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'KidShiftMetaIntent';
    },
    async handle(handlerInput) {
        return MetaService_1.default.getMeta().then((resp) => {
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
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
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
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(LaunchRequestHandler, HelloWorldIntentHandler, KidShiftAuthIntentHandler, KidShiftTaskListIntentHandler, KidShiftTaskCompleteIntentHandler, KidShiftMetaIntentHandler, HelpIntentHandler, CancelAndStopIntentHandler, FallbackIntentHandler, SessionEndedRequestHandler, IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withPersistenceAdapter(new DynamoDBPersistantAttributesAdapter.DynamoDbPersistenceAdapter({
    tableName: process.env.DYNAMODB_PERSISTENCE_TABLE_NAME || 'ask-sdk-table',
    createTable: false,
    dynamoDBClient: new AWS.DynamoDB({ apiVersion: 'latest', region: process.env.DYNAMODB_PERSISTENCE_REGION })
}))
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
//# sourceMappingURL=index.js.map