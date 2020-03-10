const db = require('../data/db-config');
const profiles = require('./profiles-model');

describe('Profiles Methods', () => {
    afterAll(async () => {
        await db.migrate.rollback();
            await db.migrate.latest();
            await db.seed.run();
        })


 describe('Profiles model GET Methods', () => {
     describe('Profiles- All Profiles', () => {
        it('It should have length 3 ', async () => {
            const data = await profiles.find('/');
            
            expect(data).toHaveLength(3);
        })

        it('It should return an object', async () => {
            const data = await profiles.findById(1);
            expect(data).toEqual({
                id: 1,
                user_id: 1,
                title: 'Thru-hiking Expert',
                tagline: 'I am happiest in the wilderness',
                guide_specialty: 'Backpacking',
                age: 43,
                years_experience: 6,
                avatar_url: null,
                public_url: '/public/1'
            });
        })
    })
 })

describe('Profiles model POST methods', () => {
    it('It should return the ID of 4', async () => {
        const id = await profiles.add({
            "user_id": 2,
            "title": "Thru-hiking Obsessionist",
            "tagline": "I am in love with the woods",
            "guide_specialty": "All things wilderness",
            "age": 48,
            "years_experience": 25,
            "avatar_url": null,
            "public_url": "https://guidr1.herokuapp.com/api/profiles/public/6"
        })

        expect(id).toEqual([4]);

    })
})

describe('Profiles model PUT methods', () => {

    it('It should return 1 for successful', async () => {
        const data = await profiles.update({
            "user_id": 2,
            "title": "Thru-hiking Obsessionist",
            "tagline": "I am in love with the woods",
            "guide_specialty": "All things wilderness",
            "age": 48,
            "years_experience": 25,
            "avatar_url": null,
            "public_url": "https://guidr1.herokuapp.com/api/profiles/public/2"
        }, 2)

        expect(data).toEqual(1);
    })
})
})