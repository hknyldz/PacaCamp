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
Booking.destroy_all

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

alli_olgeirsson  = User.create!(
    first_name: 'Alli',
    last_name: 'Olgeirsson',
    email: 'alliolgeirsson@aa.io',
    password: 'cinnabar'
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

volcano_hut = Spot.create!(
    name: 'Volcano Hut',
    host_id: 21, 
    price: 75,
    location: 'Laugavegur',
    country: 'Iceland',
    latitude: 63.990708, 
    longitude: -19.060590,
    activities: ['hiking'],
    description: 'Begin hiking the  Laugavegur Trail here. The trail is hailed among the world\'s most beautiful treks and for good reason. The trail links a variety of landscapes on it 55km (34mi) path, from volcanic mountains, lava fields, and bubbling hot springs to glaciers, arctic deserts, and green valleys. Most travelers trek the trail from north to south in 3 to 5 days. Come prepared for unpredictable weather!',
    rating: 99
)

volcano_hut.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/13.jpg'), filename: '13.jpg')
volcano_hut.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/14.jpg'), filename: '14.jpg')

tiosh_abaj = Spot.create!(
    name: 'Tiosh Abaj',
    host_id: 4, 
    price: 65,
    location: 'Santiago Atitlán',
    country: 'Guatemala',
    latitude: 14.641408,  
    longitude: -91.232524,
    activities: ['boating', 'hiking', 'biking'],
    description: 'Tiosh Abaj is situated in one of the Mayan towns encircling Lake Atitlán and no trip to Guatemala is complete without a visit to Lake Atitlán. While you\'re here scale the San Pedro Volcano, have a long, hot soak in the thermal baths, hike La Nariz at sunrise, and browse artisan markets.',
    rating: 97
)

tiosh_abaj.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/15.jpg'), filename: '15.jpg')
tiosh_abaj.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/16.jpg'), filename: '16.jpg')

blues_retreat = Spot.create!(
    name: 'Blues Retreat',
    host_id: 15, 
    price: 70,
    location: 'Big Sur, California',
    country: 'United States',
    latitude: 36.255028,
    longitude: -121.815702,
    activities: ['hiking', 'biking', 'wildlife watching'],
    description: 'We are here to provide respite and refuge. Shake the dust off your work-worn spirit. Recharge your batteries. Breathe. Glance up at the sky. Look in the direction of the mountains. Feel the earth beneath you. Just be.',
    rating: 98
)

blues_retreat.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/17.jpg'), filename: '17.jpg')
blues_retreat.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/18.jpg'), filename: '18.jpg')

joshua_mojave = Spot.create!(
    name: 'Joshua Mojave',
    host_id: 14, 
    price: 80,
    location: 'Sandy Valley, Nevada',
    country: 'United States',
    latitude: 35.871525, 
    longitude: -115.584931,
    activities: ['hiking', 'wildlife watching'],
    description: 'Secluded, open desert.',
    rating: 95
)

joshua_mojave.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/19.jpg'), filename: '19.jpg')
joshua_mojave.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/20.jpg'), filename: '20.jpg')

red_open = Spot.create!(
    name: 'Red Open',
    host_id: 5, 
    price: 100,
    location: 'Sedona, Arizona',
    country: 'United States',
    latitude: 34.893644,  
    longitude: -111.848977,
    activities: ['biking', 'hiking', 'wildlife watching'],
    description: 'Enjoy this little slice of heaven amidst red sandstone formations.',
    rating: 97
)

red_open.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/21.jpg'), filename: '21.jpg')
red_open.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/22.jpg'), filename: '22.jpg')

teton_clearing = Spot.create!(
    name: 'Teton Clearing',
    host_id: 12, 
    price: 85,
    location: 'Wapiti, Wyoming',
    country: 'United States',
    latitude: 44.460934, 
    longitude:  -109.497220,
    activities: ['snow sports', 'paddling', 'biking', 'hiking', 'horseback riding', 'wildlife watching'],
    description: 'Alone but not lonely.',
    rating: 96
)

teton_clearing.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/23.jpg'), filename: '23.jpg')
teton_clearing.photos.attach(io: open('https://s3.amazonaws.com/pacacamp-seeds/24.jpg'), filename: '24.jpg')


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

ar7 = Area.create!(
    spot_id: 7, 
    num_sites: 1,
    max_guests: 5,
    lodging_provided: true,
    lodging: '1 hut',
    parking: true
)

ar8 = Area.create!(
    spot_id: 8, 
    num_sites: 1,
    max_guests: 6,
    lodging_provided: true,
    lodging: '1 lodge',
    parking: true
)

ar9 = Area.create!(
    spot_id: 9, 
    num_sites: 3,
    max_guests: 18,
    lodging_provided: false,
    parking: true
)

ar10 = Area.create!(
    spot_id: 10, 
    num_sites: 1,
    max_guests: 6,
    lodging_provided: true,
    lodging: '1 cabin',
    parking: true
)

ar11 = Area.create!(
    spot_id: 11, 
    num_sites: 1,
    max_guests: 12,
    lodging_provided: true,
    lodging: '6 teepees',
    parking: true
)

ar12 = Area.create!(
    spot_id: 12, 
    num_sites: 1,
    max_guests: 5,
    lodging_provided: true,
    lodging: '1 cabin',
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

es7 = Essential.create!(
    spot_id: 7,      
    campfires: false, 
    toilet: true,
    pets: false
)

es8 = Essential.create!(
    spot_id: 8,      
    campfires: false, 
    toilet: true,
    pets: false
)

es9 = Essential.create!(
    spot_id: 9,      
    campfires: true, 
    toilet: true,
    pets: true
)

es10 = Essential.create!(
    spot_id: 10,      
    campfires: true, 
    toilet: true,
    pets: true
)

es11 = Essential.create!(
    spot_id: 11,      
    campfires: true, 
    toilet: true,
    pets: true
)

es12 = Essential.create!(
    spot_id: 12,      
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

am7 = Amenity.create!(
    spot_id: 7,
    potable_water: true,
    kitchen: true,
    showers: true,
    wifi: false,
    bins: true
)

am8 = Amenity.create!(
    spot_id: 8,
    potable_water: true,
    kitchen: true,
    showers: true,
    wifi: true,
    bins: true
)

am9 = Amenity.create!(
    spot_id: 9,
    potable_water: true,
    kitchen: false,
    showers: true,
    wifi: true,
    bins: true
)

am10 = Amenity.create!(
    spot_id: 10,
    potable_water: true,
    kitchen: true,
    showers: true,
    wifi: true,
    bins: true
)

am11 = Amenity.create!(
    spot_id: 11,
    potable_water: true,
    kitchen: false,
    showers: true,
    wifi: false,
    bins: true
)

am12 = Amenity.create!(
    spot_id: 12,
    potable_water: true,
    kitchen: true,
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

de7 = Detail.create!(
    spot_id: 7, 
    checkin_time: 'After 10AM',
    checkout_time: 'Before 3PM',
    cancellation_policy: 'Super Strict',
    on_arrival: 'Go straight to camp',
    min_nights: 1
)

de8 = Detail.create!(
    spot_id: 8, 
    checkin_time: 'After 11AM',
    checkout_time: 'Before 2PM',
    cancellation_policy: 'Flexible',
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de9 = Detail.create!(
    spot_id: 9, 
    checkin_time: 'After 4PM',
    checkout_time: 'Before 1PM',
    cancellation_policy: 'Flexible',
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de10 = Detail.create!(
    spot_id: 10, 
    checkin_time: 'After 12PM',
    checkout_time: 'Before 1PM',
    cancellation_policy: 'Moderate',
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de11 = Detail.create!(
    spot_id: 11, 
    checkin_time: 'After 3PM',
    checkout_time: 'Before 2PM',
    cancellation_policy: 'Strict',
    on_arrival: 'Meet and greet',
    min_nights: 1
)

de12 = Detail.create!(
    spot_id: 12, 
    checkin_time: 'After 5PM',
    checkout_time: 'Before 11AM',
    cancellation_policy: 'Moderate',
    on_arrival: 'Meet and greet',
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

re8 = Review.create!(
    author_id: 2,
    spot_id: 7,
    title: 'Stunning natural beauty',
    body: 'You have to visit to believe it. If you\'re reasonably fit, you can do this without a guide. The trail is well-marked.'
)

re9 = Review.create!(
    author_id: 5,
    spot_id: 8,
    title: 'Picturesque',
    body: 'Plenty of things to do here. The entire area is vibrant and colorful, buzzing with energy. Boats are easily accessible to get from one part of the lake to the next.'
)

re10 = Review.create!(
    author_id: 11,
    spot_id: 9,
    body: 'This was our first time taking our pup camping so we were a little nervous. This ended up being the perfect spot for us. Anthony and Jessica were wonderful hosts. The campsite itself is great, beautiful scenery and great amenities with very convenient bathroom and hot showers. The shower offers a view of rolling golden hills. At night we watched the show of the stars.'
)

re11 = Review.create!(
    author_id: 20,
    spot_id: 10,
    body: 'The cabin was stocked with everything we might need and even provided teepees. The sunset hues of this area are really something.'
)

re12 = Review.create!(
    author_id: 17,
    spot_id: 12,
    title: 'Gorgeous',
    body: 'Breathtaking views to wake up to. Very convenient if you are driving to Yellowstone or the Tetons from east of Cody.'
)









