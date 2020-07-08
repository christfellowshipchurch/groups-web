const dotEnvResult = require("dotenv").config();

module.exports = {
  client: {
    service: {
      name: 'apollos.christfellowship.church',
      url: process.env.API,
    }
  },
};
