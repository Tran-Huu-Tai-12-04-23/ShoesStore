import { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';
import Button from '../../Components/Button';
import { ThemeApp } from '../../Utils/context';

const CardManager = ({ data = [], show, dataOf }) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const renderUser = () => {
        return data.map((user) => {
            return (
                <div
                    key={uuid()}
                    className={'item_card_manager'}
                    style={{
                        backgroundColor: theme.backgroundColor,
                    }}
                >
                    <div
                        className={'wrapper_info_user'}
                        style={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                color: theme.color,
                            }}
                        >
                            <h4
                                style={{
                                    minWidth: '20%',
                                }}
                            >
                                Name:
                            </h4>
                            <h4>
                                {user.firstName} {user.lastName}
                            </h4>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                color: theme.color,
                            }}
                        >
                            <h4
                                style={{
                                    minWidth: '20%',
                                }}
                            >
                                Email:
                            </h4>
                            <h4>{user.email}</h4>
                        </div>

                        <div className={'action'}>
                            <Button
                                type="edit"
                                nameButton="Edit"
                                addStyleCustom={{
                                    marginRight: 12,
                                    width: '46%',
                                    marginTop: 12,
                                }}
                            ></Button>
                            <Button
                                type="remove"
                                nameButton="Remove"
                                backgroundColorCustom="rgba(0,0,0,.2)"
                                addStyleCustom={{
                                    marginRight: 12,
                                    width: '46%',
                                    marginTop: 12,
                                }}
                            ></Button>
                        </div>
                    </div>
                    <img
                        className={'avatar'}
                        src={
                            !user.image
                                ? 'https://tse3.mm.bing.net/th?id=OIP._ARzR7F_fff_KI14yMKBzwHaHa&pid=Api&P=0'
                                : user.image
                        }
                        style={{}}
                    ></img>
                </div>
            );
        });
    };

    return (
        <>
            {data.length === 0 && (
                <div
                    className={'wrapper_layout_manager'}
                    style={{
                        height: '50%',
                        display: show ? 'flex' : 'none',
                    }}
                >
                    <h1
                        style={{
                            color: theme.color,
                        }}
                    >
                        Don't have {dataOf}
                    </h1>
                </div>
            )}
            {data.length > 0 && (
                <div
                    className={'wrapper_layout_manager'}
                    style={{
                        height: '60%',
                        display: show ? 'flex' : 'none',
                    }}
                >
                    <div
                        className={'layout'}
                        style={{
                            backgroundColor: theme.secondBackgroundColor,
                        }}
                    >
                        {renderUser()}
                    </div>
                </div>
            )}
        </>
    );
};
export default CardManager;
