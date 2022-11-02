class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :hot_sauce_spice, :date_visited, :cart_name, :user_name, :user_id, :cart_id, :total_comments, :date_visited_formatted, :created_at, :updated_at, :user_image, :total_likes, :liked_by, :liked_by_names

  # has_one :user
  # has_one :cart
  has_many :comments
  # has_many :users, through: :likes_reviews

  def cart_name
    object.cart.name
  end

  def user_name
    object.user.name
  end

  def user_image
    object.user.image
  end

  def total_comments
    object.comments.length
  end

  def created_at
    object.created_at.strftime("%b %-d %Y")
  end

  def updated_at
    object.updated_at.strftime("%b %-d %Y")
  end

  def date_visited
    object.date_visited.to_date
  end

  def date_visited_formatted
    object.date_visited.strftime("%b %-d %Y")
  end

  def total_likes
    object.likes_reviews.length
  end

  def liked_by
    object.likes_reviews.pluck(:user_id)
  end

  def liked_by_names
    object.likes_reviews.map {|lr| lr.user.name}
  end

end
