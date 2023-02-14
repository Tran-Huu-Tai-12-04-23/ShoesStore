import { useContext, useState, useEffect } from 'react';

import './style.scss';
import Header from './Header.jsx';
import TableManager from './TableManager';
import CardManager from './CardManager';
import Navbar from './Navbar';
import Search from '../../Components/Search';
import { ThemeApp } from '../../Utils/context';

const Admin = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [layout, setLayout] = useState(true); // false === list // true === table
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [dataOf, setDataOf] = useState('user');

    useEffect(() => {
        fetch(`http://localhost:8000/get-${dataOf}`)
            .then((users) => {
                if (users.status === 200) {
                    users
                        .json()
                        .then((dt) => {
                            setData(dt.data);
                        })
                        .catch((err) => {
                            setData([]);
                            console.log(err);
                        });
                } else {
                    setData([]);
                }
            })
            .catch((err) => console.log(err));
    }, [dataOf]);

    return (
        <>
            <div className={'show_nofication_display_none'}>Page Admin can't show at this display</div>
            <div
                className={'wrapper_admin'}
                style={{
                    backgroundColor: theme.backgroundColor,
                }}
            >
                <Header setLayout={setLayout} layout={layout} />
                <Search search={search} setSearch={setSearch} />
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                    }}
                >
                    <Navbar
                        width={'28%'}
                        nameSearch={search}
                        dataOf={dataOf}
                        setDataOf={setDataOf}
                        layout={layout}
                        setLayout={setLayout}
                    />
                </div>
                <TableManager data={data} show={layout} dataOf={dataOf} />
                <CardManager data={data} show={!layout} dataOf={dataOf} />
            </div>
        </>
    );
};
export default Admin;
