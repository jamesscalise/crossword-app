Rails.application.routes.draw do
  resources :comments
  resources :scores
  resources :time_records
  resources :users
  resources :squares
  resources :clues
  resources :crosswords
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
