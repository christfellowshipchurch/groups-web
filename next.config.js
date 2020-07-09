const dotEnvResult = require('dotenv').config();

const prod = process.env.NODE_ENV === 'production';

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = {
  env: {
    API: process.env.API,
    TEST: process.env.TEST,
  },
};
