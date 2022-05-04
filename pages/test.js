import { useState, useContext } from "react";
import Link from "next/link";

import { LoginContext } from "../components/contexts/loginContext";
export default function test() {
  const { userObj } = useContext(LoginContext);
  const [bookings, setBookings] = useState({});

  async function getBookings() {
    console.log(userObj.key)
    const data = { key: userObj.key, user: userObj.user};
    const res = await fetch("http://localhost:3000/api/userBookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setBookings(await res.json());
  }
  console.log(bookings)

  return (
    <>
      <h1 onClick={() => getBookings()}> {userObj.user} </h1>
      <Link href="/login">
        <a> login </a>
      </Link>
    </>
  );
}
