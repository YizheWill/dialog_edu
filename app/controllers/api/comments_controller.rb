class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    p 'params'
    p params
    if params[:article_id]
      p 'id'
      p params[:article_id]
      @comments = Comment.where({ article_id: params[:article_id] })
      p 'comments'
      p @comments
    else
      @comments = Comment.all
    end
  end

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render 'api/comments/show'
    else
      renderjson['Failed to delete comment.']
    end
  end

  def under_this_article
    @comments = Article.find(params[:article_id]).comments
    if @comments
      render 'api/comments/index'
    else
      render json: @comments.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :article_id, :content)
  end
end
