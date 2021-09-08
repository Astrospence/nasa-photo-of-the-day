import React from 'react';

export default function Info(props) {
    const { explanation } = props;

    return (
        <div className="info">
            <p>{explanation}</p>
        </div>
    )
}