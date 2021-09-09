import React from 'react';
import Title from './Title';
import Info from './Info';
import Photo from './Photo';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 15%;
`

export default function Apod(props) {
    const { data } = props;
    
    return(
        <StyledDiv>
            <Photo url={data.url}/>
            <Title title={data.title} date={data.date}/>
            <Info explanation={data.explanation}/>
        </StyledDiv>
    )
}