import { useState, useRef, useEffect } from "react";
//components
import Input from "./UserInput";

export default function UserLoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
      alert("you are signed in");
    } else {
      alert("check username or password");
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
