import { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';
import Button from '../../Components/Button';
import InputText from '../../Components/InputText';
import DropDown from '../../Components/DropDown';
import { convertVNseToEnglish } from '../../Utils/function';

import { MdPayments } from 'react-icons/md';
import { BsArrowRightShort, BsArrowLeftShort, BsCashCoin, BsCreditCard } from 'react-icons/bs';

const FormAddress = ({
    theme,
    city,
    district,
    wards,
    detail,
    name,
    number,
    setCity,
    setDistrict,
    setWards,
    setDetail,
    setName,
    setNumber,
}) => {
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [data, setData] = useState([]);
    const [codeP, setCodeP] = useState('');
    const [codeD, setCodeD] = useState('');

    useEffect(() => {
        fetch(`https://provinces.open-api.vn/api/?depth=3`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoadingData(true);
            })
            .catch((error) => {
                setIsLoadingData(true);
                console.error(error);
            });
    }, []);
    return (
        <div className="w-100">
            <InputText
                value={name}
                styleCustomWrapper={{
                    color: theme.color,
                    borderRadius: 'var(--primary_border_radius)',
                    borderBottom: '.2rem solid',
                    borderImageSlice: 1,
                    borderWidth: '.2rem',
                    borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                    marginBottom: '10%',
                    marginTop: '2rem',
                }}
                styleCustomInput={{ color: theme.color }}
                color={theme.color}
                width="100%"
                height="5rem"
                labelInput={'Name '}
                onChange={(e) => setName(e.target.value)}
            ></InputText>
            <InputText
                value={number}
                styleCustomWrapper={{
                    color: theme.color,
                    borderRadius: 'var(--primary_border_radius)',
                    borderBottom: '.2rem solid',
                    borderImageSlice: 1,
                    borderWidth: '.2rem',
                    borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                    marginBottom: '10%',
                    marginTop: '2rem',
                }}
                styleCustomInput={{ color: theme.color }}
                color={theme.color}
                width="100%"
                height="5rem"
                labelInput={'Your Number'}
                onChange={(e) => setNumber(e.target.value)}
            ></InputText>
            <DropDown
                nameInput="Province / City"
                nameSearch={city}
                setNameSearch={setCity}
                isLoadingData={isLoadingData}
                setIsLoadingData={setIsLoadingData}
                data={data}
                setCodeP={setCodeP}
            ></DropDown>
            <DropDown
                nameInput="District"
                nameSearch={district}
                setNameSearch={setDistrict}
                isLoadingData={isLoadingData}
                setIsLoadingData={setIsLoadingData}
                data={data}
                setCodeP={setCodeP}
                setCodeD={setCodeD}
                codeP={codeP}
                type="d"
            ></DropDown>
            <DropDown
                nameInput="Wards"
                nameSearch={wards}
                setNameSearch={setWards}
                isLoadingData={isLoadingData}
                setIsLoadingData={setIsLoadingData}
                data={data}
                codeP={codeP}
                codeD={codeD}
                type="w"
            ></DropDown>
            <InputText
                value={detail}
                styleCustomWrapper={{
                    color: theme.color,
                    borderRadius: 'var(--primary_border_radius)',
                    border: '1px solid',
                    borderImageSlice: 1,
                    borderWidth: '1px',
                    borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                    marginBottom: '10%',
                    marginTop: '2rem',
                }}
                styleCustomInput={{ color: theme.color }}
                color={theme.color}
                width="100%"
                height="5rem"
                labelInput={'Detail address'}
                onChange={(e) => setDetail(e.target.value)}
            ></InputText>
        </div>
    );
};
export default FormAddress;
