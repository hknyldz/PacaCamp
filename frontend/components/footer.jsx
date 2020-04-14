import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            
            <div className="about">
                <div className="body">
                    <div className="pacacamp">
                        <img src={window.pacacamp} alt="PacaCamp"/>
                    </div>

                    <div className="about-us-and-slogan">
                        <div className="about-us">
                            <h2>About us</h2>
                            <p> Github, LinkedIn links
                            </p>
                        </div>

                        <div className="slogan">
                            <h2>PacaCamp is everywhere you want to camp.</h2>
                            <p>
                                Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the globe. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="divider"></div>

                <div className="legal-info-container">
                    <p className="legal-info">Made in New York. A Hipcamp clone.</p>
                </div>
            </div>

            <div className="message-container">
                <p className="message">PacaCamp is created with <span className="heart">❤️</span> and hope for our future</p> 
            </div>

            
        </div>
    )
};

export default Footer;