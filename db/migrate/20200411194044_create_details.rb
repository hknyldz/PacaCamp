class CreateDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :details do |t|
      t.integer :spot_id, null: false
      t.string :checkin_time, null: false
      t.string :checkout_time, null: false
      t.string :cancellation_policy, null: false
      t.string :on_arrival, null: false
      t.integer :min_nights, null: false

      t.timestamps
    end
    
    add_index :details, :spot_id 
  end
end
