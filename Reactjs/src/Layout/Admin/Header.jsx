import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import adminAvatar from '../../assets/img/adminAvatar.png';
import { AiOutlineHome } from 'react-icons/ai';

import { ThemeApp } from '../../Utils/context';
import SettingTheme from '../../Components/SettingTheme';

const Header = ({}) => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div className={'wrapper_header'}>
            <div className={'info_header'}>
                <Link to="/">
                    <AiOutlineHome
                        className={'icon_back_home'}
                        style={{
                            color: theme.color,
                        }}
                    />
                </Link>
                <div className={'info_header_sub'}>
                    <h1
                        style={{
                            color: theme.color,
                        }}
                    >
                        Admin
                    </h1>
                    <h5>Management users</h5>
                </div>
            </div>
            <div className={'wrapper_info'}>
                <SettingTheme></SettingTheme>

                <img style={{ width: '50px', borderRadius: '50%' }} src={adminAvatar} />
            </div>
        </div>
    );
};
export default Header;
