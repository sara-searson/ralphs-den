const db = require('../db')
const { Game } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const games = [
        {
            title: "The Legend of Zelda: Breath of the Wild",
            esrb: "E10+",
            genre: ["Action", "Adventure", "Open world"],
            released: "2017-03-03",
            systems: ["Nintendo Switch", "Wii U"],
            avg_rating: [9.8, 9.7, 10],
            libraries_added: 1200000,
            est_play_time_hrs: 60,
            approved: true
        },
        {
            title: "The Witcher 3: Wild Hunt",
            esrb: "M",
            genre: ["Action", "RPG", "Open world"],
            released: "2015-05-19",
            systems: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
            avg_rating: [9.5, 9.6, 9.4],
            libraries_added: 1100000,
            est_play_time_hrs: 100,
            approved: true
        },
        {
            title: "Hades",
            esrb: "T",
            genre: ["Roguelike", "Action"],
            released: "2020-09-17",
            systems: ["PC", "Nintendo Switch", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
            avg_rating: [9.0, 8.9, 9.2],
            libraries_added: 800000,
            est_play_time_hrs: 40,
            approved: true
        },
        {
            title: "Red Dead Redemption 2",
            esrb: "M",
            genre: ["Action-adventure", "Open world"],
            released: "2018-10-26",
            systems: ["PC", "PS4", "Xbox One", "Stadia"],
            avg_rating: [9.7, 9.8, 9.6],
            libraries_added: 900000,
            est_play_time_hrs: 80,
            approved: true
        },
        {
            title: "Stardew Valley",
            esrb: "E10+",
            genre: ["Simulation", "RPG", "Cozy"],
            released: "2016-02-26",
            systems: ["PC", "PS4", "Xbox One", "Nintendo Switch", "Mobile"],
            avg_rating: [9.3, 9.4, 9.1],
            libraries_added: 750000,
            est_play_time_hrs: 50,
            approved: true
        },
        {
            title: "Among Us",
            esrb: "E10+",
            genre: ["Party", "Social Deduction"],
            released: "2018-06-15",
            systems: ["PC", "Mobile", "Nintendo Switch", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
            avg_rating: [8.2, 8.5, 8.0],
            libraries_added: 600000,
            est_play_time_hrs: 10,
            approved: true
        },
        {
            title: "Dark Souls III",
            esrb: "M",
            genre: ["Action RPG", "Dark Fantasy"],
            released: "2016-03-24",
            systems: ["PC", "PS4", "Xbox One"],
            avg_rating: [9.0, 8.8, 9.1],
            libraries_added: 700000,
            est_play_time_hrs: 70,
            approved: true
        },
        {
            title: "Minecraft",
            esrb: "E10+",
            genre: ["Sandbox", "Survival", "Cozy"],
            released: "2011-11-18",
            systems: ["PC", "Mobile", "PS4", "Xbox One", "Nintendo Switch", "PS5", "Xbox Series X/S"],
            avg_rating: [9.5, 9.7, 9.6],
            libraries_added: 3000000,
            est_play_time_hrs: 200,
            approved: true
        },
        {
            title: "Celeste",
            esrb: "E10+",
            genre: ["Platformer", "Indie"],
            released: "2018-01-25",
            systems: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
            avg_rating: [9.2, 9.4, 9.3],
            libraries_added: 500000,
            est_play_time_hrs: 30,
            approved: true
        },
        {
            title: "Overwatch",
            esrb: "T",
            genre: ["First-Person Shooter", "Multiplayer"],
            released: "2016-05-24",
            systems: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
            avg_rating: [8.8, 9.0, 8.9],
            libraries_added: 850000,
            est_play_time_hrs: 60,
            approved: true
        },
        {
            title: "Super Mario Bros. Wonder",
            esrb: "E",
            genre: ["Platformer", "Multiplayer"],
            released: "2023-10-20",
            systems: ["Nintendo Switch"],
            avg_rating: [0],
            libraries_added: 1,
            est_play_time_hrs: 10,
            approved: true
        },
        {
            title: "Paw Patrol World",
            esrb: "E",
            genre: ["Action", "Adventure"],
            released: "2023-09-29",
            systems: ["Xbox One", "Nintendo Switch"],
            avg_rating: [0],
            libraries_added: 1,
            est_play_time_hrs: 4,
            approved: true
        },
        {
            title: "Tin Hearts",
            esrb: "E",
            genre: ["Indie", "Adventure", "Puzzle"],
            released: "2023-10-10",
            systems: ["Nintendo Switch"],
            avg_rating: [0],
            libraries_added: 1,
            est_play_time_hrs: 16,
            approved: true
        }
    ]

    await Game.insertMany(games)
    console.log('Created games')
}

const run = async () => {
  await main()
  db.close()
}

run()