module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 5566, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
    },
}