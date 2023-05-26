import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width : 100vw;
    height : 100vh;
    background-color : rgba(0,0,0,0.2);
    z-index : 100;

    display :flex; 
    justify-content:center;
    align-items :center;

    .login_modal {
        width: 455px;
        height: 409px;
        border-radius: 5.98873px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
            #login__modal__contents__logo__section {
                    margin-left: 20px;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 40.4432px;
                    line-height: 61px;
                    color: #4A4A4A;

                    #login__modal__contents__title {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: '#4A4A4A';
                    }
            }
            .login__modal__contents__middle__title {
                    font-family: 'Mulish';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 22.9205px;
                    line-height: 120%;
                    letter-spacing: 0.005em;
                    color: #11142D;
                    display: flex;
                    justify-content: center;
                    margin-left: 20px;
            }

            .login__modal__contents__cycle__box {
                display: flex;
                justify-content: space-around;
                .login__modal__contents__cycle{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    border: 0.789423px solid rgba(0, 0, 0, 0.1);
                    border-radius: 50px;
                }
            }

            .login__modal__contents__privacy {
                font-family: 'Mulish';
                font-style: normal;
                font-weight: 400;
                font-size: 6.70737px;
                line-height: 120%;
                letter-spacing: 0.005em;
                color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
            }
    }

`;

function LoginModal() {
    return (
        <Main>
            <div className='login_modal'>
                <div classname="login__modal__contents" style={{ height: '300px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                    <div id="login__modal__contents__logo__section">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <img src="./onepick_logo.png" style={{ width: '50px', height: '50px' }} />
                            </div>
                            <div className="login__modal__contents__title">1PICK</div>
                        </div>
                    </div>
                    <div className="login__modal__contents__middle__title">
                        Connect Your Wallet
                    </div>
                    <div className="login__modal__contents__cycle__box">
                        <div className="login__modal__contents__cycle"><img src="./fox__icon.png" style={{ width: '20px', height: '20px'}}/></div>
                        <div className="login__modal__contents__cycle"><img src="./crop__icon.png" style={{ width: '20px', height: '12px'}}/></div>
                        <div className="login__modal__contents__cycle"><img src="./fill__icon.png" style={{ width: '20px', height: '20px'}}/></div>
                    </div>
                    <div className="login__modal__contents__privacy">Privacy . Terms</div>
                </div>
            </div>
        </Main>
    )
}

export default LoginModal
