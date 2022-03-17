const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://howbright.github.io/comake2022' : 'http://localhost:3000',
  distDir: "_next",
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
