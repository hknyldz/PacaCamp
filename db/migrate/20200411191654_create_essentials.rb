class CreateEssentials < ActiveRecord::Migration[5.2]
  def change
    create_table :essentials do |t|
      t.integer :spot_id, null: false
      t.boolean :campfires, null: false
      t.boolean :toilet, null: false
      t.boolean :pets, null: false
  
      t.timestamps
    end
    
    add_index :essentials, :spot_id
  end
end
