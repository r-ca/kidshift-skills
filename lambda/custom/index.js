/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const ask_sdk_core_1 = __webpack_require__(/*! ask-sdk-core */ "ask-sdk-core");
const launchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};
const helloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Hello World!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};
const helpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};
const cancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};
const sessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        const { reason } = handlerInput.requestEnvelope.request;
        console.log(`Session ended with reason: ${reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};
const errorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please say again.')
            .reprompt('Sorry, I can\'t understand the command. Please say again.')
            .getResponse();
    },
};
const skillBuilder = ask_sdk_core_1.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(launchRequestHandler, helloWorldIntentHandler, helpIntentHandler, cancelAndStopIntentHandler, sessionEndedRequestHandler)
    .addErrorHandlers(errorHandler)
    .lambda();

})();

module.exports.index = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxxQkFBcUIsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQTBCO1FBQzdCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQThCLENBQUM7UUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNwRCxPQUFPLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEQsQ0FBQztDQUNKLENBQUM7QUFDRixNQUFNLFlBQVksR0FBaUI7SUFDL0IsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLENBQUMsWUFBMEIsRUFBRSxLQUFZO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sWUFBWSxDQUFDLGVBQWU7YUFDOUIsS0FBSyxDQUFDLDJEQUEyRCxDQUFDO2FBQ2xFLFFBQVEsQ0FBQywyREFBMkQsQ0FBQzthQUNyRSxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0osQ0FBQztBQUNGLE1BQU0sWUFBWSxHQUFHLDRCQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDNUMsZUFBZSxHQUFHLFlBQVk7S0FDekIsa0JBQWtCLENBQ2Ysb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsMEJBQTBCLEVBQzFCLDBCQUEwQixDQUM3QjtLQUNBLGdCQUFnQixDQUFDLFlBQVksQ0FBQztLQUM5QixNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luZGV4L2V4dGVybmFsIGNvbW1vbmpzIFwiYXNrLXNkay1jb3JlXCIiLCJ3ZWJwYWNrOi8vaW5kZXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW5kZXgvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNrLXNkay1jb3JlXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBIYW5kbGVySW5wdXQsIFJlcXVlc3RIYW5kbGVyLCBFcnJvckhhbmRsZXIsIFNraWxsQnVpbGRlcnMgfSBmcm9tICdhc2stc2RrLWNvcmUnO1xuaW1wb3J0IHsgU2Vzc2lvbkVuZGVkUmVxdWVzdCB9IGZyb20gJ2Fzay1zZGstbW9kZWwnO1xuY29uc3QgbGF1bmNoUmVxdWVzdEhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyID0ge1xuICAgIGNhbkhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlcXVlc3RFbnZlbG9wZS5yZXF1ZXN0LnR5cGUgPT09ICdMYXVuY2hSZXF1ZXN0JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBzcGVlY2hUZXh0ID0gJ1dlbGNvbWUgdG8gdGhlIEFsZXhhIFNraWxscyBLaXQsIHlvdSBjYW4gc2F5IGhlbGxvISc7XG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlZWNoVGV4dClcbiAgICAgICAgICAgIC5yZXByb21wdChzcGVlY2hUZXh0KVxuICAgICAgICAgICAgLndpdGhTaW1wbGVDYXJkKCdIZWxsbyBXb3JsZCcsIHNwZWVjaFRleHQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9LFxufTtcbmNvbnN0IGhlbGxvV29ybGRJbnRlbnRIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUucmVxdWVzdC50eXBlID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUucmVxdWVzdC5pbnRlbnQubmFtZSA9PT0gJ0hlbGxvV29ybGRJbnRlbnQnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHNwZWVjaFRleHQgPSAnSGVsbG8gV29ybGQhJztcbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXNwb25zZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zcGVhayhzcGVlY2hUZXh0KVxuICAgICAgICAgICAgLndpdGhTaW1wbGVDYXJkKCdIZWxsbyBXb3JsZCcsIHNwZWVjaFRleHQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9LFxufTtcbmNvbnN0IGhlbHBJbnRlbnRIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUucmVxdWVzdC50eXBlID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUucmVxdWVzdC5pbnRlbnQubmFtZSA9PT0gJ0FNQVpPTi5IZWxwSW50ZW50JztcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCkge1xuICAgICAgICBjb25zdCBzcGVlY2hUZXh0ID0gJ1lvdSBjYW4gc2F5IGhlbGxvIHRvIG1lISc7XG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlZWNoVGV4dClcbiAgICAgICAgICAgIC5yZXByb21wdChzcGVlY2hUZXh0KVxuICAgICAgICAgICAgLndpdGhTaW1wbGVDYXJkKCdIZWxsbyBXb3JsZCcsIHNwZWVjaFRleHQpXG4gICAgICAgICAgICAuZ2V0UmVzcG9uc2UoKTtcbiAgICB9LFxufTtcbmNvbnN0IGNhbmNlbEFuZFN0b3BJbnRlbnRIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlciA9IHtcbiAgICBjYW5IYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUucmVxdWVzdC50eXBlID09PSAnSW50ZW50UmVxdWVzdCdcbiAgICAgICAgICAgICYmIChoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlLnJlcXVlc3QuaW50ZW50Lm5hbWUgPT09ICdBTUFaT04uQ2FuY2VsSW50ZW50J1xuICAgICAgICAgICAgICAgIHx8IGhhbmRsZXJJbnB1dC5yZXF1ZXN0RW52ZWxvcGUucmVxdWVzdC5pbnRlbnQubmFtZSA9PT0gJ0FNQVpPTi5TdG9wSW50ZW50Jyk7XG4gICAgfSxcbiAgICBoYW5kbGUoaGFuZGxlcklucHV0OiBIYW5kbGVySW5wdXQpIHtcbiAgICAgICAgY29uc3Qgc3BlZWNoVGV4dCA9ICdHb29kYnllISc7XG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoc3BlZWNoVGV4dClcbiAgICAgICAgICAgIC53aXRoU2ltcGxlQ2FyZCgnSGVsbG8gV29ybGQnLCBzcGVlY2hUZXh0KVxuICAgICAgICAgICAgLmdldFJlc3BvbnNlKCk7XG4gICAgfSxcbn07XG5jb25zdCBzZXNzaW9uRW5kZWRSZXF1ZXN0SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlLnJlcXVlc3QudHlwZSA9PT0gJ1Nlc3Npb25FbmRlZFJlcXVlc3QnO1xuICAgIH0sXG4gICAgaGFuZGxlKGhhbmRsZXJJbnB1dDogSGFuZGxlcklucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgcmVhc29uIH0gPSBoYW5kbGVySW5wdXQucmVxdWVzdEVudmVsb3BlLnJlcXVlc3QgYXMgU2Vzc2lvbkVuZGVkUmVxdWVzdDtcbiAgICAgICAgY29uc29sZS5sb2coYFNlc3Npb24gZW5kZWQgd2l0aCByZWFzb246ICR7cmVhc29ufWApO1xuICAgICAgICByZXR1cm4gaGFuZGxlcklucHV0LnJlc3BvbnNlQnVpbGRlci5nZXRSZXNwb25zZSgpO1xuICAgIH0sXG59O1xuY29uc3QgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIgPSB7XG4gICAgY2FuSGFuZGxlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhbmRsZShoYW5kbGVySW5wdXQ6IEhhbmRsZXJJbnB1dCwgZXJyb3I6IEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBoYW5kbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIHJldHVybiBoYW5kbGVySW5wdXQucmVzcG9uc2VCdWlsZGVyXG4gICAgICAgICAgICAuc3BlYWsoJ1NvcnJ5LCBJIGNhblxcJ3QgdW5kZXJzdGFuZCB0aGUgY29tbWFuZC4gUGxlYXNlIHNheSBhZ2Fpbi4nKVxuICAgICAgICAgICAgLnJlcHJvbXB0KCdTb3JyeSwgSSBjYW5cXCd0IHVuZGVyc3RhbmQgdGhlIGNvbW1hbmQuIFBsZWFzZSBzYXkgYWdhaW4uJylcbiAgICAgICAgICAgIC5nZXRSZXNwb25zZSgpO1xuICAgIH0sXG59O1xuY29uc3Qgc2tpbGxCdWlsZGVyID0gU2tpbGxCdWlsZGVycy5jdXN0b20oKTtcbmV4cG9ydHMuaGFuZGxlciA9IHNraWxsQnVpbGRlclxuICAgIC5hZGRSZXF1ZXN0SGFuZGxlcnMoXG4gICAgICAgIGxhdW5jaFJlcXVlc3RIYW5kbGVyLFxuICAgICAgICBoZWxsb1dvcmxkSW50ZW50SGFuZGxlcixcbiAgICAgICAgaGVscEludGVudEhhbmRsZXIsXG4gICAgICAgIGNhbmNlbEFuZFN0b3BJbnRlbnRIYW5kbGVyLFxuICAgICAgICBzZXNzaW9uRW5kZWRSZXF1ZXN0SGFuZGxlcixcbiAgICApXG4gICAgLmFkZEVycm9ySGFuZGxlcnMoZXJyb3JIYW5kbGVyKVxuICAgIC5sYW1iZGEoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==