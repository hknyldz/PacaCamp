class Spot < ApplicationRecord
    validates :name, :host_id, :price, :location, :country, :latitude, :longitude, :activities, :description, :rating, presence: true 

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    # lodging
    # validates :lodging_provided, :parking, 
    # validates :num_sites, :max_guests, presence: true 

    # essential
    # validates :campfires, :toilet, :pets, inclusion: { in: [true, false] }

    # amenity
    # validates :potable_water, :kitchen, :showers, :wifi, :bins, inclusion: { in: [true, false] }
    
    # detail
    # validates :checkin_time, :checkout_time, :cancellation_policy, :on_arrival, :min_nights, presence: true 


    # has_many_attached :photos

    # has_many :bookings,
    # foreign_key: :spot_id, 
    # class_name: :Booking

    # has_many :reviews,
    # foreign_key: :spot_id, 
    # class_name: :Review
end
