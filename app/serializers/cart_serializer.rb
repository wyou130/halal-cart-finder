class CartSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :avenue, :landmarks, :accepts_card, :approximate_hours, :chicken_over_rice, :combo_over_rice, :favorited_by, :latitude, :longitude, :average_rating, :average_price, :average_spice_rating

  # Putting this association uses review serializer
  has_many :reviews
  has_many :comments, through: :reviews
  has_many :favorites

  def favorited_by
    object.favorites.pluck(:user_id)
  end

  def latitude
    object.latitude.to_f
  end

  def longitude
    object.longitude.to_f
  end

  def average_rating
    object.reviews.average(:rating)
  end

  def average_spice_rating
    object.reviews.average(:hot_sauce_spice)
  end

  def average_price
    ((object.combo_over_rice.to_f + object.chicken_over_rice.to_f) / 2.0).to_f
  end
  
end
