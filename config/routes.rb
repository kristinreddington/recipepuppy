Rails.application.routes.draw do

  resources :recipes, :only => [:create, :index]
  post 'search', :to => 'recipes#search'

end
