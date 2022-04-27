// Route for creating a new user /api/users/newuser.

export default function userHandler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body + req.method);
        res.status(200).send("POST works!");
    } else {
        res.status(405).send("Method not allowed");
    }
}