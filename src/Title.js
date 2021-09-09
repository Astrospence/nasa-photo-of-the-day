import React from 'react';

export default function Title(props) {
    const { title, date } = props;

    return(
        <div className="titleBar">
            <h3 className="title">{title}</h3>
            <h4 className="date">{date}</h4>
        </div>
    )
}