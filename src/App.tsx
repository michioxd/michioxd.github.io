import cls from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageHome from "./pages/Home";

function App() {

    return (
        <div className={cls.Layout}>
            <Header />
            <div className={cls.Container}>
                <PageHome />
            </div>
            <Footer />
        </div>
    )
}

export default App
