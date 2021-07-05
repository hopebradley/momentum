class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :title
      t.string :activity
      t.string :minutes
      t.string :user_id

      t.timestamps
    end
  end
end
