Rails.application.routes.draw do
  root "mains#index"
  
  resources :blogs, only: [:index, :new, :create, :edit, :update, :destroy]

  resources :mains, only: [:index, :create] do
    collection do
      get "kiji_get" => "mains#kiji_get", defaults: { format: "json"}
      get "comment_get" => "mains#comment_get", defaults: { format: "json"}
      get "dates" => "mains#dates", defaults: { format: "json"}
      get "dates_comment" => "mains#dates_comment", defaults: { format: "json"}
    end
  end
    # resources :comments, only: [:create, :destroy]
  # end
end
