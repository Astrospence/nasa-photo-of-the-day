import React from 'react';

export default function Title(props) {
    const { title, date } = props;

    return(
        <div className="titleBar">
            <p className="title">{title}</p>
            <p className="date">{date}</p>
        </div>
    )
}