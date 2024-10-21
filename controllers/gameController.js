const { Game } = require("../models");

const getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games); 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getGameById = async (req, res) => {
    try {
        const { id } = req.params
        const game = await Game.findById(id)
        if (game) {
            return res.json(game)
        }
        return res.status(404).send('This game could not be found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getGameByName = async (req, res) => {
    try {
        const { name } = req.params
        const game = await Game.findOne({ title: name })
        if (game) {
            return res.json(game)
        }
        return res.status(404).send('This game could not be found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getByGenre = async (req, res) => {
    try {
        const { genre } = req.params
        const game = await Game.find({ genre: genre})
        if (game) {
            return res.json(game)
        }
        return res.stauts(404).send('No game of that genre')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getBySystem = async (req, res) => {
    try {
        const { system } = req.params
        const game = await Game.find({ systems: system})
        if (game) {
            return res.json(game)
        }
        return res.stauts(404).send('No games on that system')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getGameByEsrb = async (req, res) => {
    try {
        const { esrb } = req.params
        const game = await Game.find({ esrb: esrb})
        if (game) {
            return res.json(game)
        }
        return res.stauts(404).send('No games of that rating')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const addGame = async (req, res) => {
    try {
        const game = await new Game (req.body)
        await game.save()
        return res.status(201).json({
            game
        })
    }
    catch(e) {
        return res.status(500).json({error: e, message})
    }
}

const updateGame = async (req, res) => {
    try {
        let { id } = req.params;
        let game = await Game.findByIdAndUpdate(id, req.body, { new: true })
        if (game) {
            return res.status(200).json(game)
        }
        throw new Error("could not update game")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteGame = async (req, res) => {
    try {
        let { id } = req.params; 
        let deleted = await Game.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Game deleted')
        }
        throw new Error('game could not be deleted')
    } catch (e) {
        return res.status (500).send(e.message)
    }
}

module.exports = {
    getAllGames,
    getGameById,
    getGameByName,
    getByGenre,
    getBySystem,
    getGameByEsrb,
    addGame,
    updateGame,
    deleteGame
}