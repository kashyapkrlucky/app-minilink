// src/tests/user.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');
const config = require('../config');

beforeAll(async () => {
    const dbURI = process.env.NODE_ENV === 'test' ? config['db'] : process.env.DB_URL_TEST;
    await mongoose.connect(dbURI);
});


afterAll(async () => {
    await mongoose.connection.close();
});

beforeEach(async () => {
    await User.deleteMany({});
});

describe('User Routes APIs', () => {
    it('should create a user', async () => {
        const res = await request(app)
            .post('/api/users/create')
            .send({
                name: 'abc',
                email: 'testuser@example.com',
                password: 'testpassword',
            });
        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('user added successfully');
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.data).toHaveProperty('token');
    });

    it('should not create a user with an existing email', async () => {
        const existingUser = new User({ email: 'testuser@example.com', password: 'testpassword' });
        await existingUser.save();

        const res = await request(app)
            .post('/api/users/create')
            .send({
                name: 'abc',
                email: 'testuser@example.com',
                password: 'newpassword',
            });

        expect(res.status).toEqual(409);
        expect(res.body.message).toBe('Email already exist');
    });

    it('should login a user', async () => {
        await User.create({ email: 'a@b.com', password: 'testpassword' });

        const res = await request(app).post('/api/users/signin').send({
            email: 'a@b.com',
            password: 'testpassword',
        });

        expect(res.status).toEqual(200);
    });

    it('should not login a user with incorrect password', async () => {
        await User.create({ email: 'testuser', password: 'testpassword' });

        const res = await request(app).post('/api/users/signin').send({
            email: 'testuser',
            password: 'wrongpassword',
        });

        expect(res.status).toEqual(401);
        expect(res.body.message).toEqual('Invalid email or password');
    });

    it('should get all users', async () => {
        const user1 = new User({ name: 'User One', email: 'userone@example.com', password: 'password1' });
        const user2 = new User({ name: 'User Two', email: 'usertwo@example.com', password: 'password2' });
        await user1.save();
        await user2.save();

        const res = await request(app).get('/api/users');
        
        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('2 records found');
        expect(res.body.data.length).toBe(2);
        expect(res.body.data[0]).toHaveProperty('name', 'User One');
        expect(res.body.data[0]).toHaveProperty('email', 'userone@example.com');
        expect(res.body.data[1]).toHaveProperty('name', 'User Two');
        expect(res.body.data[1]).toHaveProperty('email', 'usertwo@example.com');
    });

    it('should get all users return 200 even if no users', async () => {
        const res = await request(app).get('/api/users');
        
        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('Users not found');
    });

    it('should get a single user by ID', async () => {
        const user = new User({ name: 'Single User', email: 'singleuser@example.com', password: 'password' });
        await user.save();

        const res = await request(app).get(`/api/users/${user._id}`);

        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('record found');
        expect(res.body.data).toHaveProperty('name', 'Single User');
        expect(res.body.data).toHaveProperty('email', 'singleuser@example.com');
    });

    it('should return records not found if user id not found', async () => {
        const fakeId = new mongoose.Types.ObjectId();
        const res = await request(app).get(`/api/users/${fakeId}`);

        expect(res.body.message).toBe('record not found');
    });

    it('should handle server errors /api/users', async () => {
        jest.spyOn(User, 'find').mockImplementationOnce(() => {
            throw new Error('Server error');
        });

        const res = await request(app).get('/api/users');
        expect(res.status).toEqual(500);
    });

    it('should handle server errors /api/users/1', async () => {
        jest.spyOn(User, 'find').mockImplementationOnce(() => {
            throw new Error('Server error');
        });

        const res = await request(app).get('/api/users/1');
        expect(res.status).toEqual(500);
    });

    it('should handle server errors /api/users/create', async () => {
        jest.spyOn(User, 'find').mockImplementationOnce(() => {
            throw new Error('Server error');
        });

        const res = await request(app).get('/api/users/create');
        expect(res.status).toEqual(500);
    });

    it('should handle server errors /api/users/signin', async () => {
        jest.spyOn(User, 'find').mockImplementationOnce(() => {
            throw new Error('Server error');
        });

        const res = await request(app).get('/api/users/signin');
        expect(res.status).toEqual(500);
    });
});

