import { useContext, useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { ThemeApp } from '../../Utils/context';

import InputText from '../InputText';
import { convertVNseToEnglish } from '../../Utils/function';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const DropDown = ({
    data,
    isLoadingData,
    setIsLoadingData,
    nameSearch,
    setNameSearch,
    nameInput,
    type = 'p',
    codeP,
    codeD,
    setCodeP = (e) => {},
    setCodeD = (e) => {},
}) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [showOptionConscious, setShowOptionConscious] = useState(false);
    const [dataList, setDataList] = useState([]);

    const renderOption = () => {
        return dataList.map((it) => {
            return (
                <div
                    key={uuid()}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setNameSearch(it.name);
                        setShowOptionConscious(false);
                        if (type === 'p') {
                            setCodeP(it.codeP);
                        } else if (type === 'd') {
                            setCodeD(it.codeD);
                        }
                    }}
                    style={{
                        zIndex: 10000,
                    }}
                >
                    {it.name}
                </div>
            );
        });
    };

    const searchConscious = async (e) => {
        if (type === 'p') {
            let newListData = [];
            await data.map((it) => {
                let newName = convertVNseToEnglish(it.name);
                if (newName.toLowerCase().search(e.target.value.toLowerCase()) !== -1) {
                    newListData.push({
                        name: it.name,
                        codeP: it.code,
                    });
                }
            });
            setDataList(newListData);
        } else if (type === 'd') {
            let newListData = [];
            console.log(codeP);
            const dataNew = data.find((it) => it.code === codeP);
            await dataNew.districts.map((dis) => {
                let newName = convertVNseToEnglish(dis.name);
                if (newName.toLowerCase().search(e.target.value.toLowerCase()) !== -1) {
                    newListData.push({
                        name: dis.name,
                        codeP: dis.code,
                    });
                }
            });

            setDataList(newListData);
        } else if (type === 'w') {
            let newListData = [];
            console.log(codeD);
            const dataNew = data.find((it) => it.code === codeP);
            const dataNew2 = dataNew.districts.find((dis) => dis.code === codeD);
            await dataNew2.wards.map((ward) => {
                let newName = convertVNseToEnglish(ward.name);
                if (newName.toLowerCase().search(e.target.value.toLowerCase()) !== -1) {
                    newListData.push({
                        name: ward.name,
                        codeP: ward.code,
                    });
                }
            });

            setDataList(newListData);
        }
    };

    const resetData = async () => {
        if (type === 'p') {
            let newListData = [];
            await data.map((it) => {
                newListData.push({
                    name: it.name,
                    codeP: it.code,
                });
            });
            setDataList(newListData);
        } else if (type === 'd') {
            let newListData = [];
            const dataNew = data.find((it) => it.code === codeP);
            if (dataNew) {
                await dataNew.districts.map((dis) => {
                    newListData.push({
                        name: dis.name,
                        codeD: dis.code,
                    });
                });
            }

            setDataList(newListData);
        } else if (type === 'w') {
            let newListData = [];
            const dataNew = data.find((it) => it.code === codeP);
            if (dataNew) {
                const dataNew2 = dataNew.districts.find((dis) => dis.code === codeD);
                if (dataNew2) {
                    await dataNew2.wards.map((ward) => {
                        newListData.push({
                            name: ward.name,
                            codeW: ward.code,
                        });
                    });
                }
            }

            setDataList(newListData);
        }
    };

    useEffect(() => {
        resetData();
    }, [codeP]);
    useEffect(() => {
        resetData();
    }, [codeD]);
    useEffect(() => {
        resetData();
    }, [data]);
    return (
        <div className="input_text " style={{}}>
            {!isLoadingData && showOptionConscious && <AiOutlineLoading3Quarters className="icon_reload" />}
            <MdOutlineKeyboardArrowDown
                style={{
                    fontSize: '3.2rem',
                    position: 'absolute',
                    top: '50%',
                    right: '-1rem',
                    cursor: 'pointer',
                    transform: 'translateY(-50%)',
                    zIndex: '3',
                    display: !showOptionConscious ? 'block' : 'none',
                }}
                onClick={(e) => setShowOptionConscious(true)}
            />
            <MdOutlineKeyboardArrowUp
                style={{
                    fontSize: '3.2rem',
                    position: 'absolute',
                    top: '50%',
                    right: '-1rem',
                    cursor: 'pointer',
                    transform: 'translateY(-50%)',
                    zIndex: '3',
                    display: showOptionConscious ? 'block' : 'none',
                }}
                onClick={(e) => setShowOptionConscious(false)}
            />
            <InputText
                value={nameSearch}
                labelInput={nameInput}
                styleCustomWrapper={{
                    color: theme.color,
                    borderRadius: 'var(--primary_border_radius)',
                    borderBottom: '.2rem solid',
                    borderImageSlice: 1,
                    borderWidth: '.2rem',
                    borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                    marginBottom: '10%',
                }}
                styleCustomInput={{ color: theme.color }}
                color={theme.color}
                width="100%"
                onFocus={(e) => {
                    setShowOptionConscious(true);
                }}
                onChange={(e) => {
                    setNameSearch(e.target.value);
                    searchConscious(e);
                }}
                // onBlur={(e) => {
                //     e.preventDefault();
                //     e.stopPropagation();
                //     setShowOptionConscious(false);
                // }}
            />
            {isLoadingData && dataList.length > 0 && (
                <div
                    className="option_drop_down pt-4 pb-2"
                    style={{
                        display: showOptionConscious ? 'block' : 'none',
                        backgroundColor: theme.thirdBackgroundColor,
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                >
                    {dataList.length > 0 && renderOption()}
                </div>
            )}
        </div>
    );
};

export default DropDown;
