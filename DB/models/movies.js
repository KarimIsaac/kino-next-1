import { Schema, model, models } from "mongoose";

export const moviesSchema = new Schema({
  id: Number,
  title: String,
  date: String,
  img: String,
  details: {
    about: String,
    director: String,
    writers: String,
    stars: String,
    rating: Number,
  },
});

const Movies = models.Movies || model("Movies", moviesSchema);
export default Movies;
