class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.integer :spot_id, null: false
      t.integer :num_sites, null: false
      t.integer :max_guests, null: false
      t.boolean :lodging_provided, null: false
      t.string :lodging
      t.boolean :parking, null: false

      t.timestamps
    end
    
    add_index :areas, :spot_id
  end
end
