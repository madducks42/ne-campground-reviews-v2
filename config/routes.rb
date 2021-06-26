# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  devise_for :users, path: 'admin', path_names: { 
  sign_in: 'login', sign_out: 'logout' }
  
  root 'homepages#index'

  get '/campgrounds', to: 'homepages#index'
  get '/campgrounds/new', to: 'homepages#authenticated'
  get '/campgrounds/:id/destroy', to: 'homepages#authenticated'
  get '/campgrounds/:id/update', to: 'homepages#authenticated'
  get '/campgrounds/:id', to: 'homepages#index'

  get '/about', to: "homepages#index"
  get '/camper', to: "homepages#index"


  namespace :api do
    namespace :v1 do
      post 'campgrounds/search', to: 'campgrounds#search'
      post 'campgrounds/filter', to: 'campgrounds#filter'

      resources :campgrounds, only: [:index, :show, :create, :edit, :update, :destroy] 
    end
  end

end
    