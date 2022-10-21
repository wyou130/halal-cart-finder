class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location, :image, :total_reviews

  has_many :reviews

  def total_reviews
    object.reviews.length
  end

end
