class AddLatLongColumnsToCarts < ActiveRecord::Migration[7.0]
  def change
    add_column :carts, :latitude, :decimal 
    add_column :carts, :longitude, :decimal
  end
end
