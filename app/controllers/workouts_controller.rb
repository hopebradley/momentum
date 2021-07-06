class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all 
        render json: workouts, include: :user
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
        workout = Workout.find_by(id: params[:id])
        if workout
            workout.update(workout_params)
            render json: workout, status: :created
        else
            render json: { errors: ["Workout not found"]}
        end
    end

    def destroy
        workout = Workout.find_by(id: params[:id])
        if workout 
            workout.destroy
            head :no_content
        else
            render json: { errors: ["Unauthorized"]}, status: :unauthorized
        end
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
