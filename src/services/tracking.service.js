const Analytics = require('analytics-node');
const config = require("../config/config");

const analytics = new Analytics(config.segment.key);

const trackingSer = async (body) => {
  console.log(body)
  const { userId, event, properties } = body;

  try {
    let trackingContent = {
      userId: '',
      refId: '',
      event: '',
      properties: {},
      timestamp: new Date()
    };
    if (userId) {
      trackingContent.userId = userId;
    }
    if (event) {
      trackingContent.event = event;
    }
    if (properties) {
      trackingContent.properties = properties;
    }

    await analytics.track(trackingContent);
    return {
      code: 200,
      description: 'success'
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  trackingSer
}