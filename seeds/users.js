const db = require('../db')
const { User } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const users = [
        {
            name: 'Sara',
            username: 'ScoutJean',
            password: 'GenA123',
            email: 'sara@email.com',
            rating_preference: 'M'
        },
        {
            name: 'Jeremy',
            username: 'JTaubs',
            password: 'toTheMax',
            email: 'jeremy@email.com',
            rating_preference: 'E'
        },
        {
            name: 'Aisha',
            username: 'CannonEvent',
            password: 'thouShallPass',
            email: 'aisha@email.com',
            rating_preference: 'T'
        },
        {
            name: 'Brittany',
            username: 'MoraTellYa',
            password: 'coolConcert',
            email: 'brittany@email.com',
        },
        {
            name: 'Ashley',
            username: 'SandsOfTime',
            password: 'hourGlass',
            email: 'ashley@email.com',
            rating_preference: 'E10'
        },
        {
            name: 'Tom',
            username: 'coolsrud',
            password: 'zoomRoom',
            email: 'tom@email.com',
            rating_preference: 'M'
        },
    
    ]



    await User.insertMany(users)
    console.log('Created users')
}

const run = async () => {
  await main()
  db.close()
}

run()