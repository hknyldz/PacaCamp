class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :guest_id, null: false
      t.integer :spot_id, null: false
      t.integer :num_guests, null: false
      t.date :checkin_date, null: false
      t.date :checkout_date, null: false
      t.integer :total, null: false

      t.timestamps
    end

    add_index :bookings, :guest_id
    add_index :bookings, :spot_id
  end
end
