import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 1.2rem;
`

export default function Info(props) {
    const { explanation } = props;

    return (
        <StyledDiv className="info">
            <p>{explanation}</p>
        </StyledDiv>
    )
}