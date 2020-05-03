import React from 'react';

const Amenity = (props) => {

    const { potable_water, kitchen, showers, wifi, bins } = props.amenity;
    let amOne, amTwo, amThree, amFour, amFive;

    amOne = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={potable_water ? window.water : window.water_n} alt="water" />&nbsp;
                </div>

            <div>{potable_water ? "Potable water available" : <span>No potable water</span>}</div>
        </div>
    );

    amTwo = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={kitchen ? window.kitchen : window.kitchen_n} alt="kitchen" />&nbsp;
                </div>

            <div>{kitchen ? "Kitchen available" : <span>No kitchen</span>}</div>
        </div>
    );

    amThree = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={showers ? window.shower : window.shower_n} alt="shower" />&nbsp;
                </div>

            <div>{showers ? "Showers available" : <span>No showers</span>}</div>
        </div>
    );

    amFour = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={wifi ? window.wifi : window.wifi_n} alt="wifi" />&nbsp;
                </div>

            <div>{wifi ? "Wifi available" : <span>No wifi</span>}</div>
        </div>
    );

    amFive = (
        <div className="list-icon">
            <div className="icon-image-container">
                <img src={bins ? window.bins : window.bins_n} alt="bins" />&nbsp;
                </div>

            <div>{bins ? "Bins available" : <span>No bins</span>}</div>
        </div>
    );

    return (
        <div className="spacing">
            <div className="amenity">
                <h2>Amenities</h2>
                {amOne}
                {amTwo}
                {amThree}
                {amFour}
                {amFive}
            </div>
        </div>
    );
};

export default Amenity;