// - hämta infromation alla inloggingar ifrån databasen
// - kolla så att det stämmer överens med lösenord som skickas in

import Cookies from "cookies";

// ska hämtas ifrån mongodatabasen
const mockLogins = [
  { user: "marcus", password: "testPassword" },
  { user: "fredrik", password: "testPassword" },
  { user: "john", password: "testPassword" },
  { user: "Ammar", password: "testPassword" },
];

export default function loginChecker(req, res) {
  const cookie = new Cookies(req, res);
  const { userName, password } = req.body;
  let found = false;

  mockLogins.forEach((account) => {
    if (account.user === userName && account.password === password) {
      cookie.set(account.user, "true");
      found = true;
    }
  });

  res.status(200).json(found);
}
