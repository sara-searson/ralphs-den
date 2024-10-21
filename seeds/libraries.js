const db = require('../db')
const { User, Library } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const ScoutJean = await User.findOne({ username: 'ScoutJean' })
    const JTaubs = await User.findOne({ username: 'JTaubs' })
    const CannonEvent = await User.findOne({ username: 'CannonEvent' })
    const MoraTellYa = await User.findOne ({ username: 'MoraTellYa' })
    const SandsOfTime = await User.findOne ({ username: 'SandOfTime' })
    const coolsrud = await User.findOne({ username: 'coolsrud' })

    const libraries = [
        {
            name: 'Library',
            owner: ScoutJean._id,
            total_games: 0
        },
        {
            name: 'Library',
            owner: JTaubs._id,
            total_games: 0
        },
        {
            name: 'Library',
            owner: CannonEvent._id,
            total_games: 0
        },
        {
            name: 'Library',
            owner: MoraTellYa._id,
            total_games: 0
        },
        {
            name: 'Library',
            owner: SandsOfTime._id,
            total_games: 0
        },
        {
            name: 'Library',
            owner: coolsrud._id,
            total_games: 0
        },
    ]

    await Library.insertMany(libraries)
    console.log('Created libraries')
}


const run = async () => {
  await main()
  db.close()
}

run()