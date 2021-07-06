class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :activity_level, :password_digest, :workouts

  def workouts
    self.workouts
  end
end
