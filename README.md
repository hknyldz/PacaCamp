<div align="center">
  <img width="250px" src="app/assets/images/pacacamp.png" alt="PacaCamp logo">
</div>

<div align="center">
    <a href="http://pacacamp.herokuapp.com/#/">Live site</a>
</div>

# PacaCamp

PacaCamp is a full-stack Hipcamp clone that helps users discover and book unique outdoor experiences. 

<div>
  <img width="75%" src="read_me/splash.png" alt="splash page screenshot">
</div>

## Table of Contents 

- [Technologies](#technologies)
- [Languages](#languages)
- [Features](#features)
  * [User Authentication](#user-authentication)
  * [Listings](#listings)
  * [Bookings](#bookings)
  * [Reviews](#reviews)
  * [Search](#search)
- [Future Directions](#future-directions)

## Technologies

- Ruby on Rails for backend framework
- PostgreSQL as backend database
- React for user interface
- Redux for state management
- Git for version control
- [AWS S3](https://aws.amazon.com/s3/ "AWS S3")
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial "Google Maps API")
- [DayPicker API](https://react-day-picker.js.org/ "DayPicker API")

## Languages 

- JavaScript
- Ruby
- HTML5
- CSS3

## Features

### User Authentication

<div>
  <img width="75%" src="read_me/modals.gif" alt="session modals gif">
</div>

- Account creation leverages BCrypt for password security. 
- Site employs responsive modal forms for login and signup.
- Visitors are unable to access certain features without logging in (i.e. creating and deleting reservations, writing reviews).

### Listings

<div>
  <img width="75%" src="read_me/listing.gif" alt="listing gif">
</div>

- Visitors can browse campsites.
- Each listing displays photos, campsite information, a Google Map, and reviews.

### Bookings

<div>
  <img width="30%" src="read_me/booking.gif" alt="booking gif">
</div>

- Booking form uses DayPicker API to enable users to easily select trip start and end dates.
- Visitors are prompted to log in, if they are not already, in order to make reservations.
</br></br>

<div>
  <img width="75%" src="read_me/trips.gif" alt="trips gif">
</div>

- Users can create, view, and cancel their own reservations.

### Reviews

<div>
  <img width="60%" src="read_me/reviews.png" alt="sample review">
</div>

- Visitors can view campsite reviews.
- Users can leave, edit, and delete their own reviews.

### Search

<div>
  <img width="85%" src="read_me/search.gif" alt="search gif">
</div>

- Visitors can search campsites by location.
- Google Maps is implemented on search.

## Future Directions
- Enable users to add, update, and delete campsites.
- Implement filters (group size, pricing, amenities, activites) on search. 
