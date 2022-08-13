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
import { MakeReservation as MakeReservation } from "./components/MakeReservation/MakeReservation"
import { Chefs } from "./components/Chefs/Chefs";
import { Banner } from "./components/Main/Banner/Banner";
import { Login } from "./components/Auth/Login/Login";
import { Logout } from "./components/Auth/Logout/Logout";
import { Create } from "./components/Crud/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Crud/Edit/Edit";
import { Delete } from "./components/Crud/Delete/Delete";
import { ReservationsList } from "./components/ReservationsList/ReservationList";
import { ReservationsDetails } from "./components/ReservationsList/ReservationDetails/ReservationDetails";
import { DeleteReservation } from "./components/DeleteReservation/DeleteReservation";


function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Banner />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/meals/details/:mealId" element={<Details />} />
                    <Route path="/chefs" element={<Chefs />} />
                    <Route path="/make-reservation" element={<MakeReservation />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/reservations-list" element={<ReservationsList />} />
                        <Route path="/reservations-list/:resId" element={<ReservationsDetails />} />
                        <Route path="/reservations-list/delete/:resId" element={<DeleteReservation />} />
                        <Route path="/meals/edit/:mealId" element={<Edit />} />
                        <Route path="/meals/delete/:mealId" element={<Delete />} />
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
