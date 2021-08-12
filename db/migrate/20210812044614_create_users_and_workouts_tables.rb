class CreateUsersAndWorkoutsTables < ActiveRecord::Migration[6.1]
  def change

    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :activity_level
      t.string :password_digest

      t.timestamps
    end

    create_table :workouts do |t|
      t.string :title
      t.string :activity
      t.string :minutes
      t.string :user_id

      t.timestamps
    end
  end
end
