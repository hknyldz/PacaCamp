import React from 'react';
import { withRouter } from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class BookingForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            guest_id: this.props.currentUserId,
            spot_id: this.props.match.params.spotId,
            num_guests: 1,
            checkin_date: undefined,
            checkout_date: undefined
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const spot = this.props.spots[this.props.match.params.spotId];
        let total;
        const checkin = this.state.checkin_date;
        const checkout = this.state.checkout_date;

        if (checkin && checkout) {
            const numNights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
            total = numNights * spot.price;
        } else {
            total = 0;
        }

        const booking = Object.assign({}, this.state, {total})

        if (!this.props.currentUserId) {
            this.props.openModal('login');
        } else {
            this.props.createBooking(booking).then(() => this.props.history.push(`/users/${this.props.currentUserId}/trips`));
        }
    }

    handleGuests(direction) {
        return () => {
            const spot = this.props.spots[this.props.match.params.spotId];

            if (direction === 'down' && this.state.num_guests > 1) {
                this.setState({num_guests: this.state.num_guests - 1})
            }

            if (direction === 'up' && this.state.num_guests < spot.area.max_guests) {
                this.setState({num_guests: this.state.num_guests + 1})
            }
        }
    }

    handleInput(field) {
        return (input) => {
            this.setState({[field]: input});
        }
    }

    render() {

        let totalCalc;
        if (this.state.checkin_date && this.state.checkout_date) {
            const spot = this.props.spots[this.props.match.params.spotId];
            let total;
            const checkin = this.state.checkin_date;
            const checkout = this.state.checkout_date;
            const numNights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
            const singPlur = numNights === 1 ? "night" : "nights";
            total = numNights * spot.price;
            totalCalc = (
                <div className="total-calc">
                    <div className="label">Total</div>
                    <div className="calculation">
                        <div>
                            ${spot.price} x {numNights} {singPlur}
                        </div>

                        <div className="total">${total}</div>
                    </div>
                </div>
            )
        } else {
            totalCalc = null;
        }

        return (
            <div className="booking-form">
                <div className="price-per-night">
                    <div className="price">${this.props.spots[this.props.match.params.spotId].price}</div>
                    <div className="per-night">per night</div>
                </div>

                <div className="form-fields">
                    <div className="checkin">
                        <div className="label">Check in</div>
                        <DayPickerInput
                            placeholder="Select date"
                            onDayChange={this.handleInput('checkin_date')}
                            dayPickerProps={{
                                disabledDays: { before: new Date() },
                            }}
                        />
                    </div>

                    <div className="checkout">
                        <div className="label">Check out</div>
                        <DayPickerInput
                            placeholder="Select date"
                                onDayChange={this.handleInput('checkout_date')}
                            dayPickerProps={{
                                disabledDays: { before: this.state.checkin_date }
                            }}
                        />
                    </div>

                    <div className="guests">
                        <div className="label">Guests</div>
                        <div className="book-guests">
                            <button className="up-down-btn" onClick={this.handleGuests('down')}><i className="fas fa-minus"></i></button>
                            &nbsp;
                            <span className="num-guests">
                            {this.state.num_guests}
                            </span>
                            &nbsp;
                            <button className="up-down-btn" onClick={this.handleGuests('up')}><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>

                {totalCalc}

                <div className="btn-container"><button onClick={this.handleSubmit}>Instant book</button></div>

            </div>
        )
    }
}

export default withRouter(BookingForm);