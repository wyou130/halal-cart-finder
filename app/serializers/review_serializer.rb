class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :hot_sauce_spice, :date_visited, :comments
  has_one :user
  has_one :cart
  has_many :comments
end
