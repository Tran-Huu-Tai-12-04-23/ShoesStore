import { useContext, useEffect, useState, useRef } from 'react';
import './style.scss';

import { ThemeApp } from '../../Utils/context';
import Header from '../../Components/Header';
import About from './About';
import Poster from './Poster';
import SliderProduct from '../../Components/SliderProduct';
import Category from './Category';
import Help from './Help';
import Contact from '../../Components/Contact';

const Home = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [typeProductActive, setTypeProductActive] = useState('');

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
                    <Header typeProductActive={typeProductActive} setTypeProductActive={setTypeProductActive} />
                    <About />
                </div>
            </div>
            <div
                className="container-fluid g-0"
                style={{
                    marginTop: 'var(--height_header)',
                    height: 'calc(100vh - var(--height_header))',
                }}
            >
                <Poster />
                <Category />
                <SliderProduct />
                <Help />
                <Contact />
            </div>
        </>
    );
};

export default Home;
