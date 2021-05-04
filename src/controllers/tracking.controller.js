const trackingService = require('../services/tracking.service')

const { trackingSer } = trackingService;

const trackingCon = async (req, res) => {
  try {
    const service = await trackingSer(req.body);
    res.send(service);
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500).send(e)
  }
}

const trackingUninstallCon = async (req, res) => {
  const { userId, user } = req.query;
  try {
    let body = {
      userId: userId || '',
      event: 'kru_uninstall_application',
      properties: {
        user: user || ''
      }
    }
    const service = await trackingSer(body);
    if (service.code === 200) {
      res.status(200).redirect('https://www.katalon.com/sign-up/?utm_source=browser%20store&utm_campaign=uninstalled%20KR');
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).redirect('https://www.katalon.com/sign-up/?utm_source=browser%20store&utm_campaign=uninstalled%20KR');
  }
}

module.exports = {
  trackingCon,
  trackingUninstallCon
}