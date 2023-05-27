import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;

    #clicked__btn {
        background: #F0F0F0;
        border-radius: 5.69014px;
    }

    .category__section{
        .check__cicle__section {
            display: flex;
            margin-top: 10px;
            height: 30px;
            width: 170px;
            div {
                margin-left: 2vw;
            }
        }

        .selected__btn {
            border: 0.948357px solid #0062FF;
            background: #00B66D;
            border-radius: 50px;
            height: 13px;
        }

        .unselected__btn {
            border: 0.948357px solid #0062FF;
            background: white;
            border-radius: 50px;
            height: 13px;
        }
    }

    .filter__section {
        width: 170px;
        border-top: 1px solid #E3E3E3;
        border-bottom: 1px solid #E3E3E3;
        margin-top: 40px;

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
`;

function PcMenus() {
    const [selectedCategory, setSelectedCategory] = useState('Trending');

    return (
        <Main>
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
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" id="check1" />
                            <label for="check1"></label></div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw'}}>Diamond</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" id="check2" />
                            <label for="check2"></label></div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>Gold</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <input type="checkbox" id="check3" />
                            <label for="check3"></label></div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>Silver</div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default PcMenus
