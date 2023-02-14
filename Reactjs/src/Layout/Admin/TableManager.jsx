import { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';
import { ImSortAlphaAsc } from 'react-icons/im';
import Button from '../../Components/Button';
import { ThemeApp } from '../../Utils/context';

const TableManager = ({ data = [], show, dataOf }) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const renderUser = () => {
        return data.map((user) => {
            return (
                <tr
                    key={uuid()}
                    style={{
                        color: theme.color,
                        backgroundColor: theme.thirdBackgroundColor,
                        border: ' 1px solid rgb(101, 88, 88)',
                    }}
                >
                    <th
                        style={{
                            transform: 'translateX(30px)',
                        }}
                    >
                        {user.firstName}
                    </th>
                    <th className={'hidden_mobile'}>{user.lastName}</th>
                    <th className={'hidden_mobile'}>{user.email}</th>
                    <th className={'hidden_mobile'}>{user.phoneNumber}</th>
                    <th>
                        <Button
                            nameButton={'Remove'}
                            type="remove"
                            backgroundColorCustom={'rgba(0,0,0,.5)'}
                            addStyleCustom={{
                                marginBottom: 12,
                                marginRight: 12,
                            }}
                            width={'86px'}
                        ></Button>

                        <Button nameButton={'Edit'} type="edit" width={'86px'}></Button>
                    </th>
                </tr>
            );
        });
    };

    return (
        <div
            style={{
                display: show ? 'block' : 'none',
            }}
            className={'table_manager'}
        >
            <div className={'wrapper_table_manager'}>
                <div className={'wrapper_table'}>
                    <table
                        className={'table'}
                        style={{
                            backgroundColor: theme.secondBackgroundColor,
                        }}
                    >
                        <tbody>
                            <tr
                                style={{
                                    color: theme.color,
                                }}
                            >
                                <th>
                                    <ImSortAlphaAsc className={'icon_sort'} />
                                    {/* <ImSortAlphaDesc className={styles.icon_sort}/> */}
                                    First Name
                                </th>
                                <th
                                    style={{
                                        transform: 'translateX(-30px)',
                                    }}
                                    className={'hidden_mobile'}
                                >
                                    <ImSortAlphaAsc className={'icon_sort'} />
                                    {/* <ImSortAlphaDesc className={styles.icon_sort}/> */}Last Name
                                </th>
                                <th className={'hidden_mobile'}>
                                    <ImSortAlphaAsc className={'icon_sort'} />
                                    {/* <ImSortAlphaDesc className={styles.icon_sort}/> */}Email
                                </th>

                                <th className={'hidden_mobile'}>Phone Number</th>
                                <th
                                    style={{
                                        transform: 'translateX(30px)',
                                    }}
                                >
                                    Action
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div
                className={'wrapper_table_manager'}
                style={{
                    marginTop: 12,
                    height: '50%',
                }}
            >
                {data.length === 0 && (
                    <h1
                        style={{
                            color: theme.color,
                        }}
                    >
                        Don't have {dataOf}
                    </h1>
                )}
                {data.length > 0 && (
                    <div className={'wrapper_table'}>
                        <table
                            className={'table'}
                            style={{
                                backgroundColor: theme.thirdBackgroundColor,
                            }}
                        >
                            <tbody>{renderUser()}</tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TableManager;
