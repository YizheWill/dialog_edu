class Api::ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if (params[:key_word])
      to_search = "#{params[:key_word]}"
      @articles = Article.where("title LIKE '%#{to_search}%'").or(Article.where("body LIKE '%#{to_search}%'"))
    else
      @articles = Article.all
    end
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
    @article = Article.find_by(id: params[:id])
    if @article.destroy
      render :show
    else
      render json({ msg: 'error' })
    end
  end

  private

  def article_params
    params.require(:article).permit(:user_id, :title, :body)
  end
end
