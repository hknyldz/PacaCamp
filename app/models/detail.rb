class Detail < ApplicationRecord
    validates :spot_id, :checkin_time, :checkout_time, :cancellation_policy, :on_arrival, :min_nights, presence: true 

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot
end
