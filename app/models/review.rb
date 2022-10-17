class Review < ApplicationRecord

  belongs_to :user
  belongs_to :cart
  has_many :comments, dependent: :destroy

  validates :date_visited, :rating, :review, :hot_sauce_spice, presence: true
  validates :rating, :hot_sauce_spice, inclusion: { in: 0..5 }
  validates :user_id, uniqueness: { scope: :cart_id }

end
