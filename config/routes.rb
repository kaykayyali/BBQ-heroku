Rails.application.routes.draw do
  devise_for :users
  root 'barbecues#index'

  resources :barbecues, only: [ :index, :show, :new, :create ]

  get '/api/barbecues/:id' => 'barbecues#showBBQ'
  #join a bbq
  post '/api/barbecues/:id/join' => 'barbecues#joinBBQ'
  #add item to bbq
  post '/api/barbecues/:id/addItem' => 'barbecues#addItem'
  #show user
  get '/users/showUser/:id' => 'users#showUser'
  #remove bbq
  delete '/users/removeBBQ/:id' => 'barbecues#removeBBQ'
  #get comments for bbq
  get '/api/barbecues/:id/Comments' => 'barbecues#getComments'
  post '/api/barbecues/:id/Comments' => 'barbecues#addComments'
end
