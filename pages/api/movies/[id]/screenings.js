import connectDb from "../../../../DB/connectDb";
import Screenings from "../../../../DB/models/screenings";

// Get all screenings with same ID as the movie id from /api/movie/[id]/screenings.
export default async function handler(req, res) {
    try {
        connectDb().then(async () => {
            const { id } = req.query;
            const screenings = await Screenings.find({ id: id });
            if (screenings.length > 0) {
                res.status(200).json(screenings);
            } // if (screenings) is an empty array, return 404.
            else {
                res.status(404).json({ message: "No screenings found for this movie!" });
            }

        });
    } catch (error) {
        // If error (Database unavailable), return 500.
        res.status(500).json({ message: "Error getting screenings!" });
    }
}