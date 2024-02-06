const request = require('supertest');
const server = require('./server');

describe('Profile API', () => {
    it('should register a new user profile', async () => {
        const newProfileData = { name: 'AndrewLoh', phone: '89260666158', email: 'Kisser@mail.ru' };
        const response = await request(server)
            .post('/profile')
            .send(newProfileData);
        console.log('Response:', response.body); 
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ id: '9999' });
    });
        
        it('should get user profile', async () => {
        const response = await request(server).get('/profile');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            name: 'AndrewLoh',
            phone: '89260666158',
            email: 'Kisser@mail.ru',
            });
        });
        
        it('should update user profile with correct data', async () => {
        const newProfileData = { name: 'AndrewNorm', phone: '89260321232', email: 'KisserNet@mail.ru' };
        const response = await request(server)
            .put('/profile')
            .send(newProfileData);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(newProfileData);
        });
        
        it('should delete user profile', async () => {
            const response = await request(server).delete('/profile');
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ message: 'Profile deleted successfully' });
        });
        
        it('should not register a new user profile with invalid data', async () => {
            const invalidProfileData = { name: '', phone: '', email: '' };
            const response = await request(server)
                .post('/profile')
                .send(invalidProfileData);
            expect(response.statusCode).toBe(400); 
            expect(response.body).toEqual({ message: 'Invalid data provided' });
        });
        
        it('should return 404 for non-existent route', async () => {
            const response = await request(server).get('/non-existent-route');
            expect(response.statusCode).toBe(404);
        });
        
        it('should not update user profile with invalid data', async () => {
            const invalidProfileData = { name: '', phone: '', email: '' };
            const response = await request(server)
                .put('/profile')
                .send(invalidProfileData);
            expect(response.statusCode).toBe(400); 
            expect(response.body).toEqual({ message: 'Invalid data provided' });
        });
    });

afterAll(() => {
    server.close();
});