// controllers/ProjectController.js
const { onSuccess, onError, onNotFound } = require('../middlewares/responseMiddleware');
const Project = require('../models/Project');

// @desc    Get all Projects
// @route   GET /api/Projects
// @access  Public
const getProjects = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const projects = await Project.find()
            .skip((page - 1) * limit)
            .limit(limit)
        onSuccess(res, projects, `${projects.length} records found`);
    } catch (error) {
        onError(res, error, error.message);
    }
};

// @desc    Create new Project
// @route   POST /api/Projects
// @access  Private
const createProject = async (req, res) => {
    const { name, appUrl, icon } = req.body;
    try {
        const project = new Project({
            name, appUrl, icon
        });
        const item = await project.save();
        onSuccess(res, item._id, `record added`)
    } catch (error) {
        onError(res, error, error.message);
    }
};

// @desc    Get Project by ID
// @route   GET /api/Projects/:id
// @access  Public
const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
        onSuccess(res, project, `record found`)
    } catch (error) {
        onError(res, error, error.message);
    }
};

// @desc    Update Project
// @route   PUT /api/Projects/:id
// @access  Private
const updateProject = async (req, res) => {
    const { name, appUrl, icon } = req.body;
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { name, appUrl, icon },
            { new: true }
        );
        if (!project) {
            return onNotFound(res, '', `Project not found`);
        }
        onSuccess(res, project._id, `Project updated successfully`);
    } catch (error) {
        onError(res, error, error.message);
    }
};

// @desc    Delete Project
// @route   DELETE /api/Projects/:id
// @access  Private
const deleteProject = async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
        await Project.findByIdAndDelete(req.params.id);
        onSuccess(res, project._id, `Project removed successfully`);
    } else {
        onError(res, 'error', 'error.message');
    }
};

module.exports = {
    getProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject,
};
