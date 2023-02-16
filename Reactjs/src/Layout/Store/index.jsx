import { useContext, useState, useEffect } from 'react';

import './style.scss';
import Header from '../../Components/Header';
import { ThemeApp } from '../../Utils/context';

const Store = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <>
            <Header />
            <div
                className="container-fluid "
                style={{
                    marginTop: 'var(--header_height)',
                }}
            >
                Store
            </div>
        </>
    );
};
export default Store;
