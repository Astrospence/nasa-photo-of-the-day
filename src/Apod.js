import React from 'react';
import Title from './Title';
import Info from './Info';
import Photo from './Photo';

export default function Apod(props) {
    const { data } = props;
    
    return(
        <div>
            <Title title={data.title} date={data.date}/>
            <Photo url={data.url}/>
            <Info explanation={data.explanation}/>
        </div>
    )
}