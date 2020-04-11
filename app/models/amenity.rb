class Amenity < ApplicationRecord
    validates :spot_id, presence: true 
    validates :potable_water, :kitchen, :showers, :wifi, :bins, inclusion: { in: [true, false] }

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot
end
