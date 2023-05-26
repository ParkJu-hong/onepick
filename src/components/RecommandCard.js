import React from 'react';
import styled from 'styled-components';
import { FiBarChart } from 'react-icons/fi';
import { FaRegThumbsUp } from 'react-icons/fa';

const Main = styled.div`
    .recommand__card__info__section {
        margin: 20px 10px 0px 13px;
        display: flex;

        .recommand__card__info__left {
            display: flex;
            flex: 0.8;
            justify-content: center;
            .recommand__card__info__left__box{
                width: 50px;
                height: 44px;
                background: #F4F6FB;
                border-radius: 4.21653px;
            }
        }
        .recommand__card__info__right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 15px;

            .recommand__card__info__right__top {
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: 500;
                font-size: 12.65px;
                line-height: 15px;
                color: #535353;
            }
            .recommand__card__info__right__bottom {
                display: flex;
                .fibarchart {
                    display: flex;
                    align-items: center;
                    color: #8D8D8D;
                    font-size: 8px;
                }
                .faregtumbsup {
                    margin-left: 10px;
                    font-size: 10px;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .recommand__card__info__section {
            margin: 0px;
            .recommand__card__info__left {
                flex: 0.5;
                .recommand__card__info__left__box {
                    width: 80px;
                    height: 74px;
                }
            }
            .recommand__card__info__right {
                .recommand__card__info__right__top {
                    margin-top: 10px;
                    font-size: 18.65px;
                }

                .recommand__card__info__right__bottom {
                    .fibarchart {
                        font-size: 15px;
                    }
                    .faregtumbsup{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 20px;
                    }
                }
            }
        }
    }
`;

function RecommandCard() {
    return (
        <Main>
            <div className="recommand__card__info__section">
                <div className="recommand__card__info__left">
                    <div className="recommand__card__info__left__box"></div>
                </div>
                <div className="recommand__card__info__right">
                    <div className="recommand__card__info__right__top">
                        Topic headline goes here and this is a demo headline
                    </div>
                    <div className="recommand__card__info__right__bottom">
                        <div className="fibarchart"><FiBarChart /> <div>$516.16K</div></div>
                        <div className="faregtumbsup"><FaRegThumbsUp color={'#DBBF00'} /></div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default RecommandCard
