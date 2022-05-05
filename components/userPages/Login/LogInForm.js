import { useState, useContext } from "react";
import { LoginContext } from "../../contexts/loginContext.js";

import Input from "./UserInput";

export default function UserLoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUserObj } = useContext(LoginContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { userName, password };
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const Obj = await res.json();
    setUserObj({ ...Obj, logedIn: true });
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
