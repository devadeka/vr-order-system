Rails.application.routes.draw do
  resources :orders
  namespace :api do
    namespace :v1 do
      resources :items
    end
  end
end
