const request = require('supertest');
const server = require('../../server');

describe('Index Route / Health Check', () => {
  test('GET / should return 200', async () => {
    const res = await request(server).get('/');

    expect(res.statusCode).toBe(200);
  });

  test('POST / should return 404', async () => {
    const res = await request(server).post('/');

    expect(res.statusCode).toBe(404);
  });
});
