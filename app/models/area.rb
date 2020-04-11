class Area < ApplicationRecord
    validates :lodging_provided, :parking, inclusion: { in: [true, false] }
    validates :spot_id, :num_sites, :max_guests, presence: true 

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot
end
