class UsersController < ApplicationController

  def index
    # @users = User.all 
    # render :json => @users
    render :json => User.all
  end

  def update
    user = User.find(parms[:id])
    user.update_attributes!
    render :nothing => true
  end
end
