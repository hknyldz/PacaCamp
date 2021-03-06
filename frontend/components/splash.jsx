import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search/search_bar';
import SpotIndexContainer from './spot/spot_index_container';

class Splash extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="splash">
                <div className="covid-19">
                    <h3>A note on COVID-19:</h3>
                    <p>We are offering impacted PacaCampers and Hosts the ability to <a href="">cancel or reschedule</a> eligible reservations for a full credit under our natural disaster policy. Find more information on our response to the new coronavirus and relevant content <a href="">here.</a></p>
                </div>

                <div className="reel">
                    <h1>Find yourself outside.</h1>
                    <div>
                        <h2>
                            Book unique camping experiences on <span>private and public</span> campsites, cabins, RV parks, public parks and more.
                        </h2>
                    </div>
                </div>

                <div className="splash-search-container">
                    <SearchBar />
                </div>

                <h2>Discover camping...</h2>

                <SpotIndexContainer />

                <div className="mission">
                    <div className="tent-arms">
                        <img src={window.tent_arms} alt="tent arms"/>
                        <h2>PacaCamp empowers people to share their land with campers.</h2>
                        <a href="">Start PacaCamping</a>
                    </div>

                    <div className="sun-bill">
                        <img src={window.sun_bill} alt="sun bill" />
                        <h2>Creating sustainable revenue and fostering community.</h2>
                        <a href=""></a>
                    </div>

                    <div className="palm-eye">
                        <img src={window.palm_eye} alt="palm eye" />
                        <h2>Unlocking access to incredible new places to camp.</h2>
                        <Link to="/discover/8">Discover camps</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash; 