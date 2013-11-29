class ProjectsController < ApplicationController

  def index
    @projects = []
    render :json => @projects
  end
end
