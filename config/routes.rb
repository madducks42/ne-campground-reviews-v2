# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  devise_for :users, path: 'admin', path_names: { sign_in: 'login', sign_out: 'logout' }
  root 'homepages#index'
  get '/campgrounds', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      post 'campgrounds/search', to: 'campgrounds#search'
      post 'campgrounds/filter', to: 'campgrounds#filter'

      resources :campgrounds, only: [:index, :show, :create, :edit, :update, :destroy] 
    end
  end

end
    