class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
    p 'articles'
    p @articles
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
