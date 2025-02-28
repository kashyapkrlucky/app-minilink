const express = require('express');
const controller = require('../controllers/project');
const router = express.Router();
const { authenticate } = require('../middlewares/authentication');

router.get('/list', controller.getProjects);
router.get('/:id', controller.getProjectById);
router.post('/create', authenticate, controller.createProject);
router.patch('/update/:id', authenticate, controller.updateProject);
router.delete('/delete/:id', authenticate, controller.deleteProject);

module.exports = router;
