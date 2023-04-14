const Job = require('../models/Job');
const { multipleToObject } = require('../../utils/convertObject');

class JobController {
    create = async (req, res, next) => {
        await Job.create({ name: req.body.name })
            .then(() => {
                res.json({
                    status: 1,
                    notification: 'Create done',
                });
            })
            .catch(next);
    };

    update = async (req, res, next) => {
        await Job.updateOne({ _id: req.body.id }, req.body)
            .then((job) => {
                if (job.matchedCount == 1) {
                    res.json({
                        status: 1,
                        notification: 'Update done',
                    });
                } else
                    res.json({
                        status: 0,
                        notification: 'Update failed',
                    });
            })
            .catch(next);
    };

    delete = async (req, res, next) => {
        await Job.deleteOne({ _id: req.body.id })
            .then((job) => {
                if (job.deletedCount == 1) {
                    res.json({
                        status: 1,
                        notification: 'Delete done',
                    });
                } else
                    res.json({
                        status: 0,
                        notification: 'Delete failed',
                    });
            })
            .catch(next);
    };

    get_all = async (req, res, next) => {
        await Job.find({})
            .then((jobs) => {
                res.json(multipleToObject(jobs));
            })
            .catch(next);
    };
}

module.exports = new JobController();
