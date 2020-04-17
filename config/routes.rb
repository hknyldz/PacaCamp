Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :update] do
      resources :bookings, only: [:index]
    end 

    resource :session, only: [:create, :destroy, :show]
    
    resources :spots, only: [:index, :show] do 
      resources :reviews, only: [:index]
    end 

    resources :reviews, only: [:create, :update, :destroy]

    resources :bookings, only: [:create, :destroy]
  end
end
