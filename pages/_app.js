// import '@/styles/globals.css'
import "../components/Navbar/navbar.css"
import '../components/Home/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "../components/Navbar/Navbar.jsx";
export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar />
  <Component {...pageProps} />
  </>)
}
