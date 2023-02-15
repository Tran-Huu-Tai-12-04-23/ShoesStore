import { useContext, useState, memo, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';

import { ThemeApp } from '../../Utils/context';
import Search from '../../Components/Search';
import Button from '../../Components/Button';
import DisplayItem from '../../Components/DisplayItem';
import Menu from '../../Components/Menu';
import FilterProduct from './FilterProduct';
import Header from '../../Components/Header';

import { AiTwotoneSetting } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { RxCaretSort } from 'react-icons/rx';
import { FcGenericSortingAsc, FcGenericSortingDesc } from 'react-icons/fc';
import { IoIosArrowUp } from 'react-icons/io';

const DisplayProduct = ({ typeProductActive = 'All' }) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [showFilter, setShowFilter] = useState(false);
    const [type, setType] = useState('all');
    const [gender, setGender] = useState('unisex');
    const [showMenuSortOptions, setShowMenuSortOptions] = useState(false);
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
    const [numberProduct, setNumberProduct] = useState(8);
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

    useEffect(() => {
        let res = [];
        products.map((item, index) => {
            if (filter(index, numberProduct, item, dataFilter) === true) {
                res = [...res, item];
            }
        });
        setProductFiltered(res);
    }, [dataFilter]);

    return (
        <div
            style={{
                background: theme.background,
            }}
        >
            <Header></Header>
            <div
                className="container"
                style={{
                    color: theme.color,
                    overflow: 'hidden',
                    marginTop: 'var(--height_header)',
                    height: '100%',
                }}
            >
                <div className="row">
                    <div className="col-lg-12 mt-1 ">
                        <Search />
                    </div>
                    <div
                        className="col-lg-12  row "
                        style={{
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                            className="w-50 "
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
                                position: 'relative',
                                paddingRight: 0,
                            }}
                        >
                            <div
                                className="d-xl-none d-lg-none"
                                style={{
                                    minWidth: '100px',
                                }}
                            >
                                <Button
                                    nameButton="Filter"
                                    width="100%"
                                    addStyleCustom={{
                                        color: theme.color,
                                        borderRadius: 'var(--primary_border_radius)',
                                        minWidth: '100px',
                                    }}
                                    icon={
                                        <AiTwotoneSetting
                                            style={{
                                                color: theme.color,
                                                fontSize: '24px',
                                            }}
                                        />
                                    }
                                    action={(e) => {
                                        setShowFilter(!showFilter);
                                    }}
                                    positionIcon="right"
                                />
                            </div>
                            <Button
                                nameButton="Sort By"
                                addStyleCustom={{
                                    color: theme.color,
                                    borderRadius: 'var(--primary_border_radius)',
                                    minWidth: '100px',
                                    padding: 0,
                                    transform: ' translateX(24px)',
                                }}
                                icon={
                                    <IoIosArrowDown
                                        style={{
                                            color: theme.color,
                                            fontSize: '24px',
                                        }}
                                    />
                                }
                                action={(e) => {
                                    setShowMenuSortOptions(!showMenuSortOptions);
                                }}
                                positionIcon="right"
                                width="20%"
                            />
                            <Menu
                                display={showMenuSortOptions}
                                position="absolute"
                                bottom="-140px"
                                right="0"
                                backgroundColor={theme.secondBackgroundColor}
                                addStyle={{
                                    color: '#ccc',
                                    borderRadius: 'var(--primary_border_radius)',
                                    padding: '12px',
                                    maxHeight: '150px',
                                    zIndex: 2,
                                    color: theme.color,
                                    '--background_color_hover': theme.thirdBackgroundColor,
                                }}
                                width="unset"
                            >
                                <div
                                    style={{
                                        minWidth: '250px',
                                        padding: '4px 12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderRadius: 'var(--primary_border_radius)',
                                    }}
                                >
                                    <label>Auto(Not Sorted)</label>
                                    <RxCaretSort
                                        style={{
                                            color: theme.color,
                                            fontSize: '32px',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        minWidth: '200px',
                                        padding: '4px 12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        borderRadius: 'var(--primary_border_radius)',
                                        alignItems: 'center',
                                    }}
                                >
                                    <label>Sort Asc follow cost</label>
                                    <FcGenericSortingAsc
                                        style={{
                                            color: theme.color,
                                            fontSize: '32px',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        minWidth: '200px',
                                        padding: '4px 12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        borderRadius: 'var(--primary_border_radius)',
                                        alignItems: 'center',
                                    }}
                                >
                                    <label>Sort Desc follow cost</label>
                                    <FcGenericSortingDesc
                                        style={{
                                            color: theme.color,
                                            fontSize: '32px',
                                        }}
                                    />
                                </div>
                            </Menu>
                        </div>
                        <div
                            className="d-lg-none d-xl-none"
                            style={{
                                position: 'absolute',
                                left: 12,
                                right: 0,
                                top: 'calc(var(--height_header)/2)',
                                display: showFilter ? 'block' : 'none',
                                backgroundColor: `${theme.thirdBackgroundColor}`,
                                borderRadius: '0 0 var(--primary_border_radius)  var(--primary_border_radius) ',
                            }}
                        >
                            <Menu
                                position={''}
                                display={true}
                                left={12}
                                right={0}
                                addStyle={{
                                    animation: 'unset',
                                    transition: 'all .4s ease-in-out',
                                }}
                                backgroundColor="inherit"
                                width="100%"
                            >
                                <FilterProduct
                                    typeShoes={typeShoes}
                                    setTypeShoes={setTypeShoes}
                                    setType={setType}
                                    type={type}
                                    listPrice={listPrice}
                                    setListPrice={setListPrice}
                                    rangePrice={rangePrice}
                                    setRangePrice={setRangePrice}
                                    gender={gender}
                                    setGender={setGender}
                                    dataFilter={dataFilter}
                                    setDataFilter={setDataFilter}
                                    setNumberProduct={setNumberProduct}
                                    setShowFilter={setShowFilter}
                                />
                            </Menu>
                            <Button
                                nameButton="Close"
                                addStyleCustom={{
                                    margin: '0 auto',
                                    textAlign: 'center',
                                    padding: '12px 24px 10px 12px',
                                    backgroundColor: `${theme.secondBackgroundColor}`,
                                    borderRadius: ' var(--primary_border_radius)  var(--primary_border_radius) 0 0',
                                    color: '#fff',
                                }}
                                width="150px"
                                icon={
                                    <IoIosArrowUp
                                        style={{
                                            marginRight: 12,
                                        }}
                                    />
                                }
                                action={(e) => setShowFilter(!showFilter)}
                            ></Button>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 d-xl-block d-lg-block d-md-none d-sm-none-custom"
                        style={{
                            overflow: 'scroll',
                            height: '70vh',
                        }}
                    >
                        <FilterProduct
                            typeShoes={typeShoes}
                            setTypeShoes={setTypeShoes}
                            setType={setType}
                            type={type}
                            listPrice={listPrice}
                            setListPrice={setListPrice}
                            rangePrice={rangePrice}
                            setRangePrice={setRangePrice}
                            gender={gender}
                            setGender={setGender}
                            dataFilter={dataFilter}
                            setDataFilter={setDataFilter}
                            setNumberProduct={setNumberProduct}
                        />
                    </div>
                    <div
                        className={` main_content-show-cart pb-3  w-lg-83 w-xl-83 w-md-100 
                        h-md-85 h-lg-70 h-xl-75 
                        `}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                            // height: '76.7vh',
                            overflowY: 'scroll',
                            transition: 'all .4s linear',
                            // width: 'calc(100% / 12 * 10)',
                            padding: 0,
                        }}
                    >
                        <div className="container">
                            <div
                                className="row g-2 "
                                style={{
                                    minHeight: '500px',
                                }}
                            >
                                <DisplayItem
                                    yItem
                                    data={productFiltered}
                                    // width={`${!showFilter ? 'calc(100% / 4 - 12px)' : 'calc(100%/3 - 12px)'}`}
                                    classNameCustom={'col-xl-3 col-lg-4 col-md-6 col-sm-12'}
                                    numberProduct={numberProduct}
                                    dataFilter={dataFilter}
                                ></DisplayItem>
                            </div>
                        </div>

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

export default memo(DisplayProduct);
