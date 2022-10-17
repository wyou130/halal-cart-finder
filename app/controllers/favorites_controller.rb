class FavoritesController < ApplicationController

    # This index action shows only the specific favorites for the current user, similar to the specific_review action in comments controller
    def index
        render json: Favorite.where(user_id: session[:user_id])
    end

    def create
        render json: Favorite.create!(favorite_params), status: :created
    end

    def destroy
        render json: Favorite.find(params[:id]).destroy!
        head :no_content
    end

    private 

    def favorite_params
        params.permit(:user_id, :cart_id)
    end

end
