const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
}
