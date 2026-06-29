const request = require('supertest');
const { app } = require('../src/index');

describe('GET /api/v1/health', () => {
  it('should return 200 OK and system health details', async () => {
    const response = await request(app)
      .get('/api/v1/health')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('UP');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('services');
    expect(response.body.services).toHaveProperty('database');
  });

  it('should return 404 for non-existent routes', async () => {
    const response = await request(app)
      .get('/api/v1/non-existent-route')
      .expect('Content-Type', /json/)
      .expect(404);

    expect(response.body).toHaveProperty('success');
    expect(response.body.success).toBe(false);
    expect(response.body).toHaveProperty('message');
  });
});
