module.exports = (router) => {
    router.use('/user', require('./user/user'));
    router.use('/map', require('./map/mapRoutes'));
};