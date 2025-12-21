import { Route, Routes as RoutesComponent } from "react-router-dom";
import OfficerLayout from "../layout/officer-section/OfficerLayout";
import MainPage from "../layout/main-layout/MainPage";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import AdminLayout from "../layout/admin-layout/AdminLayout";

export default function Routes() {
    return(
        <>
        <Navigation />

        <main>
            <RoutesComponent>
                <Route path="/" element={<MainPage />} />
                <Route path="/Officers" element={<OfficerLayout />} />
                <Route path="/Admin" element={<AdminLayout />} />
            </RoutesComponent>
        </main>

        <Footer/>
        </>
    );
}