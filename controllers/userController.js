const { User } = require("../models");

const gettAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('That user cannot be found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUserByName = async (req, res) => {
    try {
        const { name } = req.params
        const user = await User.findOne( { username: name } )
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('That user cannot be found. Try again.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({ email: email })
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('That user cannot be found. Try another email.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User (req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    }
    catch(e) {
        return res.status(500).json({error: e, message})
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params
        let user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error("This user cannot be updated. Please check your spelling")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Account deleted')
        }
        throw new Error('User cannot be found')
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    gettAllUsers,
    getUser,
    getUserByName,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}