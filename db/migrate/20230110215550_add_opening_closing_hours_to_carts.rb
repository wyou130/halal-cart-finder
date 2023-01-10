class AddOpeningClosingHoursToCarts < ActiveRecord::Migration[7.0]
  def change
    add_column :carts, :opening_hours, :integer 
    add_column :carts, :closing_hours, :integer 
    add_column :carts, :opening_am_pm, :string
    add_column :carts, :closing_am_pm, :string
  end
end
