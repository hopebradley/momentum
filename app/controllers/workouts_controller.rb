class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all 
        render json: workouts
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            workout = user.workouts.create(workout_params)
            if workout.valid?
                render json: workout, status: :created
            else
                render json: { errors: workout.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    def update
    end

    def destroy
    end

    def user_workouts
        user = User.find_by(id: session[:user_id])
        if user
            workouts = user.workouts
            render json: workouts
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    private

    def workout_params
        params.permit(:title, :activity, :minutes, :user_id)
    end
end