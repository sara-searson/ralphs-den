const mongoose = require("mongoose");
const userSchema = require("./user");
const librarySchema = require("./library");
const entrySchema = require("./entry")
const gameSchema = require("./game")

const User = mongoose.model("User", userSchema);
const Library = mongoose.model("Library", librarySchema);
const Entry = mongoose.model("Entry", entrySchema)
const Game = mongoose.model("Game", gameSchema)

module.exports = {
  User,
  Library,
  Entry,
  Game
};