import React from 'react';

const Amenity = ({ potable_water, kitchen, showers, wifi, bins }) => {
    let amOne, amTwo, amThree, amFour, amFive;
    amOne = (
        <div>
            <div className="icon-image-container">
                <img src={potable_water ? window.water : window.water_n} alt="water" />
            </div>

            <div>{potable_water ? "Potable water available" : "No potable water"}</div>
        </div>
    )

    amTwo = (
        <div>
            <div className="icon-image-container">
                <img src={kitchen ? window.kitchen : window.kitchen_n} alt="kitchen" />
            </div>

            <div>{kitchen ? "Kitchen available" : "No kitchen"}</div>
        </div>
    )

    amThree = (
        <div>
            <div className="icon-image-container">
                <img src={showers ? window.shower : window.shower_n } alt="shower" />
            </div>

            <div>{showers ? "Showers available" : "No showers"}</div>
        </div>
    )

    amFour = (
        <div>
            <div className="icon-image-container">
                <img src={wifi ? window.wifi : window.wifi_n} alt="wifi" />
            </div>

            <div>{wifi ? "Wifi available" : "No wifi"}</div>
        </div>
    )

    amFive = (
        <div>
            <div className="icon-image-container">
                <img src={bins ? window.bins : window.bins_n} alt="bins" />
            </div>

            <div>{bins ? "Bins available" : "No bins"}</div>
        </div>
    )


    return (
        <div className="amenity">
            {amOne}
            {amTwo}
            {amThree}
            {amFour}
            {amFive}
        </div>
    );
};

export default Amenity;