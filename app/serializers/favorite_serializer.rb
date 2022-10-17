class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user, :user_id
  has_one :user
  has_one :cart
end
