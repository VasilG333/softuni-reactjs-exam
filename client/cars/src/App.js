import "./App.css"
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { About } from "./components/About/About";
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
          <Route path="/" element={<></>} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:meals" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
