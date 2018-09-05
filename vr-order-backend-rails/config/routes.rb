Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :show]
      resources :orders, only: [:create, :show]
    end
  end
end
