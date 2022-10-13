class ReviewsController < ApplicationController

    skip_before_action :authenticated_user, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Review.all, status: :ok
    end

    def show
        render json: Review.find(params[:id]), status: :ok
    end

    def create
        render json: Review.create!(review_params), status: :created
    end

    def update
        updated_review = Review.find(params[:id])
        updated_review.update!(review_params)
        render json: updated_review, status: :accepted
    end

    def destroy
        render json: Review.find(params[:id]).destroy!
        head :no_content
    end

    private

    def review_params
        params.permit(:date_visited, :rating, :review, :hot_sauce_spice, :user_id, :cart_id)
    end

    def not_found
        render json: { error: 'Review not found' }, status: :not_found
    end

end
