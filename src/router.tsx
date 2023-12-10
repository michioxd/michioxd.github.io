import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/Home";
import PageOSLicense from "./pages/OSLicense";

export default function HomeRouter() {
    return (
        <Routes>
            <Route index element={<PageHome />} />
            <Route path="opensource-license" element={<PageOSLicense />} />
        </Routes>
    )
}