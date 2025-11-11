import "@/styles/globals.css";
import Navbar from "./component/Navbar";
import Footer from "./Blog/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}