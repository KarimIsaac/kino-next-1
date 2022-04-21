import { Schema, model, models } from "mongoose";

const screeningsSchema = new Schema({
    id: Number,
    date: String,
    time: String,
    row1: {
        seat1: String,
        seat2: String,
        seat3: String,
        seat4: String,
    },
    row2: {
        seat1: String,
        seat2: String,
        seat3: String,
        seat4: String,
    },
    row3: {
        seat1: String,
        seat2: String,
        seat3: String,
        seat4: String
    }
});

const Screenings = models.Screenings || model("screenings", screeningsSchema,);
export default Screenings;