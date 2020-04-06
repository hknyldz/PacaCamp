class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?

    private 

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def ensure_logged_in  
        render json: { base: ['You must log in to access this page.'] }, status: 401
    end 

    def log_in!(user)
        session[:session_token] = user.session_token
    end 

    def logged_in? 
        !!current_user
    end 

    def log_out!
        current_user.reset_session_token!
        session[:session_token] = nil
    end 

end

