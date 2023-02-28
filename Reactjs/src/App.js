import { useState, useEffect, useRef, useCallback, memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "./Layout/Admin";
import Home from "./Layout/Home";
import Login from "./Layout/Login";
import Register from "./Layout/Register";
import ShowProduct from "./Layout/DisplayProduct";
import DetailItem from "./Layout/DetailItem";
import Store from "./Layout/Store";
import LoaderStart from "./Components/LoaderStart";
import { ThemeApp } from "./Utils/context";
import { Loader } from "./Utils/context";

import { FcUpload } from "react-icons/fc";
import PostNewItem from "./Layout/PostNewItem";

function App() {
    const [theme, setTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? {
                  theme: true,
                  backgroundColor: "#0f151a",
                  secondBackgroundColor: "#2C3333",
                  thirdBackgroundColor: "#576F72",
                  colorActive: "#6f2cf4",
                  button_primary: "#6f2cf4",
                  color: "#fff",
              }
            : {
                  theme: false,
                  backgroundColor: "#fff",
                  secondBackgroundColor: "#DFDFDE",
                  thirdBackgroundColor: "#F7F5F2",
                  colorActive: "#6f2cf4",
                  button_primary: "#6f2cf4",
                  color: "#000",
              }
    );
    const app = useRef();
    const [showToTop, setShowToTop] = useState(false);
    const [loader, setLoader] = useState(true);

    const handleScroll = () => {
        if (!app || !app.current) {
            return;
        }
        if (app.current.scrollTop > 200) {
            setShowToTop(true);
        } else {
            setShowToTop(false);
        }
    };

    useEffect(() => {
        const handleOnload = () => {
            setTimeout(() => {
                setLoader(false);
            }, 1000);
        };
        window.addEventListener("load", handleOnload);
        return () => {
            window.removeEventListener("load", handleOnload);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    return (
        <Loader.Provider value={[loader, setLoader]}>
            <ThemeApp.Provider value={[theme, setTheme]}>
                {!loader && (
                    <div
                        className='app_main'
                        onScroll={handleScroll}
                        ref={app}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            height: "100vh",
                            overflowX: "hidden",
                            zIndex: "10000000",
                        }}
                    >
                        <Router>
                            <Routes>
                                <Route
                                    path='/login'
                                    element={<Login />}
                                ></Route>
                                <Route
                                    path='/register'
                                    element={<Register />}
                                ></Route>
                                <Route
                                    path='/admin'
                                    element={<Admin />}
                                ></Route>
                                <Route
                                    path='/products'
                                    element={<ShowProduct />}
                                ></Route>
                                <Route
                                    path='/detail-item'
                                    element={<DetailItem />}
                                ></Route>
                                <Route
                                    path='/post-new-item'
                                    element={<PostNewItem />}
                                ></Route>
                                <Route
                                    path='/store'
                                    element={<Store />}
                                ></Route>
                                <Route path='/' element={<Home />}></Route>
                            </Routes>
                        </Router>
                        <div
                            className='action_move_top'
                            style={{
                                "--hover_background_color":
                                    theme.secondBackgroundColor,
                                display: showToTop ? "flex" : "none",
                            }}
                            onClick={(e) => {
                                setShowToTop(false);
                                if (!app || !app.current) return;
                                app.current.scroll({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <FcUpload />
                        </div>
                    </div>
                )}
                {loader && <LoaderStart />}
            </ThemeApp.Provider>
        </Loader.Provider>
    );
}

export default memo(App);
