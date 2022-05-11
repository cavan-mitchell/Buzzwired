import Footer from "../components/Footer";
// import Header from "../components/Header";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Body from "../components/Body";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <div>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
