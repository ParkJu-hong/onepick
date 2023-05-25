import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    justify-content: center;

    .selected__category {
        background: #00B66D;
        border-radius: 5px;
        color: white;
    }

    .unselected__category {
        background: #EAEAEA;
        border: 0.3px solid #F2F2F2;
        border-radius: 5px;
        color: black;
    }


`;

const categorys = ['All', 'Pop Culture', 'Climate', 'Business', 'Crypto', 'Sports', 'ETC'];

function Categorys() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <Main>
            {categorys.map((category, idx) => {
                return <button
                    key={idx}
                    className={selectedCategory === category ? 'selected__category' : 'unselected__category'}
                    onClick={() => {
                        setSelectedCategory(category);
                    }}
                    style={{ marginLeft: '10px' }}
                >
                    {category}
                </button>
            })}
        </Main>
    )
}

export default Categorys
