class Favorite < ApplicationRecord

  belongs_to :user
  belongs_to :cart

  validates :user_id, uniqueness: { scope: :cart_id }

end
