class Suggestion < ApplicationRecord

    belongs_to :user

    validates :name, :street, :avenue, :opening_hours, :closing_hours, :opening_am_pm, :closing_am_pm, :chicken_over_rice, :combo_over_rice, :latitude, :longitude, :image, presence: true 

end
