import React from 'react';
import HostDescription from './host_description';
import ReviewIndexContainer from '../review/review_index_container';
import BookingFormContainer from '../booking/booking_form_container';
import Area from './area';
import Essential from './essential';
import Amenity from './amenity';
import Detail from './detail';


class SpotShow extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchSpot(this.props.match.params.spotId);
        window.scrollTo(0, 0);
    }

    render() {
        if ((Object.keys(this.props.users).length < 2)) return null; 

        if (!this.props.spot) return null;

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

                    <BookingFormContainer />
                    
                    <div className="spot-show-body">
                        <section className="header-container">
                            <p className="country-location">{this.props.spot.country} &nbsp; <span className="arrow"><i className="fas fa-angle-right"></i></span> &nbsp; {this.props.spot.location} &nbsp; <span className="arrow"><i className="fas fa-angle-right"></i></span></p>

                            <h1 className="name">{this.props.spot.name}&nbsp;<span className="check"></span></h1>
                            
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
                            <Area area={this.props.spot.area}/>
                            
                            <Essential essential={this.props.spot.essential}/>
                            
                            <Amenity amenity={this.props.spot.amenity}/>
                        </section>
                        

                        <Detail detail={this.props.spot.detail}/>

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