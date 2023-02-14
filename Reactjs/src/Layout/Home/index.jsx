import { useContext, useEffect, useState, useRef } from 'react';
import './style.scss';

import { ThemeApp } from '../../Utils/context';
import Header from '../../Components/Header';
import About from './About';
import Poster from './Poster';
import ShowProduct from './ShowProduct';
import Category from './Category';
import Help from './Help';
import Contact from '../../Components/Contact';
import ProductDisplay from './ProductDisplay';

import { FcUpload } from 'react-icons/fc';

const Home = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [heightScroll, setHeightScroll] = useState(0);
    const [ShowProductHome, setShowProductHome] = useState(false);
    const [typeProductActive, setTypeProductActive] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            setHeightScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="container wrapper_home">
                <div
                    className="row"
                    style={{
                        color: theme.color,
                        backgroundColor: theme.backgroundColor,
                    }}
                >
                    <Header
                        heightScroll={heightScroll}
                        typeProductActive={typeProductActive}
                        setTypeProductActive={setTypeProductActive}
                        setShowProductHome={setShowProductHome}
                    />
                    {!ShowProductHome && <About />}
                </div>
            </div>
            <div
                className="container-fluid g-0"
                style={{
                    marginTop: ShowProductHome ? 'var(--height_header)' : 'unset',
                    height: 'calc(100vh - var(--height_header))',
                }}
            >
                {!ShowProductHome && (
                    <>
                        <Poster />
                        <Category />
                        <ShowProduct />
                        <Help />
                        <Contact />
                    </>
                )}
                {ShowProductHome && <ProductDisplay />}
            </div>

            <div
                className="action_move_top"
                style={{
                    '--hover_background_color': theme.secondBackgroundColor,
                    display: heightScroll >= 200 ? 'flex' : 'none',
                }}
                onClick={(e) => {
                    setHeightScroll(0);
                    window.scrollTo(0, 0);
                }}
            >
                <FcUpload />
                <span>Move Top</span>
            </div>
        </>
    );
};

export default Home;
