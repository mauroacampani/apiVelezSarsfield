import { Navbar } from '../components/navigations/Navbar';
import { Footer } from '../components/navigations/Footer';
import { Header } from '../components/navigations/Header';

const Layout=(props)=>{

    return(
        <>
            <Header />
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;