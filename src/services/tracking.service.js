const Analytics = require('analytics-node');
const config = require("../config/config");

const analytics = new Analytics(config.segment.key);

const trackingSer = async (body) => {
  const { userId, anonymousId, event, properties } = body;
  try {
    let trackingContent = {
      userId: '',
      anonymousId: '',
      refId: '',
      event: '',
      properties: {},
      timestamp: new Date()
    };
    if (anonymousId) {
      if (userId) {
        trackingContent.userId = userId;
      }
      trackingContent.anonymousId = anonymousId;
    }
    if (event) {
      trackingContent.event = event;
    }
    if (properties) {
      trackingContent.properties = properties;
    }

    analytics.track(trackingContent);
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