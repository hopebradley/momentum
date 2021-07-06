class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :activity_level, :password_digest, :workouts

  has_many :workouts

end
