import React from 'react';

const Essential = (props) => {
    
    const { campfires, toilet, pets } = props.essential;
    let esOne, esTwo, esThree;

    esOne = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={campfires ? window.campfire : window.campfire_n} alt="campfire" />&nbsp;
                </div>

            <div>{campfires ? "Campfires allowed" : <span>No campfires</span>}</div>
        </div>
    );

    esTwo = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={toilet ? window.toilet : window.toilet_n} alt="toilet" />&nbsp;
                </div>

            <div>{toilet ? "Toilet available" : <span>No toilet</span>}</div>
        </div>
    );

    esThree = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={pets ? window.pets : window.pets_n} alt="pets" />&nbsp;
                </div>

            <div>{pets ? "Pets allowed" : <span>No pets</span>}</div>
        </div>
    );

    return (
        <div className="spacing">
            <div className="essential">
                <h2>Essentials</h2>
                {esOne}
                {esTwo}
                {esThree}
            </div>
        </div>
    );
    
};

export default Essential;