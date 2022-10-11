class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :location, :image
end
