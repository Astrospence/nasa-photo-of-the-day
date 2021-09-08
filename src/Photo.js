import React from 'react';

export default function Photo(props) {
    const { url } = props;

    return (
        <div className="photo">
            <img src={url} alt="Hubble Telescope Picture"></img>
        </div>
    )
}