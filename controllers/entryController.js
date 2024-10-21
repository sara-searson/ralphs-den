const { User, Library, Entry } = require("../models");

const getAllEntries = async (req, res) => {
    try {
        const entry = await Entry.find();
        res.json(entry); 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getEntryById = async (req, res) => {
    try {
        const { id } = req.params
        const entry = await Entry.findById(id)
        if (entry) {
            return res.json(entry)
        }
        return res.status(404).send('This entry could not be found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getEntryByLibrary = async (req, res) => {
    try {
        const { libId } = req.params
        const entry = await Entry.find({ library: libId })
        if (entry) {
            return res.json(entry)
        }
        return res.status(404).send("This library's entries could not be found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const addEntry = async (req, res) => {
    try {
        const entry = await new Entry (req.body)
        await entry.save()
        return res.status(201).json({
            entry
        })
    }
    catch(e) {
        return res.status(500).json({error: e.message})
    }
}

const updateEntry = async (req, res) => {
    try {
        let { id } = req.params;
        let entry = await Entry.findByIdAndUpdate(id, req.body, { new: true })
        if (entry) {
            return res.status(200).json(entry)
        }
        throw new Error("could not update entry")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteEntry = async (req, res) => {
    try {
        let { id } = req.params; 
        let deleted = await Entry.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Entry deleted')
        }
        throw new Error('Entry could not be deleted')
    } catch (e) {
        return res.status (500).send(e.message)
    }
}

module.exports = {
    getAllEntries, 
    getEntryById,
    getEntryByLibrary,
    addEntry,
    updateEntry,
    deleteEntry
}