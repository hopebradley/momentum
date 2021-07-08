class Workout < ApplicationRecord
    belongs_to :user

    validates :title, presence: true, length: {minimum: 2}
    validates :activity, inclusion: {in: %w(running walking cycling sports swimming dance yoga other), message: "can't be blank"}
    validates :minutes, numericality: true
end

