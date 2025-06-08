const { Sequelize, DataTypes } = require('sequelize');

// Create a fresh in-memory Sequelize instance for tests
const sequelize = new Sequelize('sqlite::memory:', { logging: false });

// Define the Slide model (same as in src/models/Slide.js)
const Slide = sequelize.define('Slide', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  layout: {
    type: DataTypes.STRING,
    defaultValue: 'title-only'
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'slides',
  timestamps: false
});

beforeAll(async () => {
  // Sync schema
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Slide model CRUD', () => {
  let slide;

  test('create: should create a Slide', async () => {
    slide = await Slide.create({
      title: 'Test Slide',
      content: '# Hello World',
      layout: 'title-only',
      order: 1
    });
    expect(slide.id).toBeDefined();
    expect(slide.title).toBe('Test Slide');
  });

  test('read: should find the Slide by PK', async () => {
    const found = await Slide.findByPk(slide.id);
    expect(found.content).toBe('# Hello World');
  });

  test('update: should update the Slide content', async () => {
    await slide.update({ content: '* Updated*' });
    const updated = await Slide.findByPk(slide.id);
    expect(updated.content).toBe('* Updated*');
  });

  test('delete: should destroy the Slide', async () => {
    await slide.destroy();
    const missing = await Slide.findByPk(slide.id);
    expect(missing).toBeNull();
  });
});
