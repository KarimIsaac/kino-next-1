// - hämta infromation alla inloggingar ifrån databasen
// - kolla så att det stämmer överens med lösenord som skickas in

import Cookies from "cookies";
import { v4 as uuid_V4 } from "uuid";

// ska hämtas ifrån mongodatabasen
export const mockLogins = [
  { user: "marcus", password: "testPassword" },
  { user: "fredrik", password: "testPassword" },
  {
    user: "john",
    password: "testPassword",
    bookings: [
      { title: "avengers" },
      { title: "avengers 2" },
      { title: "avengers 3" },
    ],
  },
  { user: "Ammar", password: "testPassword" },
];

export default function loginChecker(req, res) {
  const cookie = new Cookies(req, res);
  const { userName, password } = req.body;
  let infromation;

  mockLogins.forEach((account) => {
    if (account.user === userName && account.password === password) {
      const sessionValue = uuid_V4();
      infromation = {
        user: account.user,
        key: sessionValue,
      };

      cookie.set("_session", sessionValue);
    }
  });

  res.status(200).json(infromation);
}
