class Spot < ApplicationRecord
    validates :name, :host_id, :price, :location, :country, :latitude, :longitude, :activities, :description, :rating, presence: true 

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User,
    dependent: :destroy

    has_many_attached :photos

    has_one :area,
    foreign_key: :spot_id,
    class_name: :Area,
    dependent: :destroy

    has_one :essential,
    foreign_key: :spot_id,
    class_name: :Essential,
    dependent: :destroy

    has_one :amenity,
    foreign_key: :spot_id,
    class_name: :Amenity,
    dependent: :destroy

    has_one :detail,
    foreign_key: :spot_id,
    class_name: :Detail,
    dependent: :destroy

    has_many :reviews,
    foreign_key: :spot_id,
    class_name: :Review,
    dependent: :destroy

    # area
    # validates :lodging_provided, :parking, inclusion: { in: [true, false] }
    # validates :spot_id, :num_sites, :max_guests, presence: true 

    # essential
    # validates :spot_id, presence: true 
    # validates :campfires, :toilet, :pets, inclusion: { in: [true, false] }

    # amenity
    # validates :spot_id, presence: true 
    # validates :potable_water, :kitchen, :showers, :wifi, :bins, inclusion: { in: [true, false] }
    
    # detail
    # validates :spot_id, :checkin_time, :checkout_time, :cancellation_policy, :on_arrival, :min_nights, presence: true 


    # has_many_attached :photos

    # has_many :bookings,
    # foreign_key: :spot_id, 
    # class_name: :Booking

    
end
