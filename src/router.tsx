import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/Home";
import PageOSLicense from "./pages/OSLicense";
import PagePortfolio from "./pages/Portfolio";

export default function HomeRouter() {
    return (
        <Routes>
            <Route index element={<PageHome />} />
            <Route path="opensource-license" element={<PageOSLicense />} />
            <Route path="portfolio" element={<PagePortfolio />} />
        </Routes>
    )
}