if (process.env.NODE_ENV === 'production') {
    module.exports = require('./')
} else {
    module.exports = require('./configureStore.dev')
}