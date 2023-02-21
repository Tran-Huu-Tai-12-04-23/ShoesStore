import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Admin from './Layout/Admin';
import Home from './Layout/Home';
import Login from './Layout/Login';
import Register from './Layout/Register';
import ShowProduct from './Layout/DisplayProduct';
import DetailItem from './Layout/DetailItem';
import Store from './Layout/Store';
import { ThemeApp } from './Utils/context';

import { FcUpload } from 'react-icons/fc';
import PostNewItem from './Layout/PostNewItem';

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
    const app = useRef();
    const [showToTop, setShowToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowToTop(true);
            } else {
                setShowToTop(false);
            }
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
                ref={app}
                style={{
                    backgroundColor: theme.backgroundColor,
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
                        <Route path="/post-new-item" element={<PostNewItem />}></Route>
                        <Route path="/store" element={<Store />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Router>
                <div
                    className="action_move_top"
                    style={{
                        '--hover_background_color': theme.secondBackgroundColor,
                        display: showToTop ? 'flex' : 'none',
                    }}
                    onClick={(e) => {
                        setShowToTop(false);
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <FcUpload />
                </div>
            </div>
        </ThemeApp.Provider>
    );
}

export default memo(App);
