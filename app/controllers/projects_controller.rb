class ProjectsController < ApplicationController

  def index
    @projects = []
    # binding.pry
    @project = Project.first
    @projects << @project #<<
    render :json => @projects
    # binding.pry
  end
end
