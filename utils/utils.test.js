const utils = require('./utils');
const expect = require('expect');

describe('Util Test Case', () => {

    describe('#add', () => {
        // write test case, defined name use action will be better;
        it('should add two numbers', () => {
            const res = utils.add(1, 2); // 3

            expect(res).toBe(3).toBeA('number');

            // if (res !== 3) {
            //     // use result to compare will be better
            //     throw new Error(`expected res is 3, but got ${res}`);
            // }
        });

        // test async add
        it('should async add two numbers', (done) => {
            utils.asyncAdd(1, 2, (sum) => {
                expect(sum).toBe(3).toBeA('number');
                done();
            })
        });
    });

    describe('#square', () => {
        it('should square the number', () => {
            const res = utils.square(5); // 25

            expect(res).toBe(25, `expected res is 25, but got ${res}`)
                .toBeA('number');

            // if (res !== 25) {
            //     throw new Error(`expected res is 25, but got ${res}`);
            // }
        })

        it('should async square the number', (done) => {
            utils.asyncSquare(5, (double) => {
                expect(double).toBe(25).toBeA('number');
                done();
            })
        })
    });

    describe('#setName', () => {
        it('should set firstName and lastName', () => {
            let user = {
                firstName: 'Yang',
                lastName: 'Hubert',
                age: 25
            };

            expect(user).toInclude({
                firstName: 'Yang',
                lastName: 'Hubert'
            });

            user = utils.setName(user, 'Yang Lerdor');

            expect(user).toInclude({
                firstName: 'Yang',
                lastName: 'Lerdor'
            });

        })
    })


    // it('just test some expect purpose', () => {
    //     expect(10).toBe(10).toBeA('number'); // ok
    //     // expect({ name: 'YUR' }).toBe({ name: 'YUR' }) // error
    //     expect({ name: 'YUR' }).toEqual({ name: 'YUR' }) // ok <<他是把物件轉成字串來比的
    //     expect([1, 3, 5]).toInclude(3); // ok
    //     expect([1, 3, 5]).toExclude(4); // ok
    //     expect({
    //         name: 'YUR',
    //         age: 25
    //     }).toInclude({
    //         name: 'YUR'
    //     })
    // })
});
