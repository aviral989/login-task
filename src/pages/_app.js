import "@/styles/globals.css";
import '../Components/Login/style.css'
import '../Components/Header/style.css'
import '../Components/Signup/style.css'
import '../Components/Dashboard/style.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
