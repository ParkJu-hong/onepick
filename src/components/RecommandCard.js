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
                        <div style={{ display: 'flex', alignItems: 'center', color: '#8D8D8D', fontSize: '8px' }}><FiBarChart /> <div>$516.16K</div></div>
                        <div style={{ marginLeft: '10px'}}><FaRegThumbsUp color={'#DBBF00'} size={10} /></div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default RecommandCard
