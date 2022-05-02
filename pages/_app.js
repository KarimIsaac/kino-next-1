import "../styles/globals.css";
import { LoginProvider } from "../components/contexts/loginContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Component {...pageProps} />;
    </LoginProvider>
  );
}

export default MyApp;
