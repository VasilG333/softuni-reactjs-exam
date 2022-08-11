import "./App.css"
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { MenuArea } from "./components/MenuArea/MenuArea";
import { Reservations } from "./components/Reservations/Reservations"
import { Chefs } from "./components/Chefs/Chefs";
import { Banner } from "./components/Banner/Banner";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuArea />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
