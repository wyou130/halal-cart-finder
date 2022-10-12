class User < ApplicationRecord

    has_many :reviews, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :carts, through: :favorites

    has_secure_password

    validates :name, :email, :password, :location, presence: true
    validates :name, :email, uniqueness: true

end
