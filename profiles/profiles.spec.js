const request = require('supertest');
const profilesModel = require('./profiles-model');
const profiles = require('./profiles-router');

describe('profiles router', () => {
    // GET Router method testing
    describe('GET / - All profiles', () => {
        it('should return 200 ok', async() => {
            const res = await request(profiles).get('/:1');
            expect(res.status).toBe(200); 
        })
    })
    // describe('insert', () => {
    //     it('should insert the provided hobbits into the db', async () => {
    //         await Hobbits.insert({name:'gaffer'});
    //         await Hobbits.insert({name:'Sam'});

    //         const hobbits = await db('hobbits');
    //         expect(hobbits).toHaveLength(2);
    //     })

    //     it('should return the inserted hobbit', async () => {
    //         let hobbit = await Hobbits.insert({name: "gaffer"});
    //         expect(hobbit.name).toBe('gaffer');

    //          hobbit = await Hobbits.insert({name: "sam"});
    //         expect(hobbit.name).toBe('sam');
    //     })
    // })
})