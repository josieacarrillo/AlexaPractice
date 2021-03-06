const Alexa = require('ask-sdk-core');

const HelloHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloIntent';
  },
  handle(handlerInput) {
   const speakOutput = 'Hello Codecademy';

   return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
	}
};
