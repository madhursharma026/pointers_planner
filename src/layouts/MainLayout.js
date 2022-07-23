import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <div className='main-layout'>
                <div className="fixed-top">
                    <Header />
                </div>
                <div style={{ marginTop: "70px" }}>
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    );
}