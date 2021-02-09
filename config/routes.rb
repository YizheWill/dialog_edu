Rails.application.routes.draw do
  namespace :api do
    get 'comments/index'
    get 'comments/show'
    get 'comments/create'
    get 'comments/update'
    get 'comments/destroy'
  end
  namespace :api do
    get 'articles/index'
    get 'articles/show'
    get 'articles/create'
    get 'articles/update'
    get 'articles/destroy'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'
  match '*path', to: 'welcome#index', via: [:get]
end
