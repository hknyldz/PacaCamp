class Booking < ApplicationRecord
    validates :guest_id, :spot_id, :num_guests, :checkin_date, :checkout_date, :total, presence: true

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot

    belongs_to :guest,
    foreign_key: :guest_id,
    class_name: :User

end
