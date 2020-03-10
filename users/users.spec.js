const db = require('../data/db-config');
const users = require('./users-model');

describe('Users Methods', () => {
    afterAll(async () => {
        await db.migrate.rollback();
            await db.migrate.latest();
            await db.seed.run();
        })


 describe('Users model GET Methods', () => {
     describe('Users- All Users', () => {
        it('It should have length 5 ', async () => {
            const data = await users.getUsers();
            
            expect(data).toHaveLength(5);
        })

        it('It should return an object', async () => {
            const data = await users.findById(1);
             expect(data.id).toEqual(1);
        })
    })
 })
})