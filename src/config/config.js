const dotenv = require('dotenv');
dotenv.config();

const dev = {
    port: process.env.PORT || 3000,
}

const segment = {
    key: process.env.SEGMENT_KEY || '',
    sourceId: process.env.SEGMENT_SOURCEID || ''
}

module.exports = {
    dev,
    segment
}