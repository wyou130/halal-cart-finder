class AddImageColumnToCarts < ActiveRecord::Migration[7.0]
  def change
    add_column :carts, :image, :string 
  end
end
