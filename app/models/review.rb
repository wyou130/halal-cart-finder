class Review < ApplicationRecord

  belongs_to :user
  belongs_to :cart
  has_many :comments, dependent: :destroy
  has_many :likes_reviews, dependent: :destroy

  validates :date_visited, :rating, :review, :hot_sauce_spice, presence: true
  validates :rating, :hot_sauce_spice, inclusion: { in: 0..5, message: 'must be rated using the slider' }
  validates :user_id, uniqueness: { scope: :cart_id, message: 'has already written a review' }
  validate :visited_cannot_be_in_future

  def visited_cannot_be_in_future
    if date_visited.future?
      errors.add(:date_visited, "can't be in the future")
    end
  end

end
