class ApplicationController < ActionController::API

    include ActionController::Cookies
    
    before_action :authenticated_user

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end

    private

    def authenticated_user
        @current_user ||= User.find_by(id: session[:user_id])
        render json: { error: "Please log in or sign up to view"}, status: :unauthorized unless @current_user 
    end

    def authorize_admin
        @current_user ||= User.find_by(id: session[:user_id])
        render json: { error: "You are not authorized to complete this action"}, status: :unauthorized unless @current_user.admin 
    end

    def invalid(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
