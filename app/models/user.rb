class User < ApplicationRecord
    has_secure_password
    has_many :workouts

    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 4}
end
