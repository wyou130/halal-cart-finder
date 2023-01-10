class Cart < ApplicationRecord

    has_many :reviews
    has_many :comments, through: :reviews
    has_many :favorites
    has_many :users, through: :favorites

    validates :name, :street, :avenue, :opening_hours, :closing_hours, :opening_am_pm, :closing_am_pm, :chicken_over_rice, :combo_over_rice, :latitude, :longitude, :image, presence: true 

    # validations for prices > 1
    # validations for coordinates being decimal values
    # validations for hours being integer values 1-12
    # validations for am_pm being only "AM" or "PM"

end
