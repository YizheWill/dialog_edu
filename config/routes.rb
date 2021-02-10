Rails.application.routes.draw do
  namespace :api do
    resources :articles, only: %i(index show destroy update create)
  end
  root 'home#index'
  match '*path', to: 'home#index', via: [:get]
end
