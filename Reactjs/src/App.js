import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Admin from './Layout/Admin';
import Home from './Layout/Home';
import Login from './Layout/Login';
import Register from './Layout/Register';
import ShowProduct from './Layout/DisplayProduct';
import DetailItem from './Layout/DetailItem';
import { ThemeApp } from './Utils/context';

import { FcUpload } from 'react-icons/fc';

function App() {
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? {
                  theme: true,
                  backgroundColor: '#060930',
                  secondBackgroundColor: '#333456',
                  thirdBackgroundColor: '#595B83',
                  colorActive: '#6f2cf4',
                  button_primary: '#6f2cf4',
                  color: '#fff',
              }
            : {
                  theme: false,
                  backgroundColor: '#fff',
                  secondBackgroundColor: '#DFDFDE',
                  thirdBackgroundColor: '#F7F5F2',
                  colorActive: '#6f2cf4',
                  button_primary: '#6f2cf4',
                  color: '#000',
              },
    );
    const [heightScroll, setHeightScroll] = useState(0);
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
        <ThemeApp.Provider value={[theme, setTheme]}>
            <div
                className="app_main"
                style={{
                    backgroundColor: theme.backgroundColor,
                    overflowX: 'hidden',
                    height: '100vh',
                }}
            >
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>
                        <Route path="/products" element={<ShowProduct />}></Route>
                        <Route path="/detail-item" element={<DetailItem />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Router>
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
        </ThemeApp.Provider>
    );
}

export default App;
