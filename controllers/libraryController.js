const { User, Library } = require("../models");

const getAllLibraries = async (req, res) => {
    try {
        const libraries = await Library.find();
        res.json(libraries); 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getLibraryById = async (req, res) => {
    try {
        const { id } = req.params
        const library = await Library.findById(id)
        if (library) {
            return res.json(library)
        }
        return res.status(404).send('This library cannot be found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createLibrary = async (req, res) => {
    try {
        const library = await new Library (req.body)
        await library.save()
        return res.status(201).json({
            library
        })
    }
    catch(e) {
        return res.status(500).json({error: e, message})
    }
}

const updateLibrary = async (req, res) => {
    try {
        const { id } = req.params
        const library = await Library.findByIdAndUpdate(id, req.body, { new: true })
        if (library) {
            return res.stauts(201).json(library)
        }
        throw new Error("library cannot be found")
    } catch (e) {
        return res.status(500).send(e.message
        )
    }
}

const deleteLibrary = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Library.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Library deleted')
        }
        throw new Error('Library not found')
    }
    catch (e) {
        return res.status(500).send(e.messageå)
    }
}

module.exports = {
    getAllLibraries, 
    getLibraryById, 
    createLibrary,
    updateLibrary, 
    deleteLibrary
}