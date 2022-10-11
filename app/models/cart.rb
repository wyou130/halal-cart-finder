class Cart < ApplicationRecord

    has_many :reviews
    has_many :comments, through: :reviews
    has_many :favorites
    has_many :users, through: :favorites

    validates :name, :street, :avenue, :approximate_hours, :chicken_over_rice, :combo_over_rice, presence: true 

end
