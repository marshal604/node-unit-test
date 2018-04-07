const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server Test Case', () => {

    describe(('#GET /'), () => {
        it('should response the Hello World!', (done) => {
            request(app)
                .get('/')
                .expect(200)
                // .expect('Hello World!')
                .expect((res) => {
                    expect(res.text).toBe('Hello World!')
                })
                .end(done);
        });
    })
    describe(('#GET /user'), () => {
        it('should response the user data , name and age', (done) => {
            request(app)
                .get('/user')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'YUR',
                        age: 25
                    });
                })
                .end(done);
        })
    })
});


