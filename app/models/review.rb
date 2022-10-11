class Review < ApplicationRecord

  belongs_to :user
  belongs_to :cart
  has_many :comments

  validates :date_visited, :rating, :review, :hot_sauce_spice, presence: true
  validates :rating, :hot_sauce_spice, inclusion: { in: 1..5 }
  validates :user_id, uniqueness: { scope: :cart_id }

end
