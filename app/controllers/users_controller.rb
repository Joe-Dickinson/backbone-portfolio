class UsersController < ApplicationController

  def index
    # @users = User.all 
    # render :json => @users
    render :json => User.all
  end

  def update
    user = User.find(params[:id])
    user.update_attributes!
    render :nothing => true
  end

  def show
    # binding.pry
    user = User.find(params[:id])
    # binding.pry
    render :json => user  #< user.projects
  end
end
