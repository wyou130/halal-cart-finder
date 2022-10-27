class LikesReviewsController < ApplicationController

    def index
        render json: LikesReview.all, status: :ok
    end

    def create
        render json: LikesReview.create!(likes_reviews_params), status: :created
    end

    def delete
        render json: LikesReview.find_by(user_id: params[:user_id], review_id: params[:review_id]).destroy!
        head :no_content
    end

    private

    def likes_reviews_params
        params.permit(:user_id, :review_id)
    end

end
