class Essential < ApplicationRecord
    validates :spot_id, presence: true 
    validates :campfires, :toilet, :pets, inclusion: { in: [true, false] }

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot

end
