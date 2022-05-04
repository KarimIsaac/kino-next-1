import { useState, createContext } from "react";

export const LoginContext = createContext({
  user: null,
  key: null,
  sesID: null,
});

// export function LoginProvider() {
//   const [user, setUser] = useState("test");
// }
