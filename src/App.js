import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Firstsection from "./components/firstsection";
import Secondsection from "./components/secondsection";
import Certificatesection from "./components/certificatesection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstsection />
      <Secondsection />
      <Certificatesection />
      <Footer />
    </div>
  );
}

export default App;
