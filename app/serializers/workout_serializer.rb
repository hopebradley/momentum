class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :activity, :minutes, :user_id, :user

  def user
    user = User.find_by(id: self.user_id)
    user
  end
end
