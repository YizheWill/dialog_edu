class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
    p 'articles'
    p @articles
  end

  def show
    @article = Article.find_by(id: params[:id])
    if @article
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def update
    @article = Article.find_by(id: params[:id])
    if @article.update(article_params)
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def destroy
    @article = article.find(params[:id])
    if @article.destroy
      render 'api/articles/show'
    else
      render json['Failed to delete article.']
    end
  end

  private

  def article_params
    params.require(:article).permit(:user_id, :title, :body)
  end
end
