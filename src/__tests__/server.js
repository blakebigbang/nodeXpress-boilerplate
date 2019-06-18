const request = require('supertest');
const server = require('../../server');

describe('Index Route / Health Check', () => {
  test('should return 200', async () => {
    const res = await request(server).get('/');

    expect(res.statusCode).toBe(200);
  });
});
