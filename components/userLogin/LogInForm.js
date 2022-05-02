import { useState, useRef, useEffect } from "react";
//components
import Input from "./UserInput";

export default function UserLoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameEle = useRef();
  const passwordEle = useRef();
  const btnEle = useRef();

  useEffect(() => {
    checkInput(userName, userNameEle);
  }, [userName]);

  useEffect(() => {
    checkInput(password, passwordEle);
  }, [password]);

  useEffect(() => {
    if (userName.length > 0 && password.length > 0) {
      btnEle.current.disabled = false;
    } else {
      btnEle.current.disabled = true;
    }
  });

  function handleSubmit(e) {
    console.log(userName, password);
  }

  return (
    <div>
      <Input
        _label={"User Name: "}
        _ref={userNameEle}
        _setState={setUserName}
      />
      <Input
        _label={"password"}
        _type="password"
        _ref={passwordEle}
        _setState={setPassword}
      />

      <button ref={btnEle} onClick={(e) => handleSubmit(e)} type="submit">
        login
      </button>
    </div>
  );
}

function checkInput(x, elem, reqLth = 0) {
  if (x.length <= reqLth) {
    elem.current.style.border = "2px solid red";
  } else {
    elem.current.style.border = "1px solid black";
  }
}
