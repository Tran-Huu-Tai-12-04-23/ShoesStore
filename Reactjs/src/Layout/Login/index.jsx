import { useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ThemeApp } from '../../Utils/context';
import Button from '../../Components/Button';
import { HiOutlineEyeSlash, HiOutlineEye } from 'react-icons/hi2';
import { FaFacebookF, FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [savePass, setSavePass] = useState(false);
    const inputPassword = useRef();

    const handleChangeUserName = (e) => {
        setUsername(e.target.value);
        handleValidate(e);
    };
    const handleChangePass = (e) => {
        setPassword(e.target.value);
        handleValidate(e);
    };

    const handleValidate = (e, passCompare) => {
        let colorValidate = '';
        let message = '';
        if (e.target.value.trim() === '') {
            message = 'This field cannot be empty';
            e.target.style.borderColor = '#FF0032';
            colorValidate = '#FF0032';
        } else if (e.target.value.trim().length < 6) {
            message = 'This field must be at least 6 characters';
            e.target.style.borderColor = '#FF0032';
            colorValidate = '#FF0032';
        } else {
            message = 'Correctly !';
            e.target.style.borderColor = '#03C988';
            colorValidate = '#03C988';
        }
        const notification = e.target.parentNode.querySelector('.notification_form');
        if (notification) {
            notification.style.color = colorValidate;
            notification.textContent = message;
        }
    };

    useEffect(() => {
        if (showPassword && inputPassword) {
            inputPassword.current.type = 'text';
        } else if (inputPassword) {
            inputPassword.current.type = 'password';
        }
    }, [showPassword]);

    useEffect(() => {
        let data = {
            user_name: userName,
            password: password,
            save_pass: savePass,
        };
    }, [
        {
            userName,
            password,
            savePass,
        },
    ]);

    return (
        <div
            className="wrapper_login_register"
            style={{
                color: '#ffff',
                backgroundImage: `
                linear-gradient(0deg, rgba(57,71,187,.6) 20%, rgba(171,80,189,.4) 84%),
                url(https://htmldemo.net/james/images/section-bg/header.jpg)`,
                objectFit: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="wrapper_form"
                style={{
                    color: '#ffff',
                    position: 'relative',
                }}
            >
                <div
                    className="action_return_home"
                    style={{
                        position: 'absolute',
                        top: '-15%',
                        padding: '12px',
                        border: '1px solid #fff',
                        borderRadius: 'var(--primary_border_radius)',
                        minWidth: '150px',
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            top: '100px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            color: '#ffff',
                        }}
                    >
                        <FaArrowLeft />
                        <span>Return Home</span>
                    </Link>
                </div>
                <h1>Login</h1>
                <div
                    className="wrapper_fill"
                    style={{
                        '--border_hover_color': '#03C988',
                    }}
                >
                    <div className="text_fill_form">
                        <input
                            style={{
                                color: '#ffff',
                            }}
                            name="username"
                            onChange={handleChangeUserName}
                            value={userName}
                            onBlur={handleValidate}
                            placeholder=" "
                        />
                        <label>Email or Username</label>
                        <span className="notification_form"></span>
                    </div>
                    <div className="text_fill_form">
                        <input
                            ref={inputPassword}
                            style={{
                                color: '#ffff',
                            }}
                            name="password"
                            value={password}
                            onChange={handleChangePass}
                            onBlur={handleValidate}
                            placeholder=" "
                            type="password"
                        />
                        <label>Enter Password</label>
                        <span className="notification_form"></span>
                        <HiOutlineEyeSlash
                            style={{
                                display: !showPassword || !password ? 'none' : 'block',
                            }}
                            onClick={(e) => setShowPassword(!showPassword)}
                        />
                        <HiOutlineEye
                            style={{
                                display: showPassword || !password ? 'none' : 'block',
                            }}
                            onClick={(e) => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div className="save_me">
                        <input
                            style={{
                                color: '#ffff',
                            }}
                            name="save_password"
                            type="checkbox"
                            value={savePass}
                            onChange={(e) => setSavePass(!savePass)}
                        />
                        <label>Save</label>
                    </div>
                    <div
                        style={{
                            width: ' 100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            nameButton="Login"
                            addStyleCustom={{
                                textTransform: 'uppercase',
                                marginTop: '20px',
                                color: '#ffff',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                minWidth: '100px',
                            }}
                            backgroundColorCustom="#03C988"
                            width="20%"
                            height="40px"
                        ></Button>
                    </div>
                    <div
                        style={{
                            width: ' 100%',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <Button
                            icon={<FaFacebookF />}
                            nameButton="Facebook"
                            addStyleCustom={{
                                textTransform: 'uppercase',
                                marginTop: '20px',
                                color: '#ffff',
                                borderRadius: '8px',
                                border: '1px solid #fff',
                                fontSize: '14px',
                            }}
                            backgroundColorCustom="#3C79F5"
                            height="30px"
                            width="35%"
                        ></Button>
                        <Button
                            nameButton="Google"
                            addStyleCustom={{
                                textTransform: 'uppercase',
                                color: '#ffff',
                                marginTop: '20px',
                                borderRadius: '8px',
                                border: '1px solid #fff',
                                fontSize: '14px',
                            }}
                            backgroundColorCustom="rgba(0,0,0,.5)"
                            width="35%"
                            height="30px"
                            icon={<FcGoogle />}
                        ></Button>
                    </div>
                    <div className="more_info">
                        <Link
                            to="/help"
                            style={{
                                color: '#ccc',
                                fontSize: '14px',
                            }}
                        >
                            Help?
                        </Link>
                        <Link
                            className="action_form_login"
                            style={{
                                '--color_register': '#fff',
                                width: '20%',
                            }}
                            to="/register"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
