const mongoose= require('mongoose');

const movieSchema= new mongoose.Schema({
    username: String,
    age: Number
});
module.exports = mongoose.model("movies", movieSchema);