class ApplicationController < ActionController::API
  include ActionController::Cookies

  def render_unauthorized_response
      render json: { errors: ["Unauthorized"]}, status: :unauthorized
  end

  def render_unprocessable_entity_response(resource)
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
      render json: { errors: ["Workout not found"] }, status: :not_found
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end
