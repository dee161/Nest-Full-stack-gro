import React, { useState, useEffect } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.png.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconCompare from '../../assets/images/icon-compare.svg'
import IconCart from '../../assets/images/icon-cart.svg'
import IconWishlist from '../../assets/images/icon-heart.svg'
import IconAccount from '../../assets/images/icon-user.svg'
import { Button } from '@mui/material';
import { ClickAwayListener } from '@mui/material';
import Nav from './nav/nav';

const Header = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false);

  const [categories, setCategories] = useState([

    'Milks and Dairies',
    'Wines & Drinks',
    'Fresh Seafood',
    'Clothing & beauty',
    'Pet Foods & Toy',
    'Fast food',
    'Baking material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice',
    'Milks and Dairies',
  ]);


  const countryList = [];

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries');
  }, []);



  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countryList.push(item.country)
          })

        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
    <div className="headerWrapper">
      <header>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-2'>
              <img src={Logo} alt='' />
            </div>
            {/* headerSearch Start here  */}
            <div className='col-sm-5'>
              <div className='headerSearch d-flex align-items-center'>
                <Select data={categories} placeholder='All Categories' icon={false} />

                <div className='search'>
                  <input type='text' placeholder='Search for items...' />
                  <SearchIcon className='searchIcon cursor' />
                </div>
              </div>
            </div>
            {/* headerSearch end here  */}
            <div className='col-sm-5 d-flex align-items-center'>
              <div className='ml-auto d-flex align-items-center'>
                <div className='countryWrapper'>
                  <Select data={countryList} placeholder='Your Location' icon={<LocationOnIcon style={{ opacity: '0.5' }} />} />
                </div>


                <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                  <ul className='list list-inline mb-0 headerTabs'>

                    <li className='list-inline-item'>
                      <span><img src={IconCompare} />
                        <span className='badge bg-success rounded-circle'>3</span>
                        Compare</span></li>
                    <li className='list-inline-item'>
                      <span><img src={IconCart} />
                        <span className='badge bg-success rounded-circle'>3</span>
                        Wishlist</span></li>
                    <li className='list-inline-item'>
                      <span><img src={IconWishlist} />
                        <span className='badge bg-success rounded-circle'>3</span>
                        Cart</span></li>
                    <li className='list-inline-item' >
                      <span onClick={() => setisOpenDropDown(!isOpenDropDown)}><img src={IconAccount} />
                        Account</span>
                      {
                        isOpenDropDown !== false &&
                        <ul className='dropdownMenu'>
                          <li><Button>My Account</Button></li>
                          <li><Button>Order Tracking</Button></li>
                          <li><Button>My Wishlist</Button></li>
                          <li><Button>Setting</Button></li>
                          <li><Button>Sign out</Button></li>

                        </ul>
                      }



                    </li>


                  </ul>
                </ClickAwayListener>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
      </div>
    </>
  );
};

export default Header;
