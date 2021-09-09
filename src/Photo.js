import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 50px 0 -10px;

    img {
        width: 100%;
        border-radius: 5px;
        box-shadow: 1px 1px 5px;
    }
`


export default function Photo(props) {
    const { url } = props;

    if (!url) {
        return <h3>Loading Image...</h3>;
    }

    return (
        <StyledDiv>
            <img src={url} alt="Hubble Telescope Image"></img>
        </StyledDiv>
    )
}