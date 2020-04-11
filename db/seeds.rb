# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Spot.destroy_all
# Lodging.destroy_all
# Essential.destroy_all
# Amenity.destroy_all
# Detail.destroy_all
# Booking.destroy_all
# Review.destroy_all

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
    activities: ['hiking', 'biking', 'horseback riding'],
    description: 'Wait. Take a minute. Slow down. Traverse the desert on bike. Slide down the dunes on a sandboard. Smile at the alpacas.',
    rating: 98
)

rows_of_lavender = Spot.create!(
    name: 'Rows of Lavender',
    host_id: 18, 
    price: 70,
    location: 'Wanaka',
    country: 'New Zealand', 
    latitude: -44.703724, 
    longitude: 169.187210,
    activities: ['fishing', 'hiking', 'skiing', 'wildlife watching'],
    description: "Can someone say 'fragrance for miles'? Rows of Lavender is a family-run lavender farm that's been operating for generations. Walk our acres of lavender fields. Indulge in freshly made herbal tea and lavender sweets. Take in the wilderness. Ski on nearby snowcapped mountains. Wander in beech forests and alpine lakes. Our guests receive the full spectrum of the nature experience.",
    rating: 95
)

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

eagles_landing = Spot.create!(
    name: 'Eagle\'s Landing',
    host_id: 11, 
    price: 75,
    location: 'Bayan-Ölgii',
    country: 'Mongolia', 
    latitude: 48.862290, 
    longitude: 88.589764,
    activities: ['horseback riding'],
    description: 'Welcome to Eagle\'s Landing. We are a nomadic family in western Mongolia, where our way of life reflects our relationship with our land. Change is a constant and we go where our herd goes. We take only as much as we need and subsist almost entirely on the milk and meat of our animals. Every year the Golden Eagle Festival is held held on the first weekend of October here in Bayan-Ölgii, where hunter and eagle demonstrate their prowess and connection on the steppes of our homeland. Ready for a taste of a life free from the golden shackles of modernity? But do be aware you\'ll be at the mercy of the vicissitudes of the seasons and terrain.',
    rating: 100
)

uri_hanok = Spot.create!(
    name: 'Uri Hanok',
    host_id: 17, 
    price: 150,
    location: 'Seoul',
    country: 'South Korea', 
    latitude: 37.582633, 
    longitude: 126.983610,
    activities: ['hiking'],
    description: 'Uri Hanok is situated in Bukchon Hanok Village, a traditional village that dates back to the Joseon Dynasty. Formerly the residential quarters of high-ranking officials and nobility of centuries past, Bukchon Hanok Village is now home to cultural centers, guesthouses, and restaurants and many hanoks in the village remain private residences. Immerse yourself in the culture and ceremonies of traditional Korea here! Additionally, should you also like a walk on the royal side, we are also between Gyeongbokgung Palace and Changdeokgung Palace.',
    rating: 100
)

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







