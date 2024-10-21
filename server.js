const express = require("express");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const userController = require("./controllers/userController");
const libraryController = require("./controllers/libraryController");
const gameController = require("./controllers/gameController");
const entryController = require("./controllers/entryController")
const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => res.send("This is our landing page!"));

app.get("/users", userController.gettAllUsers)

app.get("/users/:id", userController.getUser)

app.get("/users/name/:name", userController.getUserByName)

app.get("/users/email/:email", userController.getUserByEmail)

app.post("/users", userController.createUser)

app.put('/users/:id', userController.updateUser)

app.delete('/users/:id', userController.deleteUser)

app.get("/libraries", libraryController.getAllLibraries)

app.get("/libraries/:id", libraryController.getLibraryById)

app.post ("/libraries", libraryController.createLibrary)

app.put("/libraries/:id", libraryController.updateLibrary)

app.delete("/libraries/:id", libraryController.deleteLibrary)

app.get("/games", gameController.getAllGames)

app.get("/games/:id", gameController.getGameById)

app.get("/games/title/:name", gameController.getGameByName)

app.get("/games/genre/:genre", gameController.getByGenre)

app.get("/games/system/:system", gameController.getBySystem)

app.get("/games/rating/:esrb", gameController.getGameByEsrb)

app.post("/games", gameController.addGame)

app.put("/games/:id", gameController.updateGame)

app.delete("/games/:id", gameController.deleteGame)

app.get("/entries", entryController.getAllEntries)

app.get("/entries/:id", entryController.getEntryById)

app.get("/entries/library/:libId", entryController.getEntryByLibrary)

app.post("/entries", entryController.addEntry)

app.put("/entries/:id", entryController.updateEntry)

app.delete("/entries/:id", entryController.deleteEntry)