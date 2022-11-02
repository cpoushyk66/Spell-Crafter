Rails.application.routes.draw do
  resources :tag_links
  resources :tags
  resources :components
  resources :ingredients
  resources :spells
  resources :spell_books
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
