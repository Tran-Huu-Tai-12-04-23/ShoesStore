import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Admin from './Layout/Admin';
import Home from './Layout/Home';
import Login from './Layout/Login';
import Register from './Layout/Register';
import { ThemeApp } from './Utils/context';
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

    return (
        <ThemeApp.Provider value={[theme, setTheme]}>
            <div
                className="app_main"
                style={{
                    backgroundColor: theme.backgroundColor,
                    overflowX: 'hidden',
                }}
            >
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>

                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Router>
            </div>
        </ThemeApp.Provider>
    );
}

export default App;
