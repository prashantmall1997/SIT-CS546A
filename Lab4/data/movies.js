const mongoCollections = require("./../config/mongoCollections");
const movieCollection = mongoCollections.movies;
var ObjectID = require("mongodb").ObjectID;

module.exports = {
  async create(title, plot, rating, runtime, genre, cast, info) {
    if (
      title === undefined ||
      plot === undefined ||
      rating === undefined ||
      runtime === undefined ||
      genre === undefined ||
      cast === undefined ||
      info === undefined
    ) {
      throw "All fields are compulsory and should have valid values.";
    }

    if (
      typeof title != "string" ||
      typeof plot != "string" ||
      typeof rating != "string" ||
      typeof runtime != "string" ||
      typeof genre != "string"
    ) {
      throw "Title, Plot, Rating, Runtime & Genre parameters must be provided in String format.";
    }

    if (
      title.trim() === "" ||
      plot.trim() === "" ||
      rating.trim() === "" ||
      runtime.trim() === "" ||
      genre.trim() === ""
    ) {
      throw "Title, Plot, Rating, Runtime & Genre parameters cannot be empty strings or just spaces.";
    }

    if (!Array.isArray(cast)) {
      console.log(typeof cast);
      throw "Cast parameter has to be provided in Array format.";
    }

    var stringCast = false;
    for (var castElements = 0; castElements < cast.length; castElements++) {
      if (typeof cast[castElements] === "string") {
        if (cast[castElements].trim() != "") {
          stringCast = true;
        }
      }
    }
    if (!stringCast) {
      throw "At least one element of Cast should be a non empty String format.";
    }

    if (typeof info != "object") {
      throw "Info parameter should be provided as an Object.";
    }
    if (Array.isArray(info)) {
      throw "Info parameter should be provided as an Object{}.";
    }

    if (
      info.director === undefined ||
      typeof info.director != "string" ||
      info.director.trim() === ""
    ) {
      throw "Director information in Info parameter must be provided and should be a non empty String format input.";
    }

    if (
      info.yearReleased === undefined ||
      typeof info.yearReleased != "number" ||
      info.yearReleased.toString().length != 4
    ) {
      throw "Year released information in Info parameter must be provided as a 4 digit Number format.";
    }

    var today = new Date();
    if (
      info.yearReleased < 1930 ||
      info.yearReleased > today.getFullYear() + 5
    ) {
      throw "Release year must not be less than 1930 or greater than 5 years from current year.";
    }

    const movies = await movieCollection();

    let newMovie = {
      _id: null,
      title: title,
      plot: plot,
      rating: rating,
      runtime: runtime,
      genre: genre,
      cast: cast,
      info: info,
    };

    const insertMovie = await movies.insertOne(newMovie);
    if (insertMovie.insertedCount === 0) throw "Could not add movie.";

    return newMovie;
  },

  async getAll() {
    const movies = await movieCollection();
    const moviesArray = await movies.find().toArray();

    return moviesArray;
  },

  async get(id) {
    if (id === undefined) {
      throw "Must pass ID parameter.";
    }

    if (typeof id != "string") {
      throw "Passed input ID must be of String format.";
    }

    if (!ObjectID.isValid(id)) {
      throw "Passed input ID must be a valid ObjectID.";
    }

    try {
      ObjectID(id);
    } catch (e) {
      throw "Passed input ID must be a valid ObjectID.";
    }

    id = ObjectID(id);
    const movies = await movieCollection();
    const movie = await movies.findOne({ _id: id });
    if (movie === null) throw "No movie exist in database with that ID.";

    return movie;
  },

  async remove(id) {
    if (id === undefined) {
      throw "Must pass ID parameter.";
    }

    if (typeof id != "string") {
      throw "Passed input ID must be of String format.";
    }

    if (!ObjectID.isValid(id)) {
      throw "Passed input ID must be a valid ObjectID.";
    }

    try {
      ObjectID(id);
    } catch (e) {
      throw "Passed input ID must be a valid ObjectID.";
    }

    id = ObjectID(id);
    const movies = await movieCollection();
    try {
      (await movies.findOne({ _id: id })).title;
    } catch (e) {
      throw "No movie exist in database with that ID.";
    }
    const movieTitle = (await movies.findOne({ _id: id })).title;

    const removeInfo = await movies.findOneAndDelete({ _id: id });

    if (removeInfo.deletedCount === 0) {
      throw `Could not detele with id of ${id}.`;
    }

    return movieTitle;
  },

  async rename(id, newTitle) {
    if (id === undefined) {
      throw "Must pass ID parameter.";
    }

    if (typeof id != "string") {
      throw "Passed input ID must be of String format.";
    }

    if (!ObjectID.isValid(id)) {
      throw "Passed input ID must be a valid ObjectID.";
    }

    try {
      ObjectID(id);
    } catch (e) {
      throw "Passed input ID must be a valid ObjectID.";
    }

    if (newTitle === undefined) {
      throw "Must pass newTitle parameter.";
    }

    if (typeof newTitle != "string") {
      throw "Passed input newTitle must be of String format.";
    }

    if (newTitle.trim() === "") {
      throw "Passed input newTitle must be of non-empty String format.";
    }

    id = ObjectID(id);

    const movies = await movieCollection();

    try {
      (await movies.findOne({ _id: id })).title;
    } catch (e) {
      throw "No movie exist in database with that ID.";
    }

    const updateInfo = await movies.updateOne(
      { _id: id },
      {
        $set: {
          title: newTitle,
        },
      }
    );

    if (updateInfo.modifiedCount === 0) {
      throw `Could not update successfully.`;
    }

    const movie = await movies.findOne({ _id: id });
    return movie;
  },
};
