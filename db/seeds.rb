# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Spot.destroy_all
Area.destroy_all
Essential.destroy_all
Amenity.destroy_all
Detail.destroy_all
Review.destroy_all
# Booking.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

#USERS
demo_user = User.create!(
    first_name: 'Happy', 
    last_name: 'Alpaca', 
    email: 'happyalpaca@aa.io', 
    password: 'humming'
)

faris_hayward = User.create!(
    first_name: 'Faris',
    last_name: 'Hayward',
    email: 'farishayward@aa.io',
    password: 'burgundy'
)

luciano_ruiz = User.create!(
    first_name: 'Luciano',
    last_name: 'Ruiz',
    email: 'lucianoruiz@aa.io',
    password: 'canaryyellow'
)

kara_quintana = User.create!(
    first_name: 'Kara',
    last_name: 'Quintana',
    email: 'karaquintana@aa.io',
    password: 'celadonblue'
)

joel_lu = User.create!(
    first_name: 'Joel',
    last_name: 'Lu',
    email: 'joellu@aa.io',
    password: 'cinnamon'
)

gene_lee = User.create!(
    first_name: 'Gene',
    last_name: 'Lee',
    email: 'genelee@aa.io',
    password: 'gainsboro'
)

michaela_combs = User.create!(
    first_name: 'Michaela',
    last_name: 'Combs',
    email: 'michaelacombs@aa.io',
    password: 'emerald'
)

nawal_patel = User.create!(
    first_name: 'Nawal',
    last_name: 'Patel',
    email: 'nawalpatel@aa.io',
    password: 'scarlet'
)

farah_marks = User.create!(
    first_name: 'Farah',
    last_name: 'Marks',
    email: 'farahmarks@aa.io',
    password: 'marigold'
)

chotten_sherpa = User.create!(
    first_name: 'Chotten',
    last_name: 'Sherpa',
    email: 'chottensherpa@aa.io',
    password: 'turquoise'
)

jennie_mata = User.create!(
    first_name: 'Jennie',
    last_name: 'Mata',
    email: 'jenniemata@aa.io',
    password: 'midnight'
)

melody_abbott = User.create!(
    first_name: 'Melody',
    last_name: 'Abbott',
    email: 'melodyabbott@aa.io',
    password: 'pistachio'
)

jamie_kim = User.create!(
    first_name: 'Jamie',
    last_name: 'Kim',
    email: 'jamiekim@aa.io',
    password: 'tangerine'
)

lucas_tanaka = User.create!(
    first_name: 'Lucas',
    last_name: 'Tanaka',
    email: 'lucastanaka@aa.io',
    password: 'terracotta'
)

anthony_simon = User.create!(
    first_name: 'Anthony',
    last_name: 'Simon',
    email: 'anthonysimon@aa.io',
    password: 'lavender'
)

ellie_hogan = User.create!(
    first_name: 'Ellie',
    last_name: 'Hogan',
    email: 'elliehogan@aa.io',
    password: 'vermillion'
)

mai_shin = User.create!(
    first_name: 'Mai',
    last_name: 'Shin',
    email: 'maishin@aa.io',
    password: 'pineapple'
)

jaime_jensen = User.create!(
    first_name: 'Jaime',
    last_name: 'Jensen',
    email: 'jaimejensen@aa.io',
    password: 'pumpkin'
)

harrison_wright = User.create!(
    first_name: 'Harrison',
    last_name: 'Wright',
    email: 'harrisonwright@aa.io',
    password: 'scarlet'
)

jacqueline_caron = User.create!(
    first_name: 'Jacqueline',
    last_name: 'Caron',
    email: 'jacquelinecaron@aa.io',
    password: 'mulberry'
)

#SPOTS
pueblo_machuca = Spot.create!(
    name: 'Pueblo Machuca',
    host_id: 3, 
    price: 88,
    location: 'San Pedro de Atacama',
    country: 'Chile',
    latitude: -22.920985,
    longitude: -68.190345,
    activities: ['hiking', 'biking', 'horseback riding', 'climbing'],
    description: 'Wait. Take a minute. Slow down. Traverse the desert on bike. Slide down the dunes on a sandboard. Smile at the alpacas.',
    rating: 98
)

pueblo_machuca.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/1.jpg'), filename: '1.jpg')
pueblo_machuca.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/2.jpg'), filename: '2.jpg')

rows_of_lavender = Spot.create!(
    name: 'Rows of Lavender',
    host_id: 18, 
    price: 70,
    location: 'Wanaka',
    country: 'New Zealand', 
    latitude: -44.703724, 
    longitude: 169.187210,
    activities: ['fishing', 'hiking', 'snow sports', 'wildlife watching'],
    description: "Can someone say 'fragrance for miles'? Rows of Lavender is a family-run lavender farm that's been operating for generations. Walk our acres of lavender fields. Indulge in freshly made herbal tea and lavender sweets. Take in the wilderness. Ski on nearby snowcapped mountains. Wander in beech forests and alpine lakes. Our guests receive the full spectrum of the nature experience.",
    rating: 95
)

rows_of_lavender.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/3.jpg'), filename: '3.jpg')
rows_of_lavender.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/4.jpg'), filename: '4.jpg')

open_terrace = Spot.create!(
    name: 'Open Terrace',
    host_id: 6, 
    price: 90,
    location: 'Longsheng, Guilin',
    country: 'China', 
    latitude: 25.750203, 
    longitude: 110.133387, 
    activities: ['hiking'],
    description: 'Open Terrace is part of a village community. Our village works year-round toiling the majestic terraced fields architected by our ancestors and in return we enjoy the various fruits of our labor, chief among which is rice. Breakfast, lunch, and dinner are provided to guests par for the stay. Guests may also partake in the making of meals, tea and wine.',
    rating: 99
)

open_terrace.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/5.jpg'), filename: '5.jpg')
open_terrace.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/6.jpg'), filename: '6.jpg')

eagles_landing = Spot.create!(
    name: 'Eagle\'s Landing',
    host_id: 11, 
    price: 75,
    location: 'Bayan-Ölgii',
    country: 'Mongolia', 
    latitude: 48.862290, 
    longitude: 88.589764,
    activities: ['horseback riding', 'wildlife watching'],
    description: 'Welcome to Eagle\'s Landing. We are a nomadic family in western Mongolia, where our way of life reflects our relationship with our land. Change is a constant and we go where our herd goes. We take only as much as we need and subsist almost entirely on the milk and meat of our animals. Every year the Golden Eagle Festival is held held on the first weekend of October here in Bayan-Ölgii, where hunter and eagle demonstrate their prowess and connection on the steppes of our homeland. Ready for a taste of a life free from the golden shackles of modernity? But do be aware you\'ll be at the mercy of the vicissitudes of the seasons and terrain.',
    rating: 100
)

eagles_landing.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/7.jpg'), filename: '7.jpg')
eagles_landing.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/8.jpg'), filename: '8.jpg')

uri_hanok = Spot.create!(
    name: 'Uri Hanok',
    host_id: 17, 
    price: 150,
    location: 'Seoul',
    country: 'South Korea', 
    latitude: 37.582633, 
    longitude: 126.983610,
    activities: ['hiking'],
    description: 'Uri Hanok is situated in Bukchon Hanok Village, a traditional village that dates back to the Joseon Dynasty. Formerly the residential quarters of high-ranking officials and nobility of centuries past, Bukchon Hanok Village is now home to cultural centers, guesthouses, and restaurants and many hanoks in the village remain private residences. Immerse yourself in the culture and ceremonies of traditional Korea here! Additionally, should you also like a walk on the royal side, we are located between Gyeongbokgung Palace and Changdeokgung Palace.',
    rating: 100
)

uri_hanok.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/9.jpg'), filename: '9.jpg')
uri_hanok.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/10.jpg'), filename: '10.jpg')

grandall_vineyard = Spot.create!(
    name: 'Grandall Vineyard',
    host_id: 9, 
    price: 60,
    location: 'Sonoma Valley, California',
    country: 'United States', 
    latitude: 38.426456,
    longitude:  -122.556389,
    activities: ['hiking', 'paddling', 'swimming'],
    description: 'We\'re a family-run vineyard at the base of the Mayacamas Mountains and adjacent to the Russian River. Our campgrounds are perfect for picnicing and storytelling over campfire. Hike nearby forests and mountains, paddle in the river, and join us for some wine. We guarantee a fine time!',
    rating: 95
)

grandall_vineyard.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/11.jpg'), filename: '11.jpg')
grandall_vineyard.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/12.jpg'), filename: '12.jpg')

#AREAS
ar1 = Area.create!(
    spot_id: 1,
    num_sites: 1,
    max_guests: 6, 
    lodging_provided: true, 
    lodging: '2 dwellings',
    parking: true
)

ar2 = Area.create!(
    spot_id: 2,
    num_sites: 1,
    max_guests: 5,
    lodging_provided: true, 
    lodging: '1 cabin',
    parking: true
)

ar3 = Area.create!(
    spot_id: 3,
    num_sites: 1,
    max_guests: 3,
    lodging_provided: true,
    lodging: '1 dwelling',
    parking: true
)

ar4 = Area.create!(
    spot_id: 4,
    num_sites: 1,
    max_guests: 4,
    lodging_provided: true,
    lodging: '1 ger',
    parking: true
)

ar5 = Area.create!(
    spot_id: 5, 
    num_sites: 1,
    max_guests: 5,
    lodging_provided: true,
    lodging: '1 hanok',
    parking: false
)

ar6 = Area.create!(
    spot_id: 6, 
    num_sites: 2,
    max_guests: 8,
    lodging_provided: false,
    parking: true 
)

#ESSENTIALS
es1 = Essential.create!(
    spot_id: 1,
    campfires: true, 
    toilet: true, 
    pets: false
)

es2 = Essential.create!(
    spot_id: 2,
    campfires: false,
    toilet: true, 
    pets: false
)

es3 = Essential.create!(
    spot_id: 3,
    campfires: false,
    toilet: true, 
    pets: false
)

es4 = Essential.create!(
    spot_id: 4,      
    campfires: true, 
    toilet: false,
    pets: false
)

es5 = Essential.create!(
    spot_id: 5, 
    campfires: false, 
    toilet: true,
    pets: false
)

es6 = Essential.create!(
    spot_id: 6, 
    campfires: true, 
    toilet: true,
    pets: true
)

#AMENITIES 
am1 = Amenity.create!(
    spot_id: 1,
    potable_water: true, 
    kitchen: true, 
    showers: true, 
    wifi: true,
    bins: true
)

am2 = Amenity.create!(
    spot_id: 2,
    potable_water: true,
    kitchen: true,
    showers: true,
    wifi: true,
    bins: true
)

am3 = Amenity.create!(
    spot_id: 3,
    potable_water: true,
    kitchen: true, 
    showers: true,
    wifi: false, 
    bins: true
)

am4 = Amenity.create!(
    spot_id: 4,
    potable_water: false,
    kitchen: false,
    showers: false,
    wifi: false,
    bins: false
)

am5 = Amenity.create!(
    spot_id: 5, 
    potable_water: true,
    kitchen: true,
    showers: true,
    wifi: true,
    bins: true 
)

am6 = Amenity.create!(
    spot_id: 6, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    wifi: true,
    bins: true    
)

#DETAILS
de1 = Detail.create!(
    spot_id: 1,
    checkin_time: 'After 2PM',
    checkout_time: 'Before 12PM',
    cancellation_policy: 'Super Flexible', 
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de2 = Detail.create!(
    spot_id: 2,
    checkin_time: 'After 10AM',
    checkout_time: 'Before 1PM',
    cancellation_policy: 'Strict',
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de3 = Detail.create!(
    spot_id: 3,
    checkin_time: 'After 11AM',
    checkout_time: 'Before 12PM',
    cancellation_policy: 'Flexible',
    on_arrival: 'Meet and greet', 
    min_nights: 1
)

de4 = Detail.create!(
    spot_id: 4,
    checkin_time: 'After 1PM',
    checkout_time: 'Before 2PM',
    cancellation_policy: 'Super Strict',
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de5 = Detail.create!(
    spot_id: 5, 
    checkin_time: 'After 9AM',
    checkout_time: 'Before 3PM',
    cancellation_policy: 'Super Strict',
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de6 = Detail.create!(
    spot_id: 6, 
    checkin_time: 'After 1PM',
    checkout_time: 'Before 2PM',
    cancellation_policy: 'Flexible',
    on_arrival: 'Go straight to camp',
    min_nights: 1
)

#REVIEWS
re1 = Review.create!(
    author_id: 7,
    spot_id: 1, 
    title: 'So much to see and do!',
    body: 'Wowza! This place is a nature lover\'s cornucopia. Definitely won\'t lack for things to do. We hiked and biked all over San Pedro de Atacama and tried sandboarding for the first time!'
)

re2 = Review.create!(
    author_id: 13,
    spot_id: 1,
    body: 'Luciano was an excellent host and even served as our tour guide on the first day!' 
)

re3 = Review.create!(
    author_id: 8,
    spot_id: 6,
    body: 'A great place to unwind and socialize. We hit it off with the other guests, who invited us to join their bonfire on the first night.' 
) 


re4 = Review.create!(
    author_id: 14,
    spot_id: 4,
    title: 'Unforgettable', 
    body: "We stayed with Jennie's family during the week of the Golden Eagle Festival and boy was it a sight! It was a glorious display of culture and tradition. The main act was a feast for the eyes. Participants dressed in full eagle hunting regalia sit atop decorated horses and vie for first place on the Mongolian terrain. Awards handed out included 'Best Eagle at Hunting Prey' and 'Best Eagle at Locating Its Owner from a Distance.' Most fascinating was the bond between eagle and hunter. We learned that the eagles are domesticated and live with the hunter for years, usually around ten before they are released back to the wild."
)

re5 = Review.create!(
    author_id: 19,
    spot_id: 4,
    title: 'Starry starry night',
    body: 'Our ability to do without modern conveniences was put to the test out here, but we were forewarned. After a while you do acclimate and do as the nomads do. The lack of bathroom facilities aside, the expansive night sky was luxury enough.'
)

re6 = Review.create!(
    author_id: 20,
    spot_id: 3,
    title: 'Where rice is life',
    body: 'We loved our time here and the locals were so sweet!'
)

re7 = Review.create!(
    author_id: 16,
    spot_id: 5,
    title: 'Step into the past',
    body: 'We are grateful to Mai for hosting us and teaching us how to make tteok, steamed rice cakes. Seoul is a delightful city of dichotomies, of old and new, modern and traditional, polished and au naturel. Uri Hanok has easy access to public transportation and landmarks. Do be respecful and mindful that the village is not just an attraction. Bukchon Hanok Village gets a lot of foot traffic so residents are not crazy about their neighborhood being overrun with tourists.'
)









