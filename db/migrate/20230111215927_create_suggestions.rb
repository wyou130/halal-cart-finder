class CreateSuggestions < ActiveRecord::Migration[7.0]
  def change
    create_table :suggestions do |t|
      t.string :name
      t.string :street
      t.string :avenue
      t.string :landmarks
      t.boolean :accepts_card
      t.integer :chicken_over_rice
      t.integer :combo_over_rice
      t.decimal :latitude
      t.decimal :longitude
      t.string :image
      t.integer :opening_hours
      t.integer :closing_hours
      t.string :opening_am_pm
      t.string :closing_am_pm
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
