const expect = require('expect');
const rewire = require('rewire');
const app = rewire('./app.js'); // 複寫app, copy一份出來

describe('App', () => {
    const db = {
        saveUser: expect.createSpy()
    }
    const email = 'yur@example.com';
    const password = '123abc';
    // 將db這個字串定義為db這個物件, 就是將db引用到app裏
    app.__set__('db', db);

    it('should signup with email and password', () => {
        const spy = {
            signUp: expect.createSpy()
        }
        spy.signUp(email, password);
        expect(spy.signUp).toHaveBeenCalled().toHaveBeenCalledWith(email, password);
    });

    it('should db saveUser with user object', () => {
        app.signUp(email, password);
        expect(db.saveUser).toHaveBeenCalled().toHaveBeenCalledWith({ email, password });
    });
});