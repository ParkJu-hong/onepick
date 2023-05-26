import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMenuSharp } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsWallet } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import RecommandCard from './RecommandCard';

const Main = styled.div`
    padding: 15px 30px 31px 30px; 
    display: flex;
    justify-content: space-between;

    .menu__section {
        display: flex;

        .search__open__btn {
            display: none;
        } 
    }

    .logo__section {
        margin-left: 20px;
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 30.0577px;
        line-height: 38px;

        .title {
            display: flex;
            align-items: flex-end;
            margin-top: 5px;
            color: '#4A4A4A';
        }
    }

    .search__section {
        display: flex;
        align-items: center;
        .search__bar {
            background: #FFFFFF;
            border: 0.816471px solid rgba(0, 0, 0, 0.1);
            border-radius: 24.4941px 0px 0px 24.4941px;
            width: 302px;
            height: 30px;
            padding-left: 15px;
        }
        .search__button {
            background: #F4F4F4;
            border: 0.816471px solid rgba(48, 48, 48, 0.1);
            border-radius: 0px 24.4941px 24.4941px 0px;
            height: 33.4px;
        }

        .search__recommend__section {
            position: fixed;
            top: 60px;
            left: 35%;
            width: 30vw;
            height: 50vh;
            background: #FFFFFF;
            border: 1px solid #EAEAEA;
            box-shadow: 0px 0px 17.92px rgba(0, 0, 0, 0.05);
            border-radius: 10px;

            .search__recommend__section__infos {
                margin: 30px;
                .search__recommend__section__info__title {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 16px;
                    color: #A3A3A3;
                }
            }
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
        color: #484848;

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


    @media screen and (max-width: 768px) {
        .menu__section {
            width: 100%;
            justify-content: space-between;
            .search__open__btn {
                display: flex;
                align-items: center;
            } 
        }
        .search__section {
            display: none;
        }

        .profile__section {
            display: none;
        }
    }
`;


function Header() {

    const [keyword, setKeyword] = useState('');
    const [showRecommendations, setShowRecommendations] = useState(false);

    const handleInputChange = (event) => {
        const keyword = event.target.value;
        setKeyword(keyword);
    }

    const handleInputFocus = () => {
        setShowRecommendations(true);
    }

    const handleInputBlur = () => {
        setShowRecommendations(false);
    }

    const recommendedKeywords = ['react', 'javascript', 'node.js', 'blah'];

    return (
        <Main>
            <div className="menu__section">
                <div style={{ display: 'flex', alignItems: 'center' }}><IoMenuSharp size={30} /></div>
                <div className="logo__section">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="./onepick_logo.png" style={{ width: '30px', height: '30px' }} />
                    </div>
                    <div className="title">1PICK</div>
                </div>
                <div className="search__open__btn"><AiOutlineSearch /></div>
            </div>
            <div className="search__section">
                <input
                    className="search__bar"
                    placeholder="Search"
                    value={keyword}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <button className="search__button"><AiOutlineSearch color="#00B66D" /></button>
                {showRecommendations && (
                    <div className="search__recommend__section">
                        <div className="search__recommend__section__infos">
                            <div className="search__recommend__section__info__title">Trending</div>
                            <div className="search__recommend__section__info">
                                {recommendedKeywords.map((recommendedKeyword, index) => (
                                    // <div key={index}>{recommendedKeyword}</div>
                                    <RecommandCard />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="profile__section">
                <div className="profill__box">
                    <BsWallet color="#00B66D" size={13} />
                    <div>Connect wallet</div>
                    <div> | </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}><CgProfile size={13} /></div>
                </div>
            </div>
        </Main>
    )
}

export default Header
