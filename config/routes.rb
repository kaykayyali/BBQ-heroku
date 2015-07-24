Rails.application.routes.draw do
  devise_for :users
  root 'barbecues#index'

  resources :barbecues, only: [ :index, :show, :new, :create ]

  get '/api/barbecues/:id' => 'barbecues#showBBQ'
  post '/api/barbecues/:id/join' => 'barbecues#joinBBQ'
  post '/api/barbecues/:id/addItem' => 'barbecues#addItem'
  get '/users/showUser/:id' => 'users#showUser'
  delete '/users/removeBBQ/:id' => 'barbecues#removeBBQ'
end
