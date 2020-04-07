class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            log_in!(@user) 
            render 'api/users/show'
        else
            render json: ['Invalid login credentials. Please try again.'], status: 400 
        end 
    end 

    def destroy
        if current_user
            log_out!
            render json: {}
        else 
            render json: ['You are not logged in!'], status: 404
        end
    end 
end
