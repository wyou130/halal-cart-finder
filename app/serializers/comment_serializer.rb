class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_name, :review_id, :user_id, :user_image
  # has_one :review
  # has_one :user

  def user_name
    object.user.name 
  end

  def user_image
    object.user.image
  end

end
