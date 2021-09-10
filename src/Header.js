import React from 'react';
import styled from 'styled-components';
import { nasa, hubble } from './constants.js';

const StyledDivMain = styled.div`
    box-shadow: 0 1px 5px gray;
`

const StyledDivA = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        text-align: center;
    }
`

const NasaDiv = styled.div`
    background-image: url(${nasa});
    width: 15%;
    height: 18vh;
`

const HubbleDiv = styled.div`
    background-image: url(${hubble});
    background-size: cover;
    width: 15%;
    height: 18vh;
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
                <NasaDiv></NasaDiv>
                <h1>NASA's <br></br>Astronomy Picture of the Day</h1>
                <HubbleDiv></HubbleDiv>
            </StyledDivA>
            <StyledDivB>
                <h3>{date}</h3>
            </StyledDivB>
        </StyledDivMain>
    )
}