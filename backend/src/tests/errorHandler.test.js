const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const config = require('../config');

beforeAll(async () => {
    const dbURI = process.env.NODE_ENV === 'test' ? config['db'] : process.env.DB_URL_TEST;
    await mongoose.connect(dbURI);
});


afterAll(async () => {
    await mongoose.connection.close();
});

describe('Error Handler', () => {
    it('errorHandler should handle errors', async () => {
        const response = await request(app).get('/error');
        expect(response.status).toBe(404);
    });

    it('notFoundHandler should handle 404 errors', async () => {
        const response = await request(app).get('/non-existent-route');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Not Found' });
    });

    it('normal route should work as expected', async () => {
        const res = await request(app).get('/api/users');
        expect(res.status).toBe(200);
    });
});
