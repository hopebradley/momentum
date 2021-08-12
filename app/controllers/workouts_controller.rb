class WorkoutsController < ApplicationController

    before_action :find_workout, only: [:update, :destroy]


    def index
        workouts = Workout.all 
        render json: workouts, include: :user
    end

    def create
        user = current_user
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
        if @workout
            @workout.update(workout_params)
            if @workout.valid?
                render json: @workout, status: :created
            else
                render_unprocessable_entity_response(@workout)
            end
        else
            render_not_found_response
        end
    end

    def destroy
        if @workout 
            @workout.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end

    def user_workouts
        user = current_user
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

    def find_workout
        @workout = Workout.find_by(id: params[:id])
    end


    # exception handling helper methods




end

