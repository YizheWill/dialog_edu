Rails.application.routes.draw do
  namespace :api do
    resources :articles, only: %i(index show destroy update create) do
      resources :comments, only: %i(index)
    end
    resources :comments, only: %i(index show update create)
  end
  root 'home#index'
  match '*path', to: 'home#index', via: [:get]
  get '/api/comments/:article_id', to: 'comments#under_this_article'
end
