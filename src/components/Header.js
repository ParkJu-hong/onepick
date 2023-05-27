import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMenuSharp } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsWallet } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import RecommandCard from './RecommandCard';
import SideMenus from './SideMenus';

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

    .mobile__search__section {
        display: none;
    }

    // 사이드 메뉴 css 시작
    .side-menu {
        position: fixed;
        top: 0;
        left: -300px; /* 초기에는 화면 왼쪽 밖으로 이동 */
        width: 250px;
        height: 100%;
        transition: transform 0.3s ease; /* transform 속성에 애니메이션 효과 추가 */
        background: #FFFFFF;
        border-right: 1px solid rgba(0, 182, 109, 0.2);
        border-radius: 0px 10px 10px 0px;
    }

    .side-menu.open {
        left: 0px;
        transform: translateX(0); /* 열릴 때 사이드 메뉴를 왼쪽으로 이동시킴 */
    }

    .toggle-button {
        /* 토글 버튼 스타일 */
    }

    .menu-items {
        /* 메뉴 아이템 스타일 */
    }
    // 사이드 메뉴 끝

    @media screen and (max-width: 768px) {

        .back__to__prepage {
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 999 !important;
        }


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

        .mobile__search__section {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width : 100vw;
            height : 100vh;
            background-color : white;
            z-index : 100;

            .mobile__search__section__margin {
                margin: 50px;

                .mobile__search__bar__section {
                    display: flex;
                    justify-content: center;

                    .mobile__search__bar {
                        width: 374px;
                        height: 39.99px;
                        background: #FFFFFF;
                        border: 0.74116px solid rgba(0, 0, 0, 0.1);
                        border-radius: 0px;
                    }

                    .mobile__search__btn {
                        width: 47.2px;
                        height: 39.99px;
                        background: #DEDEDE;
                        border: 0.74116px solid rgba(48, 48, 48, 0.1);
                        border-radius: 0px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                .moblile__search__recommend__section {
                    position: fixed;
                    top: 130px;
                    left: 10%;
                    width: 80vw;
                    height: 80vh;

                    .moblile__search__recommend__section__infos {
                        margin: 30px;
                        .moblile__search__recommend__section__info__title {
                            font-family: 'Roboto';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 16px;
                            color: #A3A3A3;
                        }
                        .moblile__search__recommend__section__info {
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }
`;



function Header() {

    const [keyword, setKeyword] = useState('');
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [isSideMenusOpen, setIsSideMenusOpen] = useState(false);

    const toggleMenu = () => {
        setIsSideMenusOpen(!isSideMenusOpen);
    };

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
        <>
            <Main>
                <div className="menu__section">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IoMenuSharp
                            size={30}
                            onClick={() => {
                                toggleMenu();
                            }} />
                    </div>
                    <div className="logo__section">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="./onepick_logo.png" style={{ width: '30px', height: '30px' }} />
                        </div>
                        <div className="title">1PICK</div>
                    </div>
                    <div
                        className="search__open__btn"
                        onClick={() => {
                            setShowRecommendations(true);
                        }}
                    ><AiOutlineSearch /></div>
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
                                        <RecommandCard key={index} />
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
                {/* 모바일일때 검색 페이지 */}
                {showRecommendations && (<><div className="mobile__search__section">
                    <div className="mobile__search__section__margin">
                        <div className="mobile__search__bar__section">
                            <input className="mobile__search__bar" placeholder="Search" />
                            <div className="mobile__search__btn"><AiOutlineSearch color="#333333" /></div>
                        </div>
                        <div className="moblile__search__recommend__section">
                            <div className="moblile__search__recommend__section__infos">
                                <div className="moblile__search__recommend__section__info__title">Trending</div>
                                <div className="moblile__search__recommend__section__info">
                                    {recommendedKeywords.map((recommendedKeyword, index) => (
                                        <div style={{ marginTop: '30px' }}><RecommandCard key={index} /></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="back__to__prepage">
                        <BiArrowBack size={30} onClick={()=>{
                            setShowRecommendations(false);
                        }}/>
                    </div>
                </>
                )}
            </Main>
            {isSideMenusOpen && <SideMenus isSideMenusOpen={isSideMenusOpen} toggleMenu={toggleMenu} />}
        </>
    )
}

export default Header
