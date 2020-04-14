class Review < ApplicationRecord
    validates :author_id, :spot_id, :body, presence: true 

    belongs_to :spot,
    foreign_key: :spot_id, 
    class_name: :Spot

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
