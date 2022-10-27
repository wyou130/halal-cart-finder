class LikesReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_name
  
  has_one :user
  has_one :review

  def user_name
    object.user.name
  end

end
