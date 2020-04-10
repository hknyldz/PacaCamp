# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Spot.destroy_all
# Booking.destroy_all
# Review.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

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








