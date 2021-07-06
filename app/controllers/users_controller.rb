class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created, include: :workouts
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            user.destroy
            head :no_content
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :name, :activity_level, :password, :password_confirmation, :user)
    end

end
