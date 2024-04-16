import React, { useState } from 'react'
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/material';

const Select = (props) => {

        const [isOpenSelect, setisOpenSelect] = useState(false)
        const [selectedIndex, setselectedIndex] = useState(0);
        const [selectedItem, setselectedItem] = useState(props.placeholder);

        const [listData, setListData] = useState(props.data);
        const [listData2, setListData2] = useState(props.data);

        const openSelect = () => {
                setisOpenSelect(!isOpenSelect);
        }

        const closeSelect = (index, name) => {
                setselectedIndex(index);
                setisOpenSelect(false);
                setselectedItem(name);
        }


        const filterList = (e) => {
                const keyword = e.target.value.toLowerCase();
                const list = listData2.filter((item) => {
                        return item.toLowerCase().includes(keyword);

                })

                const list2 = list.filter((item,index) => list.indexOf(item) === index);
                setListData(list2)
        }
        return (
                <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
                        <div className='selectDrop cursor position-relative'>
                                {props.icon}
                                <span className='openSelect' onClick={openSelect}  > {selectedItem.length>14 ? selectedItem.substr(0,14) + '...': selectedItem} <KeyboardArrowDownIcon className='arrow' /></span>
                                {
                                        isOpenSelect === true &&
                                        <div className='selectDropdown'>
                                                <div className='searchField'>
                                                        <input type="text" placeholder='Search here...' onChange={filterList} />

                                                </div>
                                                <ul className='searchResults'>
                                                        {
                                                                listData.map((item, index) => {
                                                                        return (
                                                                                <li key={index} onClick={() => closeSelect(index, item)} className={`${selectedIndex === index ? 'active' : ''} `}>{item}</li>

                                                                        )
                                                                })
                                                        }

                                                </ul>
                                        </div>
                                }

                        </div>
                </ClickAwayListener>


        )
}

export default Select
