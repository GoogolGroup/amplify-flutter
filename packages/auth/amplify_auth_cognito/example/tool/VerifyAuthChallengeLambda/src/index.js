
exports.handler = async (event, context) => {
  if (event.request.privateChallengeParameters.answer === event.request.challengeAnswer) {
    event.response.answerCorrect = true;
  } else {
      event.response.answerCorrect = false;
  }
  return event;
};
