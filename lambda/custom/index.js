/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
const Alexa = __importStar(__webpack_require__(/*! ask-sdk-core */ "ask-sdk-core"));
const ask_sdk_core_1 = __webpack_require__(/*! ask-sdk-core */ "ask-sdk-core");
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
    handle(handlerInput) {
        const speakOutput = 'Hello World!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
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
exports.handler = ask_sdk_core_1.SkillBuilders.custom()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsQ0FBQzthQUNsQixRQUFRLENBQUMsV0FBVyxDQUFDO2FBQ3JCLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSixDQUFDO0FBRVcsZUFBTyxHQUFHLDRCQUFhLENBQUMsTUFBTSxFQUFFO0tBQ3hDLGtCQUFrQixDQUNmLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsMEJBQTBCLEVBQzFCLHNCQUFzQixDQUN6QjtLQUNBLGdCQUFnQixDQUFDLFlBQVksQ0FBQztLQUM5QixtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQztLQUM5QyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7QUNuSWQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRleC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9pbmRleC9leHRlcm5hbCBjb21tb25qcyBcImFzay1zZGstY29yZVwiIiwid2VicGFjazovL2luZGV4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2luZGV4L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaW5kZXgvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2luZGV4L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBbGV4YSBmcm9tICdhc2stc2RrLWNvcmUnO1xuaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIsIEVycm9ySGFuZGxlciwgU2tpbGxCdWlsZGVycyB9IGZyb20gJ2Fzay1zZGstY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuXG5jb25zdCBMYXVuY2hSZXF1ZXN0SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdMYXVuY2hSZXF1ZXN0JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQpIHtcbiAgICAgICAgY29uc3Qgc3BlYWtPdXRwdXQgPSAnV2VsY29tZSwgeW91IGNhbiBzYXkgSGVsbG8gb3IgSGVscC4gV2hpY2ggd291bGQgeW91IGxpa2UgdG8gdHJ5Pyc7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVha091dHB1dClcbiAgICAgICAgICAgIC5yZXByb21wdChzcGVha091dHB1dClcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IEhlbGxvV29ybGRJbnRlbnRIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0ludGVudFJlcXVlc3QnXG4gICAgICAgICAgICAmJiBBbGV4YS5nZXRJbnRlbnROYW1lKGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpID09PSAnSGVsbG9Xb3JsZEludGVudCc7XG4gICAgfSxcbiAgICBoYW5kbGUoaGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ0hlbGxvIFdvcmxkISc7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVha091dHB1dClcbiAgICAgICAgICAgIC8vLnJlcHJvbXB0KCdhZGQgYSByZXByb21wdCBpZiB5b3Ugd2FudCB0byBrZWVwIHRoZSBzZXNzaW9uIG9wZW4gZm9yIHRoZSB1c2VyIHRvIHJlc3BvbmQnKVxuICAgICAgICAgICAgLmdldFJlc3BvbnNlKCk7XG4gICAgfVxufTtcblxuY29uc3QgSGVscEludGVudEhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyID0ge1xuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIEFsZXhhLmdldFJlcXVlc3RUeXBlKGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdBTUFaT04uSGVscEludGVudCc7XG4gICAgfSxcbiAgICBoYW5kbGUoaGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1lvdSBjYW4gc2F5IGhlbGxvIHRvIG1lISBIb3cgY2FuIEkgaGVscD8nO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAucmVwcm9tcHQoc3BlYWtPdXRwdXQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuXG5jb25zdCBDYW5jZWxBbmRTdG9wSW50ZW50SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdJbnRlbnRSZXF1ZXN0J1xuICAgICAgICAgICAgJiYgKEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdBTUFaT04uQ2FuY2VsSW50ZW50J1xuICAgICAgICAgICAgICAgIHx8IEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdBTUFaT04uU3RvcEludGVudCcpO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBzcGVha091dHB1dCA9ICdHb29kYnllISc7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVha091dHB1dClcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IEZhbGxiYWNrSW50ZW50SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdJbnRlbnRSZXF1ZXN0J1xuICAgICAgICAgICAgJiYgQWxleGEuZ2V0SW50ZW50TmFtZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ0FNQVpPTi5GYWxsYmFja0ludGVudCc7XG4gICAgfSxcbiAgICBoYW5kbGUoaGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gJ1NvcnJ5LCBJIGRvblxcJ3Qga25vdyBhYm91dCB0aGF0LiBQbGVhc2UgdHJ5IGFnYWluLic7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVha091dHB1dClcbiAgICAgICAgICAgIC5yZXByb21wdChzcGVha091dHB1dClcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IFNlc3Npb25FbmRlZFJlcXVlc3RIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBBbGV4YS5nZXRSZXF1ZXN0VHlwZShoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlKSA9PT0gJ1Nlc3Npb25FbmRlZFJlcXVlc3QnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgfn5+fiBTZXNzaW9uIGVuZGVkOiAke0pTT04uc3RyaW5naWZ5KGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUpfWApO1xuICAgICAgICAvLyBBbnkgY2xlYW51cCBsb2dpYyBnb2VzIGhlcmUuXG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyLmdldFJlc3BvbnNlKCk7IC8vIG5vdGljZSB3ZSBzZW5kIGFuIGVtcHR5IHJlc3BvbnNlXG4gICAgfVxufTtcblxuY29uc3QgSW50ZW50UmVmbGVjdG9ySGFuZGxlcjogUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gQWxleGEuZ2V0UmVxdWVzdFR5cGUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSkgPT09ICdJbnRlbnRSZXF1ZXN0JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQpIHtcbiAgICAgICAgY29uc3QgaW50ZW50TmFtZSA9IEFsZXhhLmdldEludGVudE5hbWUoaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZSk7XG4gICAgICAgIGNvbnN0IHNwZWFrT3V0cHV0ID0gYFlvdSBqdXN0IHRyaWdnZXJlZCAke2ludGVudE5hbWV9YDtcblxuICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlc3BvbnNlQnVpbGRlclxuICAgICAgICAgICAgLnNwZWFrKHNwZWFrT3V0cHV0KVxuICAgICAgICAgICAgLy8ucmVwcm9tcHQoJ2FkZCBhIHJlcHJvbXB0IGlmIHlvdSB3YW50IHRvIGtlZXAgdGhlIHNlc3Npb24gb3BlbiBmb3IgdGhlIHVzZXIgdG8gcmVzcG9uZCcpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9XG59O1xuXG5jb25zdCBFcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dCwgZXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc3BlYWtPdXRwdXQgPSAnU29ycnksIEkgaGFkIHRyb3VibGUgZG9pbmcgd2hhdCB5b3UgYXNrZWQuIFBsZWFzZSB0cnkgYWdhaW4uJztcbiAgICAgICAgY29uc29sZS5sb2coYH5+fn4gRXJyb3IgaGFuZGxlZDogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YCk7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVha091dHB1dClcbiAgICAgICAgICAgIC5yZXByb21wdChzcGVha091dHB1dClcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gU2tpbGxCdWlsZGVycy5jdXN0b20oKVxuICAgIC5hZGRSZXF1ZXN0SGFuZGxlcnMoXG4gICAgICAgIExhdW5jaFJlcXVlc3RIYW5kbGVyLFxuICAgICAgICBIZWxsb1dvcmxkSW50ZW50SGFuZGxlcixcbiAgICAgICAgSGVscEludGVudEhhbmRsZXIsXG4gICAgICAgIENhbmNlbEFuZFN0b3BJbnRlbnRIYW5kbGVyLFxuICAgICAgICBGYWxsYmFja0ludGVudEhhbmRsZXIsXG4gICAgICAgIFNlc3Npb25FbmRlZFJlcXVlc3RIYW5kbGVyLFxuICAgICAgICBJbnRlbnRSZWZsZWN0b3JIYW5kbGVyXG4gICAgKVxuICAgIC5hZGRFcnJvckhhbmRsZXJzKEVycm9ySGFuZGxlcilcbiAgICAud2l0aEN1c3RvbVVzZXJBZ2VudCgnc2FtcGxlL2hlbGxvLXdvcmxkL3YxLjInKVxuICAgIC5sYW1iZGEoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzay1zZGstY29yZVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=