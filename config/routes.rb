Rails.application.routes.draw do

  root 'application#home'

  get "/download_resume" => 'application#download_resume'

  resources :contact_forms, only: [:new, :create]

end
