class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location, :image
end
