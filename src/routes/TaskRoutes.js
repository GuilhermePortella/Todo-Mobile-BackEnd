const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const macaddressValidation = require('../middlewares/macaddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id',TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done' , TaskController.done);


router.get('/filter/all', macaddressValidation, TaskController.all);
router.get('/filter/late', macaddressValidation, TaskController.late);
router.get('/filter/today', macaddressValidation, TaskController.today);
router.get('/filter/week', macaddressValidation, TaskController.week);
router.get('/filter/month', macaddressValidation, TaskController.month);
router.get('/filter/year', macaddressValidation, TaskController.year);

module.exports = router;