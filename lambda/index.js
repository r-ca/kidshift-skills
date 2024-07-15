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
    handle(handlerInput) {
        const speakOutput = 'Hello World!';
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
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();


/***/ }),

/***/ "ask-sdk-core":
/*!*******************************!*\
  !*** external "ask-sdk-core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("ask-sdk-core");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO2FBQ2xCLFFBQVEsQ0FBQyxXQUFXLENBQUM7YUFDckIsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNKLENBQUM7QUFPRixlQUFlLEdBQUcsc0JBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0tBQ3pDLGtCQUFrQixDQUNmLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsMEJBQTBCLEVBQzFCLHNCQUFzQixDQUFDO0tBQzFCLGdCQUFnQixDQUNiLFlBQVksQ0FBQztLQUNoQixtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQztLQUM5QyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7QUN0SmQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRleC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9pbmRleC9leHRlcm5hbCBjb21tb25qcyBcImFzay1zZGstY29yZVwiIiwid2VicGFjazovL2luZGV4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2luZGV4L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaW5kZXgvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2luZGV4L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWxleGEgZnJvbSAnYXNrLXNkay1jb3JlJztcblxuY29uc3QgTGF1bmNoUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0xhdW5jaFJlcXVlc3QnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1dlbGNvbWUsIHlvdSBjYW4gc2F5IEhlbGxvIG9yIEhlbHAuIFdoaWNoIHdvdWxkIHlvdSBsaWtlIHRvIHRyeT8nO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAucmVwcm9tcHQoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuXG5jb25zdCBIZWxsb1dvcmxkSW50ZW50SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBBbGV4YS5IYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIEFsZXhhLmdldFJlcXVlc3RUeXBlKGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdIZWxsb1dvcmxkSW50ZW50JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBzcGVha091dHB1dCA9ICdIZWxsbyBXb3JsZCEnO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAvLy5yZXByb21wdCgnYWRkIGEgcmVwcm9tcHQgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgc2Vzc2lvbiBvcGVuIGZvciB0aGUgdXNlciB0byByZXNwb25kJylcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IEhlbHBJbnRlbnRIYW5kbGVyID0ge1xuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdJbnRlbnRSZXF1ZXN0J1xuICAgICAgICAgICAgJiYgQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0FNQVpPTi5IZWxwSW50ZW50JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBzcGVha091dHB1dCA9ICdZb3UgY2FuIHNheSBoZWxsbyB0byBtZSEgSG93IGNhbiBJIGhlbHA/JztcblxuICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlc3BvbnNlQnVpbGRlclxuICAgICAgICAgICAgLnNwZWFrKHNwZWFrT3V0cHV0KVxuICAgICAgICAgICAgLnJlcHJvbXB0KHNwZWFrT3V0cHV0KVxuICAgICAgICAgICAgLmdldFJlc3BvbnNlKCk7XG4gICAgfVxufTtcblxuY29uc3QgQ2FuY2VsQW5kU3RvcEludGVudEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0ludGVudFJlcXVlc3QnXG4gICAgICAgICAgICAmJiAoQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0FNQVpPTi5DYW5jZWxJbnRlbnQnXG4gICAgICAgICAgICAgICAgfHwgQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0FNQVpPTi5TdG9wSW50ZW50Jyk7XG4gICAgfSxcbiAgICBoYW5kbGUoaGFuZGxlcklucHV0OiBBbGV4YS5IYW5kbGVySW5wdXQpIHtcbiAgICAgICAgY29uc3Qgc3BlYWtPdXRwdXQgPSAnR29vZGJ5ZSEnO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuLyogKlxuICogRmFsbGJhY2tJbnRlbnQgdHJpZ2dlcnMgd2hlbiBhIGN1c3RvbWVyIHNheXMgc29tZXRoaW5nIHRoYXQgZG9lc27igJl0IG1hcCB0byBhbnkgaW50ZW50cyBpbiB5b3VyIHNraWxsXG4gKiBJdCBtdXN0IGFsc28gYmUgZGVmaW5lZCBpbiB0aGUgbGFuZ3VhZ2UgbW9kZWwgKGlmIHRoZSBsb2NhbGUgc3VwcG9ydHMgaXQpXG4gKiBUaGlzIGhhbmRsZXIgY2FuIGJlIHNhZmVseSBhZGRlZCBidXQgd2lsbCBiZSBpbmdub3JlZCBpbiBsb2NhbGVzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQgeWV0IFxuICogKi9cbmNvbnN0IEZhbGxiYWNrSW50ZW50SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBBbGV4YS5IYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIEFsZXhhLmdldFJlcXVlc3RUeXBlKGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdBTUFaT04uRmFsbGJhY2tJbnRlbnQnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1NvcnJ5LCBJIGRvblxcJ3Qga25vdyBhYm91dCB0aGF0LiBQbGVhc2UgdHJ5IGFnYWluLic7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVha091dHB1dClcbiAgICAgICAgICAgIC5yZXByb21wdChzcGVha091dHB1dClcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG4vKiAqXG4gKiBTZXNzaW9uRW5kZWRSZXF1ZXN0IG5vdGlmaWVzIHRoYXQgYSBzZXNzaW9uIHdhcyBlbmRlZC4gVGhpcyBoYW5kbGVyIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gYSBjdXJyZW50bHkgb3BlbiBcbiAqIHNlc3Npb24gaXMgY2xvc2VkIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOiAxKSBUaGUgdXNlciBzYXlzIFwiZXhpdFwiIG9yIFwicXVpdFwiLiAyKSBUaGUgdXNlciBkb2VzIG5vdCBcbiAqIHJlc3BvbmQgb3Igc2F5cyBzb21ldGhpbmcgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbiBpbnRlbnQgZGVmaW5lZCBpbiB5b3VyIHZvaWNlIG1vZGVsLiAzKSBBbiBlcnJvciBvY2N1cnMgXG4gKiAqL1xuY29uc3QgU2Vzc2lvbkVuZGVkUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ1Nlc3Npb25FbmRlZFJlcXVlc3QnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogQWxleGEuSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB+fn5+IFNlc3Npb24gZW5kZWQ6ICR7SlNPTi5zdHJpbmdpZnkoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSl9YCk7XG4gICAgICAgIC8vIEFueSBjbGVhbnVwIGxvZ2ljIGdvZXMgaGVyZS5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXIuZ2V0UmVzcG9uc2UoKTsgLy8gbm90aWNlIHdlIHNlbmQgYW4gZW1wdHkgcmVzcG9uc2VcbiAgICB9XG59O1xuLyogKlxuICogVGhlIGludGVudCByZWZsZWN0b3IgaXMgdXNlZCBmb3IgaW50ZXJhY3Rpb24gbW9kZWwgdGVzdGluZyBhbmQgZGVidWdnaW5nLlxuICogSXQgd2lsbCBzaW1wbHkgcmVwZWF0IHRoZSBpbnRlbnQgdGhlIHVzZXIgc2FpZC4gWW91IGNhbiBjcmVhdGUgY3VzdG9tIGhhbmRsZXJzIGZvciB5b3VyIGludGVudHMgXG4gKiBieSBkZWZpbmluZyB0aGVtIGFib3ZlLCB0aGVuIGFsc28gYWRkaW5nIHRoZW0gdG8gdGhlIHJlcXVlc3QgaGFuZGxlciBjaGFpbiBiZWxvdyBcbiAqICovXG5jb25zdCBJbnRlbnRSZWZsZWN0b3JIYW5kbGVyID0ge1xuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdJbnRlbnRSZXF1ZXN0JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBpbnRlbnROYW1lID0gQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKTtcbiAgICAgICAgY29uc3Qgc3BlYWtPdXRwdXQgPSBgWW91IGp1c3QgdHJpZ2dlcmVkICR7aW50ZW50TmFtZX1gO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAvLy5yZXByb21wdCgnYWRkIGEgcmVwcm9tcHQgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgc2Vzc2lvbiBvcGVuIGZvciB0aGUgdXNlciB0byByZXNwb25kJylcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG4vKipcbiAqIEdlbmVyaWMgZXJyb3IgaGFuZGxpbmcgdG8gY2FwdHVyZSBhbnkgc3ludGF4IG9yIHJvdXRpbmcgZXJyb3JzLiBJZiB5b3UgcmVjZWl2ZSBhbiBlcnJvclxuICogc3RhdGluZyB0aGUgcmVxdWVzdCBoYW5kbGVyIGNoYWluIGlzIG5vdCBmb3VuZCwgeW91IGhhdmUgbm90IGltcGxlbWVudGVkIGEgaGFuZGxlciBmb3JcbiAqIHRoZSBpbnRlbnQgYmVpbmcgaW52b2tlZCBvciBpbmNsdWRlZCBpdCBpbiB0aGUgc2tpbGwgYnVpbGRlciBiZWxvdyBcbiAqICovXG5jb25zdCBFcnJvckhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEFsZXhhLkhhbmRsZXJJbnB1dCwgZXJyb3I6IEVycm9yKSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1NvcnJ5LCBJIGhhZCB0cm91YmxlIGRvaW5nIHdoYXQgeW91IGFza2VkLiBQbGVhc2UgdHJ5IGFnYWluLic7XG4gICAgICAgIGNvbnNvbGUubG9nKGB+fn5+IEVycm9yIGhhbmRsZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAucmVwcm9tcHQoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgaGFuZGxlciBhY3RzIGFzIHRoZSBlbnRyeSBwb2ludCBmb3IgeW91ciBza2lsbCwgcm91dGluZyBhbGwgcmVxdWVzdCBhbmQgcmVzcG9uc2VcbiAqIHBheWxvYWRzIHRvIHRoZSBoYW5kbGVycyBhYm92ZS4gTWFrZSBzdXJlIGFueSBuZXcgaGFuZGxlcnMgb3IgaW50ZXJjZXB0b3JzIHlvdSd2ZVxuICogZGVmaW5lZCBhcmUgaW5jbHVkZWQgYmVsb3cuIFRoZSBvcmRlciBtYXR0ZXJzIC0gdGhleSdyZSBwcm9jZXNzZWQgdG9wIHRvIGJvdHRvbSBcbiAqICovXG5leHBvcnRzLmhhbmRsZXIgPSBBbGV4YS5Ta2lsbEJ1aWxkZXJzLmN1c3RvbSgpXG4gICAgLmFkZFJlcXVlc3RIYW5kbGVycyhcbiAgICAgICAgTGF1bmNoUmVxdWVzdEhhbmRsZXIsXG4gICAgICAgIEhlbGxvV29ybGRJbnRlbnRIYW5kbGVyLFxuICAgICAgICBIZWxwSW50ZW50SGFuZGxlcixcbiAgICAgICAgQ2FuY2VsQW5kU3RvcEludGVudEhhbmRsZXIsXG4gICAgICAgIEZhbGxiYWNrSW50ZW50SGFuZGxlcixcbiAgICAgICAgU2Vzc2lvbkVuZGVkUmVxdWVzdEhhbmRsZXIsXG4gICAgICAgIEludGVudFJlZmxlY3RvckhhbmRsZXIpXG4gICAgLmFkZEVycm9ySGFuZGxlcnMoXG4gICAgICAgIEVycm9ySGFuZGxlcilcbiAgICAud2l0aEN1c3RvbVVzZXJBZ2VudCgnc2FtcGxlL2hlbGxvLXdvcmxkL3YxLjInKVxuICAgIC5sYW1iZGEoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzay1zZGstY29yZVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=