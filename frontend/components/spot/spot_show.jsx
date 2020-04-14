import React from 'react';
import HostDescription from './host_description';
import ReviewIndexContainer from '../review/review_index_container';


class SpotShow extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchSpot(this.props.match.params.spotId);
        // this.props.fetchReviews(this.props.match.params.spotId);
        window.scrollTo(0, 0);
    }

    render() {
        if ((Object.keys(this.props.users).length < 2)) return null; 

        if (!this.props.spot) return null;

       
        const { 
            area: { num_sites, max_guests, lodging_provided, lodging, parking }, 
            essential: { campfires, toilet, pets }, 
            amenity: { potable_water, kitchen, showers, wifi, bins}, 
            detail: { checkin_time, checkout_time, cancellation_policy, on_arrival, min_nights} 
        } = this.props.spot;


        //AREA
        let arOne, arTwo, arThree, arFour;
        if (lodging_provided) {
            arOne = (
                <>
                    <h2>Lodging provided</h2>
                    <div className="list-icon">
                        <div className="icon-image-container">
                            <img src={window.lodging} alt="lodging" />&nbsp;
                        </div>
                
                        <div>{lodging}</div>
                    </div>
                </>

            )
        } else {
            arOne = (
                <>
                    <h2>Campsite area</h2>
                    <div className="list-icon">
                        <div className="icon-image-container">
                            <img src={window.tent} alt="tent" />
                            <img src={window.rv} alt="rv" />&nbsp;
                        </div>

                        <div>Bring your own tents, vans, trailers, RVs</div>
                    </div>   
                </>
            )
        };

        arTwo = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={window.sites} alt="sites" />&nbsp;
                </div>
            
                <div>{num_sites}&nbsp;{num_sites === 1 ? "site" : "sites"} </div>
            </div>
        );

        arThree = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={window.guests} alt="guests" />&nbsp;
                </div>
            
                <div>Up to&nbsp;{max_guests / num_sites}&nbsp;guests per site</div>
            </div>
        );

        arFour = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={parking ? window.parking : window.walk} alt="park" />&nbsp;
                </div>
            
                <div>{parking ? "Park at listing" : "Walk to listing"}</div>
            </div>
        );

        //ESSENTIAL
        let esOne, esTwo, esThree;
        esOne = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={campfires ? window.campfire : window.campfire_n} alt="campfire" />&nbsp;
                </div>

                <div>{campfires ? "Campfires allowed" : "No campfires"}</div>
            </div>
        );

        esTwo = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={toilet ? window.toilet : window.toilet_n} alt="toilet" />&nbsp;
                </div>

                <div>{toilet ? "Toilet available" : "No toilet"}</div>
            </div>
        );

        esThree = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={pets ? window.pets : window.pets_n} alt="pets" />&nbsp;
                </div>

                <div>{pets ? "Pets allowed" : "No pets"}</div>
            </div>
        );

        //AMENITY
        let amOne, amTwo, amThree, amFour, amFive;
        amOne = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={potable_water ? window.water : window.water_n} alt="water" />&nbsp;
                </div>

                <div>{potable_water ? "Potable water available" : "No potable water"}</div>
            </div>
        );

        amTwo = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={kitchen ? window.kitchen : window.kitchen_n} alt="kitchen" />&nbsp;
                </div>

                <div>{kitchen ? "Kitchen available" : "No kitchen"}</div>
            </div>
        );

        amThree = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={showers ? window.shower : window.shower_n} alt="shower" />&nbsp;
                </div>

                <div>{showers ? "Showers available" : "No showers"}</div>
            </div>
        );

        amFour = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={wifi ? window.wifi : window.wifi_n} alt="wifi" />&nbsp;
                </div>

                <div>{wifi ? "Wifi available" : "No wifi"}</div>
            </div>
        );

        amFive = (
            <div className="list-icon">
                <div className="icon-image-container">
                    <img src={bins ? window.bins : window.bins_n} alt="bins" />&nbsp;
                </div>

                <div>{bins ? "Bins available" : "No bins"}</div>
            </div>
        );

        //ACTIVITIES
        const activities = this.props.spot.activities.map((act, i) => {
            if (act === 'biking') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.biking} alt="biking"/>
                    </div>
                    <p>Biking</p>
                </div>
            );

            if (act === 'boating') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.boating} alt="boating" />
                    </div>
                    <p>Boating</p>
                </div>
            );

            if (act === 'climbing') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.climbing} alt="climbing" />
                    </div>
                    <p>Climbing</p>
                </div>
            );

            if (act === 'fishing') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.fishing} alt="fishing" />
                    </div>
                    <p>Fishing</p>
                </div>
            );

            if (act === 'hiking') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.hiking} alt="hiking" />
                    </div>
                    <p>Hiking</p>
                </div>
            );

            if (act === 'horseback riding') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.horse} alt="horse" />
                    </div>
                    <p>Horseback riding</p>
                </div>
            );

            if (act === 'paddling') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.paddling} alt="paddling" />
                    </div>
                    <p>Paddling</p>
                </div>
            );

            if (act === 'snow sports') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.snow} alt="snow" />
                    </div>
                    <p>Snow sports</p>
                </div>
            );

            if (act === 'swimming') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.swimming} alt="swimming" />
                    </div>
                    <p>Swimming</p>
                </div>
            );

            if (act === 'wildlife watching') return (
                <div className="activity" key={i}>
                    <div>
                        <img src={window.wildlife} alt="wildlife" />
                    </div>
                    <p>Wildlife watching</p>
                </div>
            );
        });


        return (
            <div className="spot-show">
                <div className="photos">
                    <div className="photo-1"><img src={this.props.spot.photoUrls[0]} alt="first photo" /></div>
                    <div className="photo-2"><img src={this.props.spot.photoUrls[1]} alt="second photo" /></div>
                </div>

                <div className="make-room"> 
                    <div className="spot-show-body">
                        <section className="header-container">
                            <p className="country-location">{this.props.spot.country} &nbsp; <span className="arrow">></span> &nbsp; {this.props.spot.location} &nbsp; <span className="arrow">></span></p>

                            <h1 className="name">{this.props.spot.name}&nbsp;<span className="check"><i id="check-icon" className="fas fa-check-circle fa-xs" aria-hidden="true"></i></span></h1>
                            
                            <div className="rating">
                                <span className="turquoise">
                                    <i id="thumbs-up-icon" className="fas fa-thumbs-up" aria-hidden="true"></i> 
                                    &nbsp;
                                    {this.props.spot.rating}%
                                </span>&nbsp;Recommend
                            </div>

                            <HostDescription spot={this.props.spot} users={this.props.users}/>
                        </section>

                        <section className="features">
                            <div className="area">
                                {arOne}
                                {arTwo}
                                {arThree}
                                {arFour}
                            </div>
                            
                            <div className="essential">
                                <h2>Essentials</h2>
                                {esOne}
                                {esTwo}
                                {esThree}
                            </div>
                            
                            <div className="amenity">
                                <h2>Amenities</h2>
                                {amOne}
                                {amTwo}
                                {amThree}
                                {amFour}
                                {amFive}
                            </div>
                        </section>
                        

                        <section className="details">
                            <div className="heading">Details</div>

                            <div className="content">
                                <ul className="left">
                                    <li><span>Check in:</span> &nbsp;{checkin_time}</li>
                                    <li><span>Check out:</span> &nbsp;{checkout_time}</li>
                                    <li><span>Cancellation policy:</span> &nbsp;{cancellation_policy}</li>
                                </ul>

                                <ul className="right">
                                    <li><span>On arrival:&nbsp;</span>{on_arrival}</li>
                                    <li><span>Minimum nights:&nbsp;</span>{min_nights}</li>
                                </ul>
                            </div>
                        </section>

                        <section className="activities">
                            <h2>Activities</h2>
                            <p>Offered on the Host's property or nearby.</p>
                            <div className="flex">
                                {activities}
                            </div>
                        </section>

                        
                        <ReviewIndexContainer />
                        

                    </div>
                </div>

            </div>
        );
        
    }
}

export default SpotShow;