const request = require('supertest');
const server = require('../src/index');

afterAll((done) => {server.close(done)});

test('GET /health returns 200 OK', async () => {
  const res = await request(server).get('/health');
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ status: 'OK' });
});
