import React from 'react';
import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa';
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai';
import { FiBarChart } from 'react-icons/fi';

const Main = styled.div`
    background: #FFFFFF;
    border: 0.510269px solid #D0D0D0;
    border-radius: 4.21653px;
    width: 250px;
    height: 128px;

    .card__info__section {
        margin: 20px 10px 0px 13px;

        .card__info__left {
            width: 50px;
            height: 44px;
            background: #F4F6FB;
            border-radius: 4.21653px;
        }

        .card__info__right {
            margin-left: 20px;

            .card__info__right__top {
                display: flex;
                justify-content: space-between;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 8.15882px;
                line-height: 10px;
                color: #686868;
            }
            .card__info__right__middle {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 10.6496px;
                line-height: 19px;
                display: flex;
                align-items: center;
                letter-spacing: -0.363246px;
                color: #4C4E50;
            }
            .card__info__right__bottom {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 6.4767px;
                line-height: 8px;
                display: flex;
                align-items: center;
                color: #686868;
            }
        }

        .card__info__middle {
            margin: 10px;

            .card__info__middle__No {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 6.36317px;
                line-height: 8px;
                display: flex;
                align-items: center;
                color: #FF385C;
            }
            .card__info__middle__Yes {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 6.36317px;
                line-height: 8px;
                display: flex;
                align-items: center;
                color: #00B66D;
            }
        }

        .card__info__bottom {
            border-top: 0.702755px solid rgba(0, 0, 0, 0.05);
            padding-top: 5px;
            display: flex;
            font-size: 10px;
            justify-content: space-between;
        }
    }
`;

const Progress = styled.div`
  width: 200px;
  height: 10px;
  background-color: #00B66D;
  border-radius: 11.2125px;
`;

const Dealt = styled.div`
  background-color: #FF385C;
  width: ${(props) => props.dealt + "%"};
  height: 100%;
  border-radius: 11.2125px;
`;


function Card() {
    return (
        <Main>
            <div className="card__info__section">
                <div style={{ display: 'flex' }}>
                    <div className="card__info__left"></div>
                    <div className="card__info__right">
                        <div className="card__info__right__top">
                            <div>Crypto</div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ background: '#EAEAEA', borderRadius: '1.92607px' }}>0x6AD4..798c0x6AD4</div>
                                <div><FaRegThumbsUp size={10} /></div>
                            </div>
                        </div>
                        <div className="card__info__right__middle">
                            {`Headline goes here & this is demo`}
                        </div>
                        <div className="card__info__right__bottom">
                            <AiOutlineCalendar size={13} /> Expires Dec 31, 2023
                        </div>
                    </div>
                </div>
                <div className="card__info__middle">
                    <Progress>
                        <Dealt dealt={30} />
                    </Progress>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                        <div className="card__info__middle__No">No</div>
                        <div className="card__info__middle__Yes">Yes</div>
                    </div>
                </div>
                <div className="card__info__bottom">
                    <div style={{ display: 'flex', alignItems: 'center', color: '#00B66D'}}><FiBarChart /> <div>$516.16K</div></div>
                    <div style={{ display: 'flex', alignItems: 'center'}}><AiOutlineStar color={'#FCDC00'}/></div>
                </div>
            </div>
        </Main>
    )
}

export default Card
