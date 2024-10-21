const db = require('../db')
const { User, Library, Entry, Game } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const JTaubs = await User.findOne({ username: 'JTaubs' })
    const JTaubsLibrary = await Library.findOne({ owner: JTaubs._id })
    const SMBW = await Game.findOne({  title: "Super Mario Bros. Wonder" })
    const PPW = await Game.findOne({ title: "Paw Patrol World" })
    const tinHearts = await Game.findOne({ title: "Tin Hearts" })

    const entries = [
        {
            game: SMBW._id,
            library: JTaubsLibrary._id,
            owned: true,
            played: 'Playing',
        },
        {
            game: PPW._id,
            library: JTaubsLibrary._id,
            owned: false,
        },
        {
            game: tinHearts._id,
            library: JTaubsLibrary._id,
            owned: true,
            played: 'Beat',
            play_time_hrs: 30,
            star_rating: 5,
        },
    ]

    await Entry.insertMany(entries)
    console.log('Created entries')
}


const run = async () => {
  await main()
  db.close()
}

run()