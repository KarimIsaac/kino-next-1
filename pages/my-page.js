import { useContext } from "react";
import { LoginContext } from "../components/contexts/loginContext";

export default function MyPage() {
  const { userObj } = useContext(LoginContext);

  return (
    <>
      <p>
        {userObj.user}
      </p>
    </>
  );
}
