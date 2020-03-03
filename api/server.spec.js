const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    it('DB_ENV should be testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
});

describe('GET / Verify server is running', () => {
    it('should return 200 ok', async() => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200); 
    })
})