class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all 
        render json: workouts, include: :user
    end

    def create
        user = find_user
        if user
            workout = user.workouts.create(workout_params)
            if workout.valid?
                render json: workout, status: :created
            else
                render_unprocessable_entity_response(workout)
            end
        else
            render_unauthorized_response
        end
    end

    def update
        workout = find_workout
        if workout
            workout.update(workout_params)
            if workout.valid?
                render json: workout, status: :created
            else
                render_unprocessable_entity_response(workout)
            end
        else
            render_not_found_response
        end
    end

    def destroy
        workout = find_workout
        if workout 
            workout.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end

    def user_workouts
        user = find_user
        if user
            workouts = user.workouts
            render json: workouts
        else
            render_unauthorized_response
        end
    end

    private

    def workout_params
        params.permit(:title, :activity, :minutes, :user_id)
    end

    def find_user
        User.find_by(id: session[:user_id])
    end

    def find_workout
        Workout.find_by(id: params[:id])
    end

    # exception handling helper methods

    def render_unauthorized_response
        render json: { errors: ["Unauthorized"]}, status: :unauthorized
    end

    def render_unprocessable_entity_response(workout)
        render json: { errors: workout.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
            render json: { errors: ["Workout not found"] }, status: :not_found
    end


end

