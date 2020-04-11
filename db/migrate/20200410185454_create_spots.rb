class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name, null: false
      t.integer :host_id, null: false
      t.integer :price, null: false
      t.string :location, null: false
      t.string :country, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :activities, default: [], array: true
      t.text :description, null: false

      # area
      # t.integer :spot_id, null: false
      # t.integer :num_sites, null: false
      # t.integer :max_guests, null: false
      # t.boolean :lodging_provided, default: false, null: false
      # t.string :lodging
      # t.boolean :parking, default: false, null: false
      # add_index :areas, :spot_id

      # essential
      # t.integer :spot_id, null: false
      # t.boolean :campfires, default: false, null: false
      # t.boolean :toilet, default: false, null: false
      # t.boolean :pets, default: false, null: false
      # add_index :essentials, :spot_id

      # amenity
      # t.integer :spot_id, null: false
      # t.boolean :potable_water, default: false, null: false
      # t.boolean :kitchen, default: false, null: false
      # t.boolean :showers, default: false, null: false
      # t.boolean :wifi, default: false, null: false
      # t.boolean :bins, default: false, null: false
      # add_index :, :spot_id
      
      # detail
      # t.integer :spot_id, null: false
      # t.string :checkin_time, null: false
      # t.string :checkout_time, null: false
      # t.string :cancellation_policy, null: false
      # t.string :on_arrival, null: false
      # t.integer :min_nights, null: false
      # add_index :details, :spot_id 
      

      t.timestamps
    end

    add_index :spots, :host_id
  end
end
