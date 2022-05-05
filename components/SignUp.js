import styles from "../styles/signinup.module.css";

export default function SignUp() {

  async function signUp() {
    // When the user clicks the button, check that all fields are filled in, and if so, create a new user. Otherwise, return an alert.
    if (
      document.querySelector("#verify-password").value != document.querySelector("#password").value ||
      document.querySelector("#name").value.length < 3 ||
      document.querySelector("#phone").value.length < 10 ||
      document.querySelector("#email").value.length < 6 ||
      document.querySelector("#password").value.length < 6
    ) {
      return alert("Please fill in all fields correctly! (Name must be at least 3 characters, phone number must be at least 10 characters, email must be at least 6 characters, password must be at least 6 characters)");
    } else {
      const response = await fetch(
        "http://localhost:3000/api/users/newuser",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: document.querySelector("#name").value,
            phone: document.querySelector("#phone").value,
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value,

          }),
        }
      );
      const data = await response.json();
      if (data.message === "User created!") {
        return alert("User created!");
      } else {
        return alert("Error creating user!");
      }
    }
  }

  // Password strength check.
  function passwordStrength() {
    const passwordInput = document.getElementById("password");
    const StrengthIndicator =
      document.querySelector("#strength-indicator");

    if (passwordInput.value.match(/^(?=.*[a-z]).{6,20}$/)) {
      StrengthIndicator.textContent = "Password strength: Weak!";
    }
    if (passwordInput.value.match(/^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      StrengthIndicator.textContent =
        "Password strength: Medium!";
    }
    if (passwordInput.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      StrengthIndicator.textContent = "Password strength: Strong!";
    }
    if (
      passwordInput.value.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/
      )
    ) {
      StrengthIndicator.textContent = "Password strength: Very strong!";
    }
  };

  // Render the signUp component.
  return (
    <div className={styles["main-container-signinup"]}>
      <div className={styles["main-container-signinup-content"]}>
        <input id="name" type="text" placeholder="Your full name" />
        <input id="phone" type="text" placeholder="Phone no." />
        <input id="email" type="email" placeholder="Email address" />
        <input onKeyUp={passwordStrength} id="password" type="password" placeholder="Password" />
        <input id="verify-password" type="password" placeholder="Verify password" />
        <p id="strength-indicator">Make sure to use a strong password.</p>
        <button onClick={signUp}>Sign up</button>
      </div>
    </div>
  );
}
