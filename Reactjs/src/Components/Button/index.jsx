import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeApp } from '../../Utils/context';

import styles from './style.button.module.scss';

const Button = ({
    type = 'default',
    action = () => {},
    nameButton = 'default',
    height = '4rem',
    width = '40%',
    backgroundColorCustom,
    addStyleCustom = {},
    icon,
    to,
    disable,
    positionIcon = 'left',
}) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [stylesCustom, setStylesCustom] = useState({});
    useEffect(() => {
        switch (type) {
            case 'detail': {
                setStylesCustom({
                    backgroundColor: 'transparent',
                    borderRadius: 'var(--primary_border_radius)',
                    backgroundColor: backgroundColorCustom ? backgroundColorCustom : 'rgba(0,0,0,0.5)',
                    color: theme.color,
                    '--hover_color': 'red',
                });
                break;
            }
            case 'remove': {
                setStylesCustom({
                    backgroundColor: backgroundColorCustom ? backgroundColorCustom : 'transparent',
                    borderRadius: 'var(--primary_border_radius)',
                    color: theme.color,
                    '--hover_color': 'red',
                });
                break;
            }
            case 'edit': {
                setStylesCustom({
                    backgroundColor: 'var(--button_edit)',
                    borderRadius: 'var(--primary_border_radius)',
                    color: theme.color,
                });
                break;
            }
            default:
        }
    }, [type]);
    return (
        <>
            {!to && !disable && (
                <button
                    className={`${styles.button}`}
                    style={{
                        padding: '1.2rem 0',
                        ...stylesCustom,
                        height: height,
                        width: width,
                        backgroundColor: backgroundColorCustom,
                        '--hover_color': theme.color,
                        color: 'var(--hover_color)',
                        ...addStyleCustom,
                    }}
                    onClick={action}
                >
                    {icon && positionIcon === 'left' && icon}
                    {nameButton}
                    {icon && positionIcon === 'right' && icon}
                </button>
            )}
            {to && !disable && (
                <Link to={to}>
                    <button
                        className={styles.button}
                        style={{
                            padding: '1.2rem 0',
                            ...stylesCustom,
                            height: height,
                            width: width,
                            backgroundColor: backgroundColorCustom,
                            '--hover_color': theme.color,
                            color: 'var(--hover_color)',
                            ...addStyleCustom,
                        }}
                        onClick={action}
                    >
                        {icon && positionIcon === 'left' && icon}
                        {nameButton}
                        {icon && positionIcon === 'right' && icon}
                    </button>
                </Link>
            )}
            {!to && disable && (
                <button
                    disabled
                    className={styles.button}
                    style={{
                        padding: '1.2rem 0',
                        ...stylesCustom,
                        height: height,
                        width: width,
                        backgroundColor: backgroundColorCustom,
                        '--hover_color': theme.color,
                        ...addStyleCustom,
                        color: 'var(--hover_color)',
                    }}
                    onClick={action}
                >
                    {icon && positionIcon === 'left' && icon}
                    {nameButton}
                    {icon && positionIcon === 'right' && icon}
                </button>
            )}
        </>
    );
};
export default Button;
