import Best from "./component/Best";
import Clients from "./component/Clients";
import Contact from "./component/Contact";
import Loader from "./component/Loader";
import Header from "./Navbar/Header";
import Footer from "./Navbar/Footer";
export default function Home(){
    return(
        <>
        <Loader/>
        <Header/>
        <Best/>
        <Contact/>
        <Clients />
        <Footer />
        </>
    )
}