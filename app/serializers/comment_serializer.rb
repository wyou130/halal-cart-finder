class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :review
  has_one :user
end
