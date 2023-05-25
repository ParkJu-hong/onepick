import React from 'react';
import styled from 'styled-components';
import { BsDiscord, BsTwitter } from 'react-icons/bs';

const Main = styled.div`
    .footer__info__section {
        padding: 30px 38px 10px 38px;
        margin-top: 50px;
        background: #FFFFFF;
        display: flex;

        .footer__info__left {
            display: flex;
            flex-direction: column;
            flex: 0.6;
            margin-left: 80px;
            .footer__logo {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 30.6091px;
                line-height: 46px;
                margin-top: 5px;
            }
            .footer__info__left__link__btn {
                display: flex;
                
                .link__btn__box {
                    background: #FFFFFD;
                    box-shadow: 0px 4.66026px 5.82532px rgba(0, 0, 0, 0.05);
                    border-radius: 5.82532px;
                    display: flex;
                    align-items: center;
                    height: 30px;
                }
            }
        }
        .footer__info__middle {
            display: flex;
            flex-direction: column;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 16.7179px;
            line-height: 25px;
            color: #2E2E2E;
            flex: 0.3;

            .footer__small__router {
                font-weight: 400;
                font-size: 7.7436px;
                line-height: 15px;
                color: #2E2E2E;
            }
        }
        .footer__info__right {
            display: flex;
            flex-direction: column;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 16.7179px;
            line-height: 25px;
            color: #2E2E2E;

            .icon__link {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .footer__info__section {
            flex-direction: column;
            align-items: center;

            .footer__info__left {
                margin-left: 0px;
            }
            
            #link__btn__box__two {
                margin-top: 20px;
            }

            .footer__info__left__link__btn {
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .footer__info__middle {
                margin-top: 20px;
            }
            .footer__info__right{
                margin-top: 20px;

                .icon__link {
                    justify-content: center;
                }
            }
        }
    }

`;

function Footer() {
    return (
        <Main>
            <div className="footer__info__section">
                <div className="footer__info__left">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div><img src="./onepick_logo.png" style={{ width: '33px', height: '33px' }} /></div>
                        <div className="footer__logo">
                            <span style={{ color : '#BD2A21'}}>1</span>
                            <span style={{ color : '#2E2E2E'}}>PICK</span>
                        </div>
                    </div>
                    <div className="footer__info__left__link__btn">
                        <div className="link__btn__box"><img src="./uma__link.png" style={{ width: '100px'}}/></div>
                        <div className="link__btn__box" id="link__btn__box__two"><img src="./link2.png" style={{ width: '100px'}} /></div>
                    </div>
                </div>
                <div className="footer__info__middle">
                    <div>Marketplace</div>
                    <div className="footer__small__router">
                        <div style={{ marginTop: '10px'}}>Contact</div>
                        <div style={{ marginTop: '5px'}}>How it works</div>
                        <div style={{ marginTop: '5px'}}>FAQ</div>
                        <div style={{ marginTop: '5px'}}>Blog</div>
                    </div>
                </div>
                <div className="footer__info__right">
                    <div>Join the community</div>
                    <div className="icon__link">
                        <div><BsDiscord size={13} /></div>
                        <div style={{ marginLeft: '10px'}}><BsTwitter size={13} /></div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Footer
