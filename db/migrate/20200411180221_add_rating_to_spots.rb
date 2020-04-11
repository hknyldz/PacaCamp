class AddRatingToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :rating, :integer, null: false
  end
end
