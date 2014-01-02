class ProjectsController < ApplicationController

  def index
    @projects = []
    @project = Project.first
    @projects << @project 
    render :json => @projects
  end
end
