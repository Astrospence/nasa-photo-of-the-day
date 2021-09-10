import React from 'react';
import styled from 'styled-components';

const StyledDivMain = styled.div`
    box-shadow: 0 2px 10px 3px gray;
`

const StyledDivA = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        text-align: center;
    }
`

const NasaDiv = styled.div`
    width: 15%;
    height: 18vh;
    background-image: url('https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const HubbleDiv = styled.div`
    background-size: cover;
    width: 15%;
    height: 18vh;
    background-image: url('http://esahubble.org/media/archives/logos/screen/esa_hubble_bw_wb_gen.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 10px;
`
        
const StyledDivB = styled.div`
    h3 {
        text-align: center;
        padding-bottom: 10px;
    }
`

export default function Header(props) {

    const { date } = props;

    console.log(props);

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