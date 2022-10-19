class CartSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :avenue, :landmarks, :accepts_card, :approximate_hours, :chicken_over_rice, :combo_over_rice, :favorited_by, :latitude, :longitude

  # Putting this association uses review serializer
  has_many :reviews
  has_many :comments, through: :reviews
  has_many :favorites

  def favorited_by
    object.favorites.pluck(:user_id)
  end
  
end
