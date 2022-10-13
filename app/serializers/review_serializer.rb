class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :hot_sauce_spice, :date_visited
  has_one :user
  has_one :cart
end
