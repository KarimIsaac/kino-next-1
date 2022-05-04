import "../styles/globals.css";
import { useState, useEffect } from "react";
import { LoginContext } from "../components/contexts/loginContext.js";

import LoginPage from "./login";

function MyApp({ Component, pageProps }) {
  const [userObj, setUserObj ] = useState({ user: "test",
    key: "test",});

  const [msg, setMsg] = useState("hello from _app.js")

  return (
    <LoginContext.Provider value={{ userObj, setUserObj }}>
      <Component {...pageProps} />;
    </LoginContext.Provider>
  );
}

export default MyApp;
