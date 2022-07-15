module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/real_age_calculator/dist/'
        : '/'
}