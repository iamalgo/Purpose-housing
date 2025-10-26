const path = require('path');

module.exports = {
  turbopack: {}, // ✅ Silences the Turbopack warning

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};