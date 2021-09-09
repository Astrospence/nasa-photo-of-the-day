import React from 'react';
import styled from 'styled-components';
import { nasa, hubble } from './constants.js';

const StyledDivMain = styled.div`
    box-shadow: 0 1px 5px gray;
`

const StyledDivA = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        width: 15%;
        height: 40vh;
    }

    h1 {
        text-align: center;
    }
`
        
const StyledDivB = styled.div`
    h3 {
        text-align: center;
        padding-bottom: 10px;
    }
`

export default function Header(props) {

    const { date } = props;

    return (
        <StyledDivMain>
            <StyledDivA>
                <div>
                    <img src={nasa} alt="NASA logo"></img>
                </div>
                <h1>NASA's <br></br>Astronomy Picture of the Day</h1>
                <div>
                    <img src={hubble} alt="Hubble telescope icon"></img>
                </div>
            </StyledDivA>
            <StyledDivB>
                <h3>{date}</h3>
            </StyledDivB>
        </StyledDivMain>
    )
}