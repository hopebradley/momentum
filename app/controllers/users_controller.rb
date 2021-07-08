class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render_unprocessable_entity_response(user)
        end
    end

    def show
        user = find_user
        if user
            render json: user, status: :created, include: :workouts
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

    def destroy
        user = find_user
        if user
            user.destroy
            head :no_content
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

    private

    def find_user
        User.find_by(id: session[:user_id])
    end

    def render_unprocessable_entity_response(user)
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end

    def user_params
        params.permit(:username, :name, :activity_level, :password, :password_confirmation, :user)
    end

end
