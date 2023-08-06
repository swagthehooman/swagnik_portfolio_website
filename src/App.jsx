import Card from "./components/ProfileCard/ProfileCard";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Sections/Portfolio";
import "./app.css";
function App() {
  return (
    <div className="portfolio-main">
      <Card />
      <Portfolio />
      <NavBar />
    </div>
  );
}

export default App;
