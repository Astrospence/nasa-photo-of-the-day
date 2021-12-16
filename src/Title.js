import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    h2 {
        font-size: 1.7rem;
    }
`

export default function Title(props) {
    const { title } = props;

    return(
        <StyledDiv className="titleBar">
            <h2 className="title">{title}</h2>
        </StyledDiv>
    )
}