class CartsController < ApplicationController

    skip_before_action :authenticated_user, only: [:index, :show]

    # will also want to make sure the user is authorized as admin for the create and update action

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        render json: Cart.all, status: :ok
    end

    def show
        render json: Cart.find(params[:id]), status: :ok
    end

    def create
        render json: Cart.create!(cart_params), status: :created
    end

    def update
        cart = Cart.find(params[:id])
        cart.update!(cart_params)
        render json: cart, status: :accepted 
    end

    private

    def cart_params
        params.permit(:name, :street, :avenue, :landmarks, :accepts_card, :approximate_hours, :chicken_over_rice, :combo_over_rice, :latitude, :longitude, :image)
    end

    def not_found
        render json: { error: 'Cart not found' }, status: :not_found
    end

end
