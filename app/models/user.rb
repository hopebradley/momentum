class User < ApplicationRecord
    has_secure_password
    has_many :workouts, dependent: :destroy

    validates :username, presence: true, uniqueness: true, length: {minimum: 3}
    validates :activity_level, exclusion: {in: %w(–select one–)}
    validates :password, length: {minimum: 4}
end
