class RemoveHoursFromCarts < ActiveRecord::Migration[7.0]
  def change
    remove_column :carts, :approximate_hours
  end
end
