const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app){

    app.use('/news', newsRouter);
    app.use('/home', siteRouter)
    app.use('/search', siteRouter)
    app.use('/', siteRouter);

}

module.exports = route;
