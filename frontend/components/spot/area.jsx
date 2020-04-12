import React from 'react';

const Area = ({ num_sites, max_guests, lodging_provided, lodging, parking }) => {

    let arOne, arTwo, arThree, arFour; 
    if (lodging_provided) {
        arOne = ( 
            <>
                <h2>Lodging provided</h2>
                <div>
                    <div className="icon-image-container">
                        <img src={window.lodging} alt="lodging"/>
                    </div>
                    
                    <div>{lodging}</div>
                </div>
            </>

        )        
    } else {
        arOne = (
        <>
                <h2>Campsite area</h2>
                <div>
                    <div className="icon-image-container">
                        <img src={window.tent} alt="tent"/>
                        <img src={window.rv} alt="rv" />
                    </div>
                    
                    <div>Bring your own tents, vans, trailers, RVs</div>
                </div>
        </>
        ) 
    }

    arTwo = (
            <div>
                <div className="icon-image-container">
                    <img src={window.sites} alt="sites"/>
                </div>
                
                <div>{num_sites} &nbsp; {num_sites === 1 ? "site" : "sites"} </div>
            </div>
    )

    arThree = (
        <div>
            <div className="icon-image-container">
                <img src={window.guests} alt="guests" />
            </div>
                
            <div>Up to &nbsp; {max_guests / num_sites} &nbsp; guests per site</div>
        </div>
    )

    arFour = (
        <div>
            <div className="icon-image-container">
                <img src={parking ? window.parking : window.walk} alt="park" />
            </div>
                
            <div>{parking ? "Park at listing" : "Walk to listing" }</div>
        </div>
    )

    return (
        <div className="area">
            {arOne}
            {arTwo}
            {arThree}
            {arFour}
        </div>
    );
};

export default Area;