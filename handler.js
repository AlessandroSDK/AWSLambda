'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('event is', event);
  console.log('context is', context);
  let remainingTime = context.getRemainingTimeInMillis();
  let functionName = context.functionName;
  let AWSrequestID = context.awsRequestId;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
        ev: event,
        rt: remainingTime,
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
