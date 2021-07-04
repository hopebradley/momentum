class UsersController < ApplicationController

    def create
    end

    def show
    end

    private

    def user_params
        params.permit(:username, :name, :activity_level, :password, :password_confirmation)
    end
end
