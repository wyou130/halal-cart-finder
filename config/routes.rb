Rails.application.routes.draw do
  resources :likes_reviews, only: [:index, :create, :destroy]
  resources :comments, only: [:create, :update, :destroy]
  resources :favorites, only: [:index, :create]
  resources :reviews
  resources :carts, only: [:index, :show, :create, :update]
  resources :users
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

  # Custom route for showing comments attached to specific review
  get '/comments/:review_id', to: 'comments#specific_review'

  # Custom route for deleting favorite based on user_id and cart_id
  delete '/favorites/:user_id/:cart_id', to: 'favorites#delete'

  # Custom route for deleting like based on user_id and review_id
  delete '/likes_reviews/:user_id/:review_id', to: 'likes_reviews#delete'

end
