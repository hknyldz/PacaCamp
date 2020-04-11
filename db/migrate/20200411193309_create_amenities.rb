class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.integer :spot_id, null: false
      t.boolean :potable_water, null: false
      t.boolean :kitchen, null: false
      t.boolean :showers, null: false
      t.boolean :wifi, null: false
      t.boolean :bins, null: false

      t.timestamps
    end

    add_index :amenities, :spot_id
  end
end
