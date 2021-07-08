class Workout < ApplicationRecord
    belongs_to :user

    validates :title, presence: true, length: {minimum: 2}
    validates :activity, exclusion: {in: %w(–select one–)}
    validates :minutes, numericality: true
end

