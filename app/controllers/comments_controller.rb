class CommentsController < ApplicationController

    skip_before_action :authenticated_user, only: [:specific_review]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    # Might not need index route? Could render comments with review serializer 
    # def index 
    #     render json: Comment.all, status: :ok 
    # end

    def create
        render json: Comment.create!(comment_params), status: :created
    end

    def update
        updated_comment = Comment.find(params[:id])
        updated_comment.update!(comment_params)
        render json: updated_comment, status: :accepted
    end

    def destroy
        Comment.find(params[:id]).destroy!
        head :no_content
    end

    def specific_review
        render json: Comment.where(review_id: params[:review_id])
    end

    private 
    
    def comment_params
        params.permit(:comment, :user_id, :review_id)
    end

    def not_found
        render json: { error: 'Comment not found' }, status: :not_found
    end

end
