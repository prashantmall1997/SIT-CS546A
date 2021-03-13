const movies = require("./data/movies");
const connection = require("./config/mongoConnection");

async function main() {
  var movie1Id;
  var movie2Id;

  try {
    var movie = await movies.create(
      "Bill and Ted Face the Music",
      "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
      "PG-13",
      "1hr 31min",
      "Comedy",
      ["Keanu Reeves", "Alex Winter"],
      { director: "Dean Parisot", yearReleased: 2025 }
    );
    movie._id = movie._id.toString();
    movie1Id = movie._id;
    console.log(movie);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movie = await movies.create(
      "Patrick and Ted Face the Music",
      "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
      "PG-13",
      "1hr 31min",
      "Comedy",
      ["Keanu Reeves", "Alex Winter"],
      { director: "Dean Parisot", yearReleased: 2025 }
    );
    movie._id = movie._id.toString();
    movie2Id = movie._id;
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movieArray = await movies.getAll();
    movieArray = movieArray.map((movieDetails) => ({
      _id: movieDetails._id.toString(),
      title: movieDetails.title,
      plot: movieDetails.plot,
      rating: movieDetails.rating,
      runtime: movieDetails.runtime,
      genre: movieDetails.genre,
      cast: movieDetails.cast,
      info: movieDetails.info,
    }));
    console.log(movieArray);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movie = await movies.create(
      "Prashant Mall",
      "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
      "PG-13",
      "1hr 31min",
      "Comedy",
      ["Keanu Reeves", "Alex Winter"],
      { director: "Dean Parisot", yearReleased: 2025 }
    );
    movie._id = movie._id.toString();
    console.log(movie);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movie = await movies.rename(movie1Id, "RENAMED");
    movie._id = movie._id.toString();
    console.log(movie);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var removedMovieTitle = await movies.remove(movie2Id);
    console.log(`${removedMovieTitle} has been successfully deleted.`);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movieArray = await movies.getAll();
    movieArray = movieArray.map((movieDetails) => ({
      _id: movieDetails._id.toString(),
      title: movieDetails.title,
      plot: movieDetails.plot,
      rating: movieDetails.rating,
      runtime: movieDetails.runtime,
      genre: movieDetails.genre,
      cast: movieDetails.cast,
      info: movieDetails.info,
    }));
    console.log(movieArray);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movie = await movies.create(
      "",
      "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
      "PG-13",
      "1hr 31min",
      "Comedy",
      ["Keanu Reeves", "Alex Winter"],
      { director: "Dean Parisot", yearReleased: 2025 }
    );
    movie._id = movie._id.toString();
    movie1Id = movie._id;
    console.log(movie);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var removedMovieTitle = await movies.remove(movie2Id);
    console.log(`${removedMovieTitle} has been successfully deleted.`);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movie = await movies.rename(movie2Id, "RENAMED");
    movie._id = movie._id.toString();
    console.log(movie);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movie = await movies.rename("INVALID", "RENAMED");
    movie._id = movie._id.toString();
    console.log(movie);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  try {
    var movie = await movies.get(movie2Id);
    console.log(movie);
  } catch (e) {
    console.log("Got an error:-");
    console.log(e);
  }

  const db = await connection();
  await db.serverConfig.close();
}

main();
