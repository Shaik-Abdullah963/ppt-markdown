const Slide = require('../models/Slide');

exports.getAll = async (req, res, next) => {
  const slides = await Slide.findAll({ order: [['order', 'ASC']] });
  res.json(slides);
};

exports.getOne = async (req, res, next) => {
  const slide = await Slide.findByPk(req.params.id);
  if (!slide) return res.status(404).json({ error: 'Not found' });
  res.json(slide);
};

exports.create = async (req, res, next) => {
  const { title, content, layout, order } = req.body;
  const slide = await Slide.create({ title, content, layout, order });
  res.status(201).json(slide);
};

exports.update = async (req, res, next) => {
  const slide = await Slide.findByPk(req.params.id);
  if (!slide) return res.status(404).json({ error: 'Not found' });
  await slide.update(req.body);
  res.json(slide);
};

exports.remove = async (req, res, next) => {
  const slide = await Slide.findByPk(req.params.id);
  if (!slide) return res.status(404).json({ error: 'Not found' });
  await slide.destroy();
  res.status(204).end();
};
