class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_name, :review_id, :user_id, :user_image, :created_at, :updated_at
  # has_one :review
  # has_one :user

  def user_name
    object.user.name 
  end

  def user_image
    object.user.image
  end

  def created_at
    object.created_at.strftime("%b %-d %Y")
  end

  def updated_at
    object.updated_at.strftime("%b %-d %Y")
  end

end
