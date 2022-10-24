class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :hot_sauce_spice, :date_visited, :cart_name, :user_name, :user_id, :cart_id, :total_comments, :user_image, :cart_image

  has_one :user
  has_one :cart
  has_many :comments

  def cart_name
    object.cart.name
  end

  def user_name
    object.user.name
  end

  def user_image
    object.user.image
  end

  def cart_image
    object.cart.image
  end

  def total_comments
    object.comments.length
  end

end
