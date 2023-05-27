import React, { useState, useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { MdOutlineCancel } from 'react-icons/md';
import { BsWallet } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { TfiWorld } from 'react-icons/tfi';
import { BsMoon, BsQuestionCircle } from 'react-icons/bs';
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';


const Main = styled.div`
    .side__menu__section {

        .side-menu {
            position: fixed;
            top: 0;
            left: -300px; /* 초기에는 화면 왼쪽 밖으로 이동 */
            width: 350px;
            height: 100%;
            transition: transform 0.3s ease; /* transform 속성에 애니메이션 효과 추가 */
            background: #FFFFFF;
            border-right: 1px solid rgba(0, 182, 109, 0.2);
            border-radius: 0px 10px 10px 0px;
        }

        .side-menu.open {
            left: 0px;
            transform: translateX(0); /* 열릴 때 사이드 메뉴를 왼쪽으로 이동시킴 */
            padding: 30px;

            .side__menu__section__top {
                display: flex;
                justify-content: space-between;
                .logo__section {
                    margin-left: 20px;
                    display: flex;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 25.9945px;
                    line-height: 39px;

                    .title {
                        display: flex;
                        align-items: flex-end;
                        margin-top: 5px;
                        color: '#4A4A4A';
                    }
                }
                .profile__section {
                    display: flex;
                    align-items: center;
                    font-family: 'Fira Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 11.9591px;
                    line-height: 27px;
                    color: #00B66D;

                    width: 150px;
                    .profill__box {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        border: 0.816471px solid #00B66D;
                        border-radius: 24.4941px;
                        height: 33.4px;
                        width: 100%;
                    }
                }
            }
            .category__section{
                margin: 30px 0px 0px 20px;
        
                .check__cicle__section {
                    display: flex;
                    margin-top: 10px;
                    height: 30px;
                    width: 170px;
                    /* color: #00B66D; */
                    div {
                        margin-left: 2vw;
                    }
                }

                #clicked__btn {
                    color: #00B66D;
                }

                .selected__btn {
                    border: 0.948357px solid #00B66D;
                    background: #00B66D;
                    border-radius: 50px;
                    height: 13px;
                }

                .unselected__btn {
                    border: 0.948357px solid black;
                    background: white;
                    border-radius: 50px;
                    height: 13px;
                }
            }
            .filter__section {
                width: 170px;
                margin: 40px 0px 20px 20px;
                

                input[type="checkbox"]{
                    display: none;
                }
                input[type="checkbox"] + label{
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    border:1.00516px solid rgba(45, 45, 45, 0.6);
                    border-radius: 2.01032px;   
                    /* position: relative; */
                }
                input[id="check1"]:checked + label::after{
                    content:'✔';
                    font-size: 15px;
                    width: 15px;
                    height: 15px;
                    text-align: center;
                    /* position: absolute; */
                    left: 0;
                    top:0;
                }
                input[id="check2"]:checked + label::after{
                    content:'✔';
                    font-size: 15px;
                    width: 15px;
                    height: 15px;
                    text-align: center;
                    /* position: absolute; */
                    left: 0;
                    top:0;
                }
                input[id="check3"]:checked + label::after{
                    content:'✔';
                    font-size: 15px;
                    width: 15px;
                    height: 15px;
                    text-align: center;
                    /* position: absolute; */
                    left: 0;
                    top:0;
                }

                .checkbox__section {
                    display: flex;
                    flex-direction: column;
                    margin-left: 2vw;
                    margin-bottom: 30px;
                }
            }

            .setting__section {
                margin: 50px 0px 0px 20px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 15.8538px;
                line-height: 19px;
                color: #383838;

                .for__align__item__center {
                    display: flex;
                    align-items: center;
                    margin-left: 20px;
                }
            }
        }
    }
`;

const SideMenus = forwardRef((props, ref) => {
    const [selectedCategory, setSelectedCategory] = useState('Trending');
    const [nightMode, setNightMode] = useState(false);
    let menuRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef && !menuRef.current.contains(event.target)) {
                props.toggleMenu();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <Main ref={menuRef}>
            <div className="side__menu__section">
                <div className={`side-menu ${props.isSideMenusOpen ? 'open' : ''}`}>
                    <div className="side__menu__section__top">
                        <div className="logo__section">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="./onepick_logo.png" style={{ width: '30px', height: '30px' }} />
                            </div>
                            <div className="title">1PICK</div>
                        </div>
                        <div className="profile__section">
                            <div className="profill__box">
                                <BsWallet color="#00B66D" size={13} />
                                <div>Connect wallet</div>
                                <div> | </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}><CgProfile color={'#00B66D'} size={13} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="category__section" >
                        <div className="check__cicle__section" id={selectedCategory === 'Trending' ? 'clicked__btn' : ''}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button
                                    className={selectedCategory === 'Trending' ? 'selected__btn' : 'unselected__btn'}
                                    onClick={() => {
                                        setSelectedCategory('Trending');
                                    }}
                                ></button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>Trending</div>
                        </div>
                        <div className="check__cicle__section" id={selectedCategory === 'New' ? 'clicked__btn' : ''}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button
                                    className={selectedCategory === 'New' ? 'selected__btn' : 'unselected__btn'}
                                    onClick={() => {
                                        setSelectedCategory('New');
                                    }}
                                ></button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>New</div>
                        </div>
                        <div className="check__cicle__section" id={selectedCategory === 'Ending Soon' ? 'clicked__btn' : ''}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button
                                    className={selectedCategory === 'Ending Soon' ? 'selected__btn' : 'unselected__btn'}
                                    onClick={() => {
                                        setSelectedCategory('Ending Soon');
                                    }}
                                ></button></div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>Ending Soon</div>
                        </div>
                        <div className="check__cicle__section" id={selectedCategory === 'Volume' ? 'clicked__btn' : ''}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button
                                    className={selectedCategory === 'Volume' ? 'selected__btn' : 'unselected__btn'}
                                    onClick={() => {
                                        setSelectedCategory('Volume');
                                    }}
                                ></button></div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>Volume</div>
                        </div>
                    </div>
                    <div className="filter__section">
                        <h4 style={{ color: '#A3A3A3' }}>Filter</h4>
                        <div className="checkbox__section">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="checkbox" id="check1" />
                                    <label for="check1"></label></div>
                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>Diamond</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="checkbox" id="check2" />
                                    <label for="check2"></label></div>
                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>Gold</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="checkbox" id="check3" />
                                    <label for="check3"></label></div>
                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>Silver</div>
                            </div>
                        </div>
                    </div>
                    <div className="setting__section">
                        <div style={{ display: 'flex' }} >
                            <div className="for__align__item__center"><TfiWorld size={27} /></div>
                            <div className="for__align__item__center">Language</div>
                            <div className="for__align__item__center">{`en >`}</div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '20px' }} >
                            <div className="for__align__item__center"><BsMoon size={27} /></div>
                            <div className="for__align__item__center">Night Mood</div>
                            <div className="for__align__item__center">{!nightMode ?
                                <BiToggleLeft onClick={() => { setNightMode(!nightMode) }} size={27} />
                                : <BiToggleRight onClick={() => { setNightMode(!nightMode) }} size={27} />}</div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div className="for__align__item__center"><BsQuestionCircle size={27} /></div>
                            <div className="for__align__item__center">Help</div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
});

export default SideMenus;
