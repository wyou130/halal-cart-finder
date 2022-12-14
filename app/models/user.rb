class User < ApplicationRecord

    has_many :reviews, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :carts, through: :favorites
    has_many :likes_reviews, dependent: :destroy

    has_secure_password

    validates :name, :email, :location, presence: true
    validates :name, :email, uniqueness: true

end
