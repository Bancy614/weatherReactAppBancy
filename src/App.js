import SearchEngine from "./SearchEngine";
import "./styles.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather React App </h1>
      <SearchEngine />
      <Footer />
    </div>
  );
}
