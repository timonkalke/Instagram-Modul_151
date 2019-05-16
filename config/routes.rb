Rails.application.routes.draw do
  root 'pages#home'
  get 'user/show/:id', to: 'pages#show'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm
  resources :users, only: [:index, :show]
end
