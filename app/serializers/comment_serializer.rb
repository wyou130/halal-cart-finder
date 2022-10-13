class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_name
  has_one :review
  has_one :user

  def user_name
    object.user.name 
  end

end
