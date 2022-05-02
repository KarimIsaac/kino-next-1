import { useState, useContext } from "react";
import { LoginContext } from "../contexts/loginContext.js";
//components
import Input from "./UserInput";

export default function UserLoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login, setLogin } = useContext(LoginContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { userName, password };
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const status = await res.json();

    if (status) {
      setLogin(status);
    } 
    else {
      setLogin(status);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input _label={"User Name: "} _setState={setUserName} />
      <Input
        _minLgth={6}
        _label={"password"}
        _type="password"
        _setState={setPassword}
      />

      <button type="submit">login</button>
    </form>
  );
}
