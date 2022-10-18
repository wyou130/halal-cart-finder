class FavoritesController < ApplicationController

    # This index action shows only the specific favorites for the current user, similar to the specific_review action in comments controller
    def index
        render json: Favorite.where(user_id: session[:user_id])
    end

    def create
        render json: Favorite.create!(favorite_params), status: :created
    end

    def delete
        render json: Favorite.find_by(user_id: params[:user_id], cart_id: params[:cart_id]).destroy!
        head :no_content
    end

    private 

    def favorite_params
        params.permit(:user_id, :cart_id)
    end

end
