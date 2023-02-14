import { useContext } from 'react';
import './style.scss';

import { ThemeApp } from '../../Utils/context';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const SettingTheme = ({ width = '60px', height = '32px' }) => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className={'setting_theme'}
            style={{
                backgroundColor: theme.secondBackgroundColor,
                width: width,
                height: height,
            }}
        >
            <HiOutlineMoon
                style={{
                    color: theme.color,
                    display: !theme.theme ? 'block' : 'none',
                    fontSize: 32,
                    lineHeight: height,
                }}
                onClick={(e) =>
                    setTheme({
                        theme: true,
                        backgroundColor: '#060930',
                        secondBackgroundColor: '#333456',
                        thirdBackgroundColor: '#595B83',
                        colorActive: '#6f2cf4',
                        button_primary: '#6f2cf4',
                        color: '#fff',
                    })
                }
            ></HiOutlineMoon>
            <HiOutlineSun
                style={{
                    color: 'yellow',
                    display: theme.theme ? 'block' : 'none',
                    float: 'right',
                    fontSize: 32,
                    lineHeight: height,
                }}
                onClick={(e) =>
                    setTheme({
                        theme: false,
                        backgroundColor: '#fff',
                        secondBackgroundColor: '#DFDFDE',
                        thirdBackgroundColor: '#F7F5F2',
                        colorActive: '#6f2cf4',
                        button_primary: '#6f2cf4',
                        color: '#000',
                    })
                }
            ></HiOutlineSun>
        </div>
    );
};
export default SettingTheme;
