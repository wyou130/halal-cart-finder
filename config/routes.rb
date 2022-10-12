Rails.application.routes.draw do
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :favorites, only: [:index, :create, :destroy]
  resources :reviews
  resources :carts, only: [:index, :show]
  resources :users, only: [:show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/hello', to: 'application#hello_world'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

  #signup route
  post '/signup', to: 'users#create'

  #login route
  post '/login', to: 'sessions#create'

  # Allows users to stay logged in by showing just that one user 
  get '/me', to: 'users#show'

  # Logout route 
  delete '/logout', to: 'sessions#destroy'

end
