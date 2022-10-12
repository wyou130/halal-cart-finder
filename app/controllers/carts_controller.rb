class CartsController < ApplicationController

    skip_before_action :authenticated_user, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        render json: Cart.all, status: :ok
    end

    def show
        render json: Cart.find(params[:id]), status: :ok
    end

    private

    def not_found
        render json: { error: 'Cart not found' }, status: :not_found
    end

end
