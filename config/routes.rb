Rails.application.routes.draw do
  namespace :api do
    resources :articles, only: %i(index show destroy update create)
    resources :comments, only: %i(index show update create)
  end
  root 'home#index'
  match '*path', to: 'home#index', via: [:get]
  get '/comments/:article_id', to: 'comments#under_this_article'
end
