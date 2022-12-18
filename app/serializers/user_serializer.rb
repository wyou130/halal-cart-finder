class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location, :image, :total_reviews, :created_at, :favorites, :admin

  has_many :reviews
  has_many :favorites

  def total_reviews
    object.reviews.length
  end

  def created_at
    object.created_at.strftime("%b %-d, %Y")
  end

end
