import { useContext, useState, useRef, useEffect } from 'react';

import styles from './style.scss';
import { ThemeApp } from '../../Utils/context';

import { TfiSearch } from 'react-icons/tfi';
import { BsArrowLeftShort } from 'react-icons/bs';

const Search = ({ search, setSearch, styleCustom = () => {} }) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [focusSearch, setFocusSearch] = useState(false);
    const searchInput = useRef();

    const handleShowInputSearch = (e, id) => {
        e.stopPropagation();
        if (id === 1) {
            setFocusSearch(true);
        }
        if (id === 0) {
            console.warn('hello');
            setFocusSearch(false);
        }
    };

    useEffect(() => {
        if (search && focusSearch) {
            search.current.focus();
        }
    }, [focusSearch]);
    useEffect(() => {
        const handleShowInputSearch = () => {
            setFocusSearch(false);
        };
        window.addEventListener('click', handleShowInputSearch);
        return () => {
            window.removeEventListener('click', handleShowInputSearch);
        };
    });
    return (
        <div>
            <div
                className={'wrapper_search'}
                onClick={(e) => e.stopPropagation()}
                style={{
                    ...styleCustom,
                }}
            >
                <div
                    className={'search'}
                    onClick={(e) => handleShowInputSearch(e, 1)}
                    style={{
                        width: focusSearch ? '' : '50px',
                        backgroundColor: theme.secondBackgroundColor,
                    }}
                >
                    <BsArrowLeftShort
                        className={'icon_close'}
                        style={{
                            display: focusSearch ? 'block' : 'none',
                            color: theme.theme ? '#fff' : '#000',
                        }}
                        onClick={(e) => handleShowInputSearch(e, 0)}
                    ></BsArrowLeftShort>
                    <input
                        ref={searchInput}
                        className={'input_search'}
                        style={{
                            display: focusSearch ? 'block' : 'none',
                            color: theme.theme ? '#fff' : '#000',
                        }}
                        value={search}
                        placeholder="Search by name..."
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                    <TfiSearch
                        className={'icon_search'}
                        style={{
                            color: theme.theme ? '#fff' : '#000',
                        }}
                        onClick={(e) => e.preventDefault()}
                    ></TfiSearch>
                </div>
            </div>
            {search && (
                <div
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        marginBottom: '24px',
                        color: theme.secondBackgroundColor,
                    }}
                >
                    Result for :
                    <span
                        style={{
                            fontFamily: '"Nunito", sans-serif',
                            fontWeight: 'bold',
                            marginLeft: 12,
                            color: theme.color,
                        }}
                    >
                        {search}
                    </span>
                </div>
            )}
        </div>
    );
};
export default Search;
