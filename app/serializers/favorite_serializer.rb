class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :cart
end
