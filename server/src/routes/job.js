const express = require('express');
const router = express.Router();
const JobController = require('../app/controller/JobController');

router.post('/create', JobController.create);
router.post('/update', JobController.update);
router.post('/delete', JobController.delete);
router.get('/get-all', JobController.get_all);

module.exports = router;
