Rails.application.routes.draw do
  resources :tag_links, only: [:index, :show, :create, :update, :destroy]
  resources :tags, only: [:index, :show, :create, :update, :destroy]
  resources :components, only: [:index, :show, :create, :update, :destroy]
  resources :ingredients, only: [:index, :show, :create, :update, :destroy]
  resources :spells, only: [:index, :show, :create, :update, :destroy]
  resources :spell_books, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #Session Routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
end
