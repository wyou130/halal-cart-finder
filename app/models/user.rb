class User < ApplicationRecord

    has_many :reviews
    has_many :comments
    has_many :favorites
    has_many :carts, through: :favorites

    has_secure_password

    validates :name, :email, :password, :location, presence: true
    validates :name, :email, uniqueness: true

end
