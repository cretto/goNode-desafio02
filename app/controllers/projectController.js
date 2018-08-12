const { Project, Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });

      req.flash('success', 'Projeto criado com sucesso');

      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const { user } = req.session;
      const { id, sectionId } = req.params;

      const project = await Project.findById(id, {
        include: [Section],
      });

      let currentSection;
      if (sectionId) {
        currentSection = project.Sections.find(item => item.id.toString() === sectionId);
      } else {
        currentSection = project.Sections.length > 0 ? project.Sections[0] : null;
      }

      return res.render('projects/show', { user, project, currentSection });
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      await Project.destroy({ where: { id: req.params.id } });

      req.flash('success', 'Projeto deletado com sucesso');

      return res.redirect('/');
    } catch (err) {
      return next(err);
    }
  },

  async edit(req, res, next) {
    try {
      const { user } = req.session;
      const { id, sectionId } = req.params;

      const project = await Project.findById(id, {
        include: [Section],
      });

      const currentSection = await Section.findById(sectionId);

      return res.render('projects/edit', { user, project, currentSection });
    } catch (err) {
      return next(err);
    }
  },
};
