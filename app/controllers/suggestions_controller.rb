class SuggestionsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Suggestion.all, status: :ok
    end

    def show
        render json: Suggestion.find(params[:id]), status: :ok
    end

    def create
        render json: Suggestion.create!(sugg_params), status: :created
    end

    def destroy
        render json: Suggestion.find(params[:id]).destroy!
        head :no_content
    end

    private

    def sugg_params
        params.permit(:name, :street, :avenue, :landmarks, :accepts_card, :opening_hours, :closing_hours, :opening_am_pm, :closing_am_pm, :chicken_over_rice, :combo_over_rice, :latitude, :longitude, :image, :user_id)
    end

    def not_found
        render json: { error: 'Suggestion not found' }, status: :not_found
    end

end
