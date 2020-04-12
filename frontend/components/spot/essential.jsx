import React from 'react';

const Essential = ({ campfires, toilet, pets }) => {
    let esOne, esTwo, esThree;
    esOne = (
        <div>
            <div className="icon-image-container">
                <img src={campfires ? window.campfire : window.campfire_n} alt="campfire" />
            </div>
            
            <div>{campfires ? "Campfires allowed" : "No campfires" }</div>
        </div>
    )

    esTwo = (
        <div>
            <div className="icon-image-container">
                <img src={toilet ? window.toilet : window.toilet_n} alt="toilet" />
            </div>

            <div>{toilet ? "Toilet available" : "No toilet"}</div>
        </div>
    )

    esThree = (
        <div>
            <div className="icon-image-container">
                <img src={pets ? window.pets : window.pets_n } alt="pets" />
            </div>

            <div>{pets ? "Pets allowed" : "No pets"}</div>
        </div>
    )

    return (
        <div className="essential">
            {esOne}
            {esTwo}
            {esThree}
        </div>
    );
    
};

export default Essential;