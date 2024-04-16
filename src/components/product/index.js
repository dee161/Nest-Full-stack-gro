import React from 'react'
import './style.css'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ShoppingCart } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
const Product = (props) => {
    return (
        <div className='productThumb'>
            <Link>
            {
                props.tag!==null&& props.tag!==undefined&&<span className={`badge ${props.tag}`}>{props.tag}</span>
            }
                
                <div className="imgWrapper">

                    <img src="https://nest.apexcode.info/media/products/imgs/product-10-1.jpg" className='w-100' />
                    <div className='overlay transition'>
                        <ul className='list list-inline mb-0'>
                            <Tooltip title="Add to Wishlist" placement="top">


                                <li className='list-inline-item'>
                                    <a className='cursor'>
                                        <FavoriteBorderOutlinedIcon />
                                    </a>
                                </li>
                            </Tooltip>

                            <Tooltip title="Compare" placement="top">
                                <li className='list-inline-item'>
                                    <a className='cursor' >
                                        <CompareArrowsOutlinedIcon />
                                    </a>
                                </li>
                            </Tooltip>
                            <Tooltip title="Quick View" placement="top">
                                <li className='list-inline-item'>
                                    <a className='cursor'>
                                        <RemoveRedEyeOutlinedIcon />
                                    </a>
                                </li>
                            </Tooltip>
                        </ul>
                    </div>
                </div>
            </Link>

            <div className="info">
                <span className='d-block catName'>Snack</span>
                <h4 className='title'><Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <span className='brand d-block'>By <a className='text-g'>NestFood</a></span>

                <div className="d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center">
                        <span className='price'>$28.85</span>
                        <span className='oldPrice'>$32.85</span>
                    </div>

                    <Button className="bg-g"><ShoppingCart />ADD</Button>
                </div>
            </div>
        </div>
    )
}

export default Product