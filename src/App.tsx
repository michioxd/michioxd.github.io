import { Container } from "@mui/material"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeRouter from "./router"

function App() {
    return (
        <>
            <Header />
            <Container sx={{ mt: "calc(66px + 1rem)", mb: 2 }}>
                <HomeRouter />
            </Container>
            <Footer />
        </>
    )
}

export default App
