import "./App.css"
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";

import { PrivateRoute } from "./components/Common/PrivateRoute";
import { AuthProvider } from './contexts/AuthContext';

import { Footer } from "./components/Main/Footer/Footer";
import { Header } from "./components/Main/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { About } from "./components/About/About";
import { Reservations } from "./components/Reservations/Reservations"
import { Chefs } from "./components/Chefs/Chefs";
import { Banner } from "./components/Main/Banner/Banner";
import { Login } from "./components/Auth/Login/Login";
import { Logout } from "./components/Auth/Logout/Logout";
import { Create } from "./components/Crud/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Crud/Edit/Edit";
import { Delete } from "./components/Crud/Delete/Delete";


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
                    <Route path="/meals/details/:mealId" element={<Details />}/>
                    <Route path="/chefs" element={<Chefs />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/meals/edit/:mealId" element={<Edit />}/>
                        <Route path="/meals/delete/:mealId" element={<Delete />}/>
                        <Route path="/meals/addmeal" element={<Create />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
