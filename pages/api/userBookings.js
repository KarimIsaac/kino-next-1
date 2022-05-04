import Cookies from "cookies";
import { mockLogins } from "./login.js";

export default function loginChecker(req, res) {
  const cookie = new Cookies(req, res);
  const key = cookie.get("_session");
  console.log(req.body.key, key)
  if (key === req.body.key) {

    let bookings = [];
    mockLogins.forEach(user => {
      console.log(user.user, req.body.user)
      if(user.user === req.body.user){
        res.status(200).json(user.bookings);
      }
    })
  } 
}
