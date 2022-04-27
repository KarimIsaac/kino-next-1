// Route for creating a new user /api/users/newuser.

export default function userHandler(req, res) {
    if (req.method === "POST") {
        if (
            req.body.name.length > 3 &&
            req.body.phone.length > 10 &&
            req.body.email.length > 6 &&
            req.body.password.length > 6
        ) {
            // TODO: Create a new user and send to database. Right now it only sends a message.
            res.status(200).send({message: "User created!"});
        } else {
            res.status(500)}
    } else {
        res.status(500)}
}