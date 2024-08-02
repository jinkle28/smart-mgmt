import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles/App.css';
import Loader from './components/Loader';
import Mission from './pages/Mission';
import TopBar from './components/TopBar';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? <Loader /> :
                <>
                    {/* <header>
                        <div className="logo">Smart Management</div>
                        <Navbar />
                    </header> */}
                    <TopBar/>
                    <Navbar />
                    <main>
                        <section id="home">
                            <Home />
                        </section>
                        <section id="services">
                            <Services />
                        </section>
                        <section id="ourmission">
                            <Mission />
                        </section>
                        <section id="contact">
                            <Contact />
                        </section>
                    </main>
                </>
            }
        </>
    );
};
export default App;