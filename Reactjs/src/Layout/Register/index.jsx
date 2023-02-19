import { useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ThemeApp } from '../../Utils/context';
import Button from '../../Components/Button';
import { HiOutlineEyeSlash, HiOutlineEye } from 'react-icons/hi2';
import { FaArrowLeft } from 'react-icons/fa';

const Register = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const inputPassword = useRef();
    const inputConfirmPassword = useRef();
    const [doneEnterPassword, setDoneEnterPassword] = useState(false);

    const handleChangeUserName = (e) => {
        setUsername(e.target.value);
        handleValidate(e);
    };
    const handleChangePass = (e) => {
        setPassword(e.target.value);
        handleValidate(e, e.target.value);
    };
    const handleChangeConfirmPass = (e) => {
        setConfirmPassword(e.target.value);
        handleValidate(e, e.target.value);
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
        } else if (
            doneEnterPassword &&
            e.target.name !== 'username' &&
            passCompare !== undefined &&
            (passCompare !== password || passCompare !== confirmPassword)
        ) {
            message = 'The password does not match';
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
        if (showPassword && inputConfirmPassword) {
            inputConfirmPassword.current.type = 'text';
        } else if (inputConfirmPassword) {
            inputConfirmPassword.current.type = 'password';
        }
    }, [showPassword]);

    useEffect(() => {
        let data = {
            user_name: userName,
            password: password,
        };
    }, [
        {
            userName,
            password,
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
                        padding: '1.2rem',
                        border: '1px solid #fff',
                        borderRadius: 'var(--primary_border_radius)',
                        minWidth: '150px',
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            top: '-10rem',
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
                <h1>Register</h1>
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
                            onBlur={(e) => {
                                handleValidate(e, e.target.value);
                                setDoneEnterPassword(true);
                            }}
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
                    <div className="text_fill_form">
                        <input
                            ref={inputConfirmPassword}
                            style={{
                                color: '#ffff',
                            }}
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={handleChangeConfirmPass}
                            onBlur={(e) => {
                                handleValidate(e, e.target.value);
                                setDoneEnterPassword(true);
                            }}
                            placeholder=" "
                            type="password"
                        />
                        <label>Confirm Password</label>
                        <span className="notification_form"></span>
                        <HiOutlineEyeSlash
                            style={{
                                display: !showPassword || !confirmPassword ? 'none' : 'block',
                            }}
                            onClick={(e) => setShowPassword(!showPassword)}
                        />
                        <HiOutlineEye
                            style={{
                                display: showPassword || !confirmPassword ? 'none' : 'block',
                            }}
                            onClick={(e) => setShowPassword(!showPassword)}
                        />
                    </div>

                    <div
                        style={{
                            width: ' 100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            nameButton="Register"
                            addStyleCustom={{
                                textTransform: 'uppercase',
                                marginTop: '2rem',
                                color: '#ffff',
                                fontWeight: 'bold',
                                borderRadius: '.8rem',
                                minWidth: '10rem',
                            }}
                            backgroundColorCustom="#C92C6D"
                            width="20%"
                            height="4rem"
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
                                '--color_register': '#ffff',
                                width: '20%',
                            }}
                            to="/login"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
