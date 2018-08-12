const { Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { projectId } = req.params;
      const section = await Section.create({
        ...req.body,
        ProjectId: projectId,
      });

      req.flash('success', 'Seção criada com sucesso');

      return res.redirect(`/app/projects/${projectId}/sections/${section.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const { projectId, id } = req.params;

      await Section.destroy({ where: { id } });

      req.flash('success', 'Seção deletada com sucesso');

      return res.redirect(`/app/projects/${projectId}`);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const { projectId, id } = req.params;
      const section = await Section.findById(id);

      await section.update({
        ...section,
        ...req.body,
      });

      req.flash('sucess', 'Seção atualizada com sucesso');

      return res.redirect(`/app/projects/${projectId}/sections/${id}`);
    } catch (err) {
      return next(err);
    }
  },
};
