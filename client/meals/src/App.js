import "./App.css"
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AuthProvider } from './contexts/AuthContext';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { About } from "./components/About/About";
import { Reservations } from "./components/Reservations/Reservations"
import { Chefs } from "./components/Chefs/Chefs";
import { Banner } from "./components/Banner/Banner";
import { Login } from "./components/Auth/Login";
import { PrivateRoute } from "./components/Common/PrivateRoute";
import { Logout } from "./components/Logout/Logout";
import { AddMeal } from "./components/Menu/Meals/AddMeal/AddMeal";


function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Banner />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/chefs" element={<Chefs />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/addmeal" element={<AddMeal />}/>
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
