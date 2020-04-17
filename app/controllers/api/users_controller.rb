class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 400
        end 
    end 

    def index 
        @users = User.all
    end 

    def update
        @user = User.find(params[:id])
        if @user.update_attributes(user_params)
            render :show
        else 
            render json: @user.errors.full_messages, status: 400
        end 
    end 


    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end 
end
