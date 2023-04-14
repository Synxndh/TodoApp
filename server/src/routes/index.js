const jobRouter = require('./job');

const route = (app) => {
    app.use('/api/reducer-global/job', jobRouter);
};

module.exports = route;
