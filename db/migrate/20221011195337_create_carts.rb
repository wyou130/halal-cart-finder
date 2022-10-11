class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.string :name
      t.string :street
      t.string :avenue
      t.string :landmarks
      t.boolean :accepts_card
      t.string :approximate_hours
      t.integer :chicken_over_rice
      t.integer :combo_over_rice

      t.timestamps
    end
  end
end
