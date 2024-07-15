/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ask_sdk_core_1 = __importDefault(__webpack_require__(/*! ask-sdk-core */ "ask-sdk-core"));
const aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ "aws-sdk"));
const ask_sdk_dynamodb_persistence_adapter_1 = __webpack_require__(/*! ask-sdk-dynamodb-persistence-adapter */ "ask-sdk-dynamodb-persistence-adapter");
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
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
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    async handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const attributes = await attributesManager.getPersistentAttributes();
        if (attributes.counter === undefined) {
            attributes.counter = 0;
        }
        else {
            attributes.counter += 1;
        }
        attributesManager.setPersistentAttributes(attributes);
        const speakOutput = 'Hello World! You have invoked this skill ' + attributes.counter + ' times.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
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
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
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
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
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
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope);
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
exports.handler = ask_sdk_core_1.default.SkillBuilders.custom()
    .addRequestHandlers(LaunchRequestHandler, HelloWorldIntentHandler, HelpIntentHandler, CancelAndStopIntentHandler, FallbackIntentHandler, SessionEndedRequestHandler, IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withPersistenceAdapter(new ask_sdk_dynamodb_persistence_adapter_1.DynamoDbPersistenceAdapter({
    tableName: process.env.DYNAMODB_PERSISTENCE_TABLE_NAME || 'kidshift-table',
    createTable: false,
    dynamoDBClient: new aws_sdk_1.default.DynamoDB({ apiVersion: 'latest', region: process.env.DYNAMODB_PERSISTENCE_REGION })
}))
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();


/***/ }),

/***/ "ask-sdk-core":
/*!*******************************!*\
  !*** external "ask-sdk-core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("ask-sdk-core");

/***/ }),

/***/ "ask-sdk-dynamodb-persistence-adapter":
/*!*******************************************************!*\
  !*** external "ask-sdk-dynamodb-persistence-adapter" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("ask-sdk-dynamodb-persistence-adapter");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	module.exports.index = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDOzs7Ozs7Ozs7OztBQzVLZDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRleC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9pbmRleC9leHRlcm5hbCBjb21tb25qcyBcImFzay1zZGstY29yZVwiIiwid2VicGFjazovL2luZGV4L2V4dGVybmFsIGNvbW1vbmpzIFwiYXNrLXNkay1keW5hbW9kYi1wZXJzaXN0ZW5jZS1hZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXgvZXh0ZXJuYWwgY29tbW9uanMgXCJhd3Mtc2RrXCIiLCJ3ZWJwYWNrOi8vaW5kZXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW5kZXgvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9pbmRleC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaW5kZXgvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbGV4YSBmcm9tICdhc2stc2RrLWNvcmUnO1xuaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7IER5bmFtb0RiUGVyc2lzdGVuY2VBZGFwdGVyIH0gZnJvbSAnYXNrLXNkay1keW5hbW9kYi1wZXJzaXN0ZW5jZS1hZGFwdGVyJztcblxuY29uc3QgTGF1bmNoUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0xhdW5jaFJlcXVlc3QnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1dlbGNvbWUsIHlvdSBjYW4gc2F5IEhlbGxvIG9yIEhlbHAuIFdoaWNoIHdvdWxkIHlvdSBsaWtlIHRvIHRyeT8nO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAucmVwcm9tcHQoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuXG5jb25zdCBIZWxsb1dvcmxkSW50ZW50SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBBbGV4YS5IYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIEFsZXhhLmdldFJlcXVlc3RUeXBlKGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdIZWxsb1dvcmxkSW50ZW50JztcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNNYW5hZ2VyID0gaGFuZGxlcklucHV0LmF0dHJpYnV0ZXNNYW5hZ2VyO1xuXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBhd2FpdCBhdHRyaWJ1dGVzTWFuYWdlci5nZXRQZXJzaXN0ZW50QXR0cmlidXRlcygpO1xuXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmNvdW50ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5jb3VudGVyID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuY291bnRlciArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0cmlidXRlc01hbmFnZXIuc2V0UGVyc2lzdGVudEF0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XG5cbiAgICAgICAgY29uc3Qgc3BlYWtPdXRwdXQgPSAnSGVsbG8gV29ybGQhIFlvdSBoYXZlIGludm9rZWQgdGhpcyBza2lsbCAnICsgYXR0cmlidXRlcy5jb3VudGVyICsgJyB0aW1lcy4nO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAvLy5yZXByb21wdCgnYWRkIGEgcmVwcm9tcHQgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgc2Vzc2lvbiBvcGVuIGZvciB0aGUgdXNlciB0byByZXNwb25kJylcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IEhlbHBJbnRlbnRIYW5kbGVyID0ge1xuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdJbnRlbnRSZXF1ZXN0J1xuICAgICAgICAgICAgJiYgQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0FNQVpPTi5IZWxwSW50ZW50JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBzcGVha091dHB1dCA9ICdZb3UgY2FuIHNheSBoZWxsbyB0byBtZSEgSG93IGNhbiBJIGhlbHA/JztcblxuICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlc3BvbnNlQnVpbGRlclxuICAgICAgICAgICAgLnNwZWFrKHNwZWFrT3V0cHV0KVxuICAgICAgICAgICAgLnJlcHJvbXB0KHNwZWFrT3V0cHV0KVxuICAgICAgICAgICAgLmdldFJlc3BvbnNlKCk7XG4gICAgfVxufTtcblxuY29uc3QgQ2FuY2VsQW5kU3RvcEludGVudEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0ludGVudFJlcXVlc3QnXG4gICAgICAgICAgICAmJiAoQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0FNQVpPTi5DYW5jZWxJbnRlbnQnXG4gICAgICAgICAgICAgICAgfHwgQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0FNQVpPTi5TdG9wSW50ZW50Jyk7XG4gICAgfSxcbiAgICBoYW5kbGUoaGFuZGxlcklucHV0OiBBbGV4YS5IYW5kbGVySW5wdXQpIHtcbiAgICAgICAgY29uc3Qgc3BlYWtPdXRwdXQgPSAnR29vZGJ5ZSEnO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuLyogKlxuICogRmFsbGJhY2tJbnRlbnQgdHJpZ2dlcnMgd2hlbiBhIGN1c3RvbWVyIHNheXMgc29tZXRoaW5nIHRoYXQgZG9lc27igJl0IG1hcCB0byBhbnkgaW50ZW50cyBpbiB5b3VyIHNraWxsXG4gKiBJdCBtdXN0IGFsc28gYmUgZGVmaW5lZCBpbiB0aGUgbGFuZ3VhZ2UgbW9kZWwgKGlmIHRoZSBsb2NhbGUgc3VwcG9ydHMgaXQpXG4gKiBUaGlzIGhhbmRsZXIgY2FuIGJlIHNhZmVseSBhZGRlZCBidXQgd2lsbCBiZSBpbmdub3JlZCBpbiBsb2NhbGVzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQgeWV0IFxuICogKi9cbmNvbnN0IEZhbGxiYWNrSW50ZW50SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBBbGV4YS5IYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIEFsZXhhLmdldFJlcXVlc3RUeXBlKGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdBTUFaT04uRmFsbGJhY2tJbnRlbnQnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1NvcnJ5LCBJIGRvblxcJ3Qga25vdyBhYm91dCB0aGF0LiBQbGVhc2UgdHJ5IGFnYWluLic7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVha091dHB1dClcbiAgICAgICAgICAgIC5yZXByb21wdChzcGVha091dHB1dClcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG4vKiAqXG4gKiBTZXNzaW9uRW5kZWRSZXF1ZXN0IG5vdGlmaWVzIHRoYXQgYSBzZXNzaW9uIHdhcyBlbmRlZC4gVGhpcyBoYW5kbGVyIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gYSBjdXJyZW50bHkgb3BlbiBcbiAqIHNlc3Npb24gaXMgY2xvc2VkIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOiAxKSBUaGUgdXNlciBzYXlzIFwiZXhpdFwiIG9yIFwicXVpdFwiLiAyKSBUaGUgdXNlciBkb2VzIG5vdCBcbiAqIHJlc3BvbmQgb3Igc2F5cyBzb21ldGhpbmcgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbiBpbnRlbnQgZGVmaW5lZCBpbiB5b3VyIHZvaWNlIG1vZGVsLiAzKSBBbiBlcnJvciBvY2N1cnMgXG4gKiAqL1xuY29uc3QgU2Vzc2lvbkVuZGVkUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ1Nlc3Npb25FbmRlZFJlcXVlc3QnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB+fn5+IFNlc3Npb24gZW5kZWQ6ICR7SlNPTi5zdHJpbmdpZnkoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSl9YCk7XG4gICAgICAgIC8vIEFueSBjbGVhbnVwIGxvZ2ljIGdvZXMgaGVyZS5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXIuZ2V0UmVzcG9uc2UoKTsgLy8gbm90aWNlIHdlIHNlbmQgYW4gZW1wdHkgcmVzcG9uc2VcbiAgICB9XG59O1xuLyogKlxuICogVGhlIGludGVudCByZWZsZWN0b3IgaXMgdXNlZCBmb3IgaW50ZXJhY3Rpb24gbW9kZWwgdGVzdGluZyBhbmQgZGVidWdnaW5nLlxuICogSXQgd2lsbCBzaW1wbHkgcmVwZWF0IHRoZSBpbnRlbnQgdGhlIHVzZXIgc2FpZC4gWW91IGNhbiBjcmVhdGUgY3VzdG9tIGhhbmRsZXJzIGZvciB5b3VyIGludGVudHMgXG4gKiBieSBkZWZpbmluZyB0aGVtIGFib3ZlLCB0aGVuIGFsc28gYWRkaW5nIHRoZW0gdG8gdGhlIHJlcXVlc3QgaGFuZGxlciBjaGFpbiBiZWxvdyBcbiAqICovXG5jb25zdCBJbnRlbnRSZWZsZWN0b3JIYW5kbGVyID0ge1xuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdJbnRlbnRSZXF1ZXN0JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBpbnRlbnROYW1lID0gQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKTtcbiAgICAgICAgY29uc3Qgc3BlYWtPdXRwdXQgPSBgWW91IGp1c3QgdHJpZ2dlcmVkICR7aW50ZW50TmFtZX1gO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAvLy5yZXByb21wdCgnYWRkIGEgcmVwcm9tcHQgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgc2Vzc2lvbiBvcGVuIGZvciB0aGUgdXNlciB0byByZXNwb25kJylcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG4vKipcbiAqIEdlbmVyaWMgZXJyb3IgaGFuZGxpbmcgdG8gY2FwdHVyZSBhbnkgc3ludGF4IG9yIHJvdXRpbmcgZXJyb3JzLiBJZiB5b3UgcmVjZWl2ZSBhbiBlcnJvclxuICogc3RhdGluZyB0aGUgcmVxdWVzdCBoYW5kbGVyIGNoYWluIGlzIG5vdCBmb3VuZCwgeW91IGhhdmUgbm90IGltcGxlbWVudGVkIGEgaGFuZGxlciBmb3JcbiAqIHRoZSBpbnRlbnQgYmVpbmcgaW52b2tlZCBvciBpbmNsdWRlZCBpdCBpbiB0aGUgc2tpbGwgYnVpbGRlciBiZWxvdyBcbiAqICovXG5jb25zdCBFcnJvckhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCwgZXJyb3I6IEVycm9yKSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1NvcnJ5LCBJIGhhZCB0cm91YmxlIGRvaW5nIHdoYXQgeW91IGFza2VkLiBQbGVhc2UgdHJ5IGFnYWluLic7XG4gICAgICAgIGNvbnNvbGUubG9nKGB+fn5+IEVycm9yIGhhbmRsZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAucmVwcm9tcHQoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgaGFuZGxlciBhY3RzIGFzIHRoZSBlbnRyeSBwb2ludCBmb3IgeW91ciBza2lsbCwgcm91dGluZyBhbGwgcmVxdWVzdCBhbmQgcmVzcG9uc2VcbiAqIHBheWxvYWRzIHRvIHRoZSBoYW5kbGVycyBhYm92ZS4gTWFrZSBzdXJlIGFueSBuZXcgaGFuZGxlcnMgb3IgaW50ZXJjZXB0b3JzIHlvdSd2ZVxuICogZGVmaW5lZCBhcmUgaW5jbHVkZWQgYmVsb3cuIFRoZSBvcmRlciBtYXR0ZXJzIC0gdGhleSdyZSBwcm9jZXNzZWQgdG9wIHRvIGJvdHRvbSBcbiAqICovXG5leHBvcnRzLmhhbmRsZXIgPSBBbGV4YS5Ta2lsbEJ1aWxkZXJzLmN1c3RvbSgpXG4gICAgLmFkZFJlcXVlc3RIYW5kbGVycyhcbiAgICAgICAgTGF1bmNoUmVxdWVzdEhhbmRsZXIsXG4gICAgICAgIEhlbGxvV29ybGRJbnRlbnRIYW5kbGVyLFxuICAgICAgICBIZWxwSW50ZW50SGFuZGxlcixcbiAgICAgICAgQ2FuY2VsQW5kU3RvcEludGVudEhhbmRsZXIsXG4gICAgICAgIEZhbGxiYWNrSW50ZW50SGFuZGxlcixcbiAgICAgICAgU2Vzc2lvbkVuZGVkUmVxdWVzdEhhbmRsZXIsXG4gICAgICAgIEludGVudFJlZmxlY3RvckhhbmRsZXIpXG4gICAgLmFkZEVycm9ySGFuZGxlcnMoXG4gICAgICAgIEVycm9ySGFuZGxlcilcbiAgICAud2l0aFBlcnNpc3RlbmNlQWRhcHRlcihcbiAgICAgICAgbmV3IER5bmFtb0RiUGVyc2lzdGVuY2VBZGFwdGVyKHtcbiAgICAgICAgICAgIHRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuRFlOQU1PREJfUEVSU0lTVEVOQ0VfVEFCTEVfTkFNRSB8fCAna2lkc2hpZnQtdGFibGUnLFxuICAgICAgICAgICAgY3JlYXRlVGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZHluYW1vREJDbGllbnQ6IG5ldyBBV1MuRHluYW1vREIoeyBhcGlWZXJzaW9uOiAnbGF0ZXN0JywgcmVnaW9uOiBwcm9jZXNzLmVudi5EWU5BTU9EQl9QRVJTSVNURU5DRV9SRUdJT04gfSlcbiAgICAgICAgfSlcbiAgICApXG4gICAgLndpdGhDdXN0b21Vc2VyQWdlbnQoJ3NhbXBsZS9oZWxsby13b3JsZC92MS4yJylcbiAgICAubGFtYmRhKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc2stc2RrLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNrLXNkay1keW5hbW9kYi1wZXJzaXN0ZW5jZS1hZGFwdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9