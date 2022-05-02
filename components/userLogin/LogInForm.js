import { useState, useRef, useEffect } from "react";
//components
import Input from "./UserInput";

export default function UserLoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    console.log(userName, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        _label={"User Name: "}
        _setState={setUserName}
      />
      <Input
        _minLgth={6}
        _label={"password"}
        _type="password"
        _setState={setPassword}
      />

      <button type="submit">
        login
      </button>
    </form>
  );
}

