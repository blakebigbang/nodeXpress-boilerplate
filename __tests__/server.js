const request = require('supertest');
const server = require('../server');

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

describe('Error Handler', () => {
  test('GET /does-not-exist should return 404', async () => {
    const res = await request(server).get('/does-not-exist');

    expect(res.statusCode).toBe(404);
  });

  test('GET / with error param should return 444', async () => {
    const res = await request(server)
      .get('/')
      .query({ error: true });

    expect(res.statusCode).toBe(444);
    expect(res.error.text).toBe('There was an error!');
  });
});
