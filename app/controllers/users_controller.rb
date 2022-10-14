class UsersController < ApplicationController

    skip_before_action :authenticated_user, only: [:create]

    rescue_from ActiveRecord::RecordInvalid, with: :invalid 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end

    def show
        if params[:id]
            render json: User.find(params[:id]), status: :ok
        else
            render json: @current_user, status: :ok
        end
    end

    def index
        render json: User.all, status: :ok
    end

    def update
        updated_user = User.find(params[:id])
        updated_user.update!(user_params)
        render json: updated_user, status: :accepted
    end

    def destroy
        render json: User.find(params[:id]).destroy!
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :email, :password, :location, :image)
    end

end
