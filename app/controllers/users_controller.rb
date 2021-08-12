class UsersController < ApplicationController

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
        user = current_user
        if user
            render json: user, status: :created, include: :workouts
        else
            render_unauthorized_response
        end
    end

    def destroy
        user = current_user
        if user
            user.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end


    private

    def user_params
        params.permit(:username, :name, :activity_level, :password, :password_confirmation, :user)
    end

    # exception handling helper methods

end
