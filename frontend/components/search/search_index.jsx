import React from 'react';
import SearchIndexItem from './search_index_item';
import SearchMap from './search_map';
// import { Link } from 'react-router-dom'; //

class SearchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSpots();
        window.scrollTo(0, 0);
    }

    render() {
        if (this.props.spots.length < 12) return null; 

        let country, lat, lng, continent;
        
        switch (this.props.countryId) {
            case '1':
                country = 'Chile';
                lat = -26.088590;
                lng = -69.555672;
                continent = 'South America';
                break;
            case '2':
                country = 'China';
                lat = 29.398602;
                lng = 106.929603;
                continent = 'Asia';
                break; 
            case '3':
                country = 'Guatemala';
                lat = 15.737821;
                lng = -90.320368;
                continent = 'South America';
                break; 
            case '4':
                country = 'Iceland';
                lat = 64.930517;
                lng = -18.330532;
                continent = 'Europe';
                break; 
            case '5':
                country = 'Mongolia';
                lat = 47.057598;
                lng = 93.461539;
                continent = 'Asia';
                break; 
            case '6':
                country = 'New Zealand';
                lat = -41.819085;
                lng = 172.894816;
                continent = 'Zealandia';
                break; 
            case '7':
                country = 'South Korea';
                lat = 36.596119;
                lng = 128.002736;
                continent = 'Asia';
                break; 
            case '8':
                country = 'United States';
                lat = 41.987247;
                lng = -114.048333;
                continent = 'North America';
                break; 
            default: 
                country = '';
                lat = 25;
                lng = -71;
                continent = '';
        }

        let the;
        the = country === 'United States' ? 'the' : null;

        let searchInfo;
        if (country) {
            searchInfo = (
                <div className="search-info">
                    <h4>{continent} — <span>{country}</span></h4>
                    <h3>The best camping in {the} {country}.</h3>
                </div>
            );
        } else {
            searchInfo = (
                <div className="search-info">
                    <h5>Hmmm we couldn't find any listings that match your search criteria.
                        Try zooming the map out or search again.
                    </h5>
                </div>
            );
        }

        const filteredSpots = this.props.spots.filter(spot => spot.country === country);

        return (
            <div className="search-index">
                <div className="info-items">
                    {searchInfo}

                    <div className="search-index-items">
                        {filteredSpots.map((spot) =>
                            <SearchIndexItem
                                key={spot.id}
                                spot={spot}
                            />
                        )}
                    </div>
                </div>

                <SearchMap 
                    lat={lat}
                    lng={lng}
                    spots={this.props.spots}
                    countryId={this.props.countryId}
                />
            </div>
        )
    }
}

export default SearchIndex;