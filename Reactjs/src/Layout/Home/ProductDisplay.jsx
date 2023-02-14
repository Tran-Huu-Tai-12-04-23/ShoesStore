import { useContext, useState, memo, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';

import nikeMax1 from '../../assets/img/nikeMax1.png';

import { ThemeApp } from '../../Utils/context';
import Search from '../../Components/Search';
import Button from '../../Components/Button';
import InputCount from '../../Components/InputCount';
import DisplayItem from '../../Components/DisplayItem';

import { RxEyeNone } from 'react-icons/rx';
import { BiShowAlt } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

const ProductDisplay = ({ typeProductActive = 'All' }) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [type, setType] = useState('all');
    const [gender, setGender] = useState('unisex');
    const [rangePrice, setRangePrice] = useState({
        type: 'All',
        priceFirst: '',
        priceLast: '',
    });

    const [dataFilter, setDataFilter] = useState({
        typeShoes: type,
        gender: 'unisex',
        rangePrice,
    });
    const [showFilter, setShowFilter] = useState(true);
    const [typeShoes, setTypeShoes] = useState([
        {
            id: 'all',
            name: 'All',
        },
        {
            id: 'tennis',
            name: 'Tennis',
        },
        {
            id: 'football',
            name: 'Football',
        },
        {
            name: 'LifeStyle',
            id: 'lifeStyle',
        },
        {
            name: 'Golf',
            id: 'golf',
        },
    ]);
    const [numberProduct, setNumberProduct] = useState(showFilter ? 6 : 8);
    const [listPrice, setListPrice] = useState([
        {
            type: 'All',
            priceFirst: '',
            priceLast: '',
        },
        {
            type: 'Under 10$',
            priceFirst: 0,
            priceLast: 10,
        },
        {
            type: '10$ - 100$',
            priceFirst: 10,
            priceLast: 100,
        },
        {
            type: '100$ - 200$',
            priceFirst: 100,
            priceLast: 200,
        },
    ]);
    const [products, setProducts] = useState([
        {
            id: uuid(),
            name: 'Nike air',
            cost: 80,
            des: 'Men’s Life Style',
            gender: 'Men',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 110,
            des: 'Men’s Life Style',
            gender: 'Men',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 220,
            des: 'Men’s Life Style',
            gender: 'Unisex',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 100,
            des: 'Men’s Life Style',
            gender: 'Men',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 100,
            des: 'Men’s Life Style',
            gender: 'Women',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 50,
            des: 'Men’s Life Style',
            gender: 'Men',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 50,
            des: 'Men’s Life Style',
            gender: 'Women',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 200,
            des: 'Men’s Life Style',
            gender: 'Women',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 100,
            des: 'Men’s Life Style',
            gender: 'Unisex',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 10,
            des: 'Men’s Life Style',
            gender: 'Unisex',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 30,
            des: 'Men’s Life Style',
            gender: 'Women',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 100,
            des: 'Men’s Life Style',
            gender: 'Women',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 70,
            des: 'Men’s Life Style',
            gender: 'Women',
        },
        {
            id: uuid(),
            name: 'Nike air',
            cost: 100,
            des: 'Men’s Life Style',
            gender: 'Men',
        },
    ]);
    const [productFiltered, setProductFiltered] = useState([]);
    const filter = (index, numberProduct, item, dataFilter) => {
        if (
            item.gender.toLowerCase() !== dataFilter.gender.toLowerCase() &&
            dataFilter.gender.toLowerCase() !== 'unisex'
        ) {
            return false;
        }

        if (
            item.cost < dataFilter.rangePrice['priceFirst'] ||
            (item.cost >= dataFilter.rangePrice['priceLast'] && dataFilter.rangePrice.type.toLowerCase() !== 'all')
        )
            return false;
        return true;
    };

    const renderTypeShoes = () => {
        return typeShoes.map((it) => {
            return (
                <li
                    key={uuid()}
                    style={{
                        color: it.id === type ? '#e90064' : theme.color,
                    }}
                    onClick={(e) => {
                        setType(it.id);
                    }}
                >
                    {it.name}
                </li>
            );
        });
    };
    const renderPrice = () => {
        return listPrice.map((it) => {
            return (
                <div
                    key={uuid()}
                    style={{
                        width: '100%',
                    }}
                >
                    <Button
                        nameButton={it.type}
                        width="90%"
                        addStyleCustom={{
                            borderRadius: 'var(--primary_border_radius)',
                            color: theme.color,
                            justifyContent: 'flex-start',
                            backgroundColor: rangePrice.type === it.type ? theme.secondBackgroundColor : 'unset',
                        }}
                        action={(e) => setRangePrice(it)}
                    ></Button>
                </div>
            );
        });
    };
    useEffect(() => {
        let res = [];
        products.map((item, index) => {
            if (filter(index, numberProduct, item, dataFilter) === true) {
                res = [...res, item];
            }
        });
        setProductFiltered(res);
    }, [dataFilter]);

    // useEffect(() => {
    //     let count = 0;
    //     products.map((pr) => {
    //         if (pr.gender.toLowerCase() === dataFilter.gender.toLowerCase()) {
    //             count++;
    //         }
    //     });
    //     setNumberProduct(count);
    // }, [dataFilter]);
    return (
        <div
            className="container"
            style={{
                color: theme.color,
                overflow: 'hidden',
            }}
        >
            <div className="row">
                <div className="col-lg-12 mt-2">
                    <Search />
                </div>
                <div className="col-lg-12  row">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                        className="w-50"
                    >
                        <h1
                            style={{
                                fontSize: '24px',
                                marginRight: '4px',
                            }}
                        >
                            All
                        </h1>
                        <span>(391)</span>
                    </div>
                    <div
                        className="w-50 container-fluid"
                        style={{
                            color: theme.color,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            nameButton="Hidden Filter"
                            addStyleCustom={{
                                color: theme.color,
                                display: showFilter ? 'block' : 'none',
                                maxWidth: '150px',
                                borderRadius: 'var(--primary_border_radius)',
                                padding: '0 12px',
                            }}
                            icon={
                                <RxEyeNone
                                    style={{
                                        color: theme.color,
                                        fontSize: '24px',
                                    }}
                                    width="unset"
                                />
                            }
                            positionIcon="right"
                            action={(e) => {
                                setShowFilter(!showFilter);
                            }}
                        />
                        <Button
                            nameButton="Show Filter"
                            addStyleCustom={{
                                color: theme.color,
                                display: !showFilter ? 'block' : 'none',
                                maxWidth: '150px',
                                borderRadius: 'var(--primary_border_radius)',
                            }}
                            icon={
                                <BiShowAlt
                                    style={{
                                        color: theme.color,
                                        fontSize: '24px',
                                    }}
                                    width="unset"
                                />
                            }
                            positionIcon="right"
                            action={(e) => {
                                setShowFilter(!showFilter);
                            }}
                        />
                        <Button
                            nameButton="Sort By"
                            addStyleCustom={{
                                color: theme.color,
                                borderRadius: 'var(--primary_border_radius)',
                                maxWidth: '150px',
                            }}
                            icon={
                                <IoIosArrowDown
                                    style={{
                                        color: theme.color,
                                        fontSize: '24px',
                                    }}
                                />
                            }
                            positionIcon="right"
                        />
                    </div>
                </div>
                <div className="col-lg-12 mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div
                        className="w-custom-15"
                        style={{
                            display: showFilter ? 'block' : 'none',
                        }}
                    >
                        <ul className="name_type_shoes">{renderTypeShoes()}</ul>
                        <div className="wrapper_select_gender mb-2">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Unisex"
                                    onChange={(e) => setGender(e.target.value)}
                                    checked={dataFilter.gender === 'unisex' ? true : false}
                                />
                                <span>Unisex</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Men"
                                    onChange={(e) => setGender(e.target.value)}
                                    checked={dataFilter.gender === 'men' ? true : false}
                                />
                                <span>Men</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Women"
                                    onChange={(e) => setGender(e.target.value)}
                                    checked={dataFilter.gender === 'women' ? true : false}
                                />
                                <span>Women</span>
                            </label>
                        </div>
                        <div className="wrapper_select_price">
                            <h1
                                style={{
                                    marginLeft: '12px',
                                    marginBottom: '12px',
                                    margin: '12px',
                                }}
                            >
                                Price
                            </h1>
                            <div
                                className=" pb-2"
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                {renderPrice()}
                            </div>
                            <Button
                                nameButton="Apply"
                                width="70%"
                                addStyleCustom={{
                                    color: theme.color,
                                    margin: '0 auto',
                                    borderRadius: '30px',
                                    marginBottom: '12px',
                                    backgroundColor: theme.secondBackgroundColor,
                                }}
                                height="30px"
                                action={(e) => {
                                    setDataFilter((prev) => {
                                        return { gender, typeShoes: type, rangePrice };
                                    });
                                    setNumberProduct(6);
                                }}
                            ></Button>
                        </div>
                    </div>
                    <div
                        className={`${showFilter ? 'w-custom-80' : 'w-100'} main_content-show-cart pb-3`}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                            height: '72vh',
                            overflowY: 'scroll',
                            transition: 'all .4s linear',
                        }}
                    >
                        <DisplayItem
                            yItem
                            data={productFiltered}
                            width={`${!showFilter ? 'calc(100% / 4 - 12px)' : 'calc(100%/3 - 12px)'}`}
                            numberProduct={numberProduct}
                            dataFilter={dataFilter}
                        ></DisplayItem>
                        <div className="w-100">
                            <Button
                                nameButton="See More"
                                addStyleCustom={{
                                    color: theme.color,
                                    borderRadius: 'var(--primary_border_radius)',
                                    marginTop: '24px',
                                    backgroundColor: theme.secondBackgroundColor,
                                    margin: '24px auto',
                                    maxWidth: '300px',
                                    display: numberProduct <= productFiltered.length - 1 ? 'block' : 'none',
                                }}
                                width="50%"
                                action={(e) => {
                                    setNumberProduct(products.length);
                                }}
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductDisplay);
