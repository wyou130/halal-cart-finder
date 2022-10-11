class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.date :date_visited
      t.integer :rating
      t.string :review
      t.integer :hot_sauce_spice
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
