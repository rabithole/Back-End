const db = require('../data/db-config');
const trips = require('./trips-model');

describe('Model Methods', () => {
    afterAll(async () => {
        await db.migrate.rollback();
            await db.migrate.latest();
            await db.seed.run();
    })

describe('Profiles model GET Methods', () => {
     describe('Trips- All Profiles', () => {
        it('It should have length 3 ', async () => {
            const data = await trips.find('/');
            
            expect(data).toHaveLength(3);
        })

        it('It should return an object', async () => {
            const data = await trips.findById(1);
            expect(data).toEqual([{
                id: 1,
                title: "7 Long Trail Section Hike",
                description: "Hike from the Appalachian approach trail where the Long Trail southern terminus is for a 7 day adventure",
                is_private: 1,
                is_professional: 0,
                duration: "7 days",
                distance: "70 miles",
                date: "2020-06-01 08:00:00:000",
                trip_type: "Backpacking",
                user_id: 1
            }]);
        })
    })
 })

describe('Trips model POST methods', () => {
    it('It should return the ID of 4', async () => {
        const id = await trips.add({
            "title": "Appalachain trail hike in Pennsylvania",
            "description": "We will pick a random spot on the AT in Pennsylvania and start hiking!",
            "is_private": 1,
            "is_professional": 0,
            "duration": "3 days",
            "distance": "30 miles",
            "date": "2020-06-25 08:00:00:000",
            "trip_type": "Backpacking",
            "user_id": 1
        })

        expect(id).toEqual([4]);
    })
})

describe('Trips model PUT methods', () => {

    it('It should return 1 for successful', async () => {
        const data = await trips.update({
            "title": "Appalachain trail hike in Pennsylvania",
            "description": "We will pick a random spot on the AT in Pennsylvania and start hiking!",
            "is_private": 1,
            "is_professional": 0,
            "duration": "3 days",
            "distance": "30 miles",
            "date": "2020-06-25 08:00:00:000",
            "trip_type": "Backpacking",
            "user_id": 1
        }, 1)

        expect(data).toEqual(1);
    })
})
})