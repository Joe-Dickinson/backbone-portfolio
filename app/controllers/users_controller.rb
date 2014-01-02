class UsersController < ApplicationController

  def index
    render :json => User.all
  end

  def update
    user = User.find(params[:id])
    user.update_attributes!
    render :nothing => true
  end

  def show
    user = User.find(params[:id])
    render :json => user
  end

  def likes
    @user = User.find(session[:user_id])
    @graph = Koala::Facebook::API.new(@user.facebook_access_token) #oauth_access_token
    @likes = @graph.get_connections("me", "likes")
    @user.likes = @likes[0]["name"]
    @user.to_json
    render :json => @likes
  end

  def authorise_facebook
    permissions = %w(email publish_actions user_events manage_pages publish_actions read_mailbox)
    redirect_to facebook_oauth_client.auth_code.authorize_url(
      :redirect_uri => facebook_oauth_callback_url, :scope => permissions.join(",")
    )
  end

  def facebook_oauth_callback
    access_token = facebook_oauth_client.auth_code.get_token(params[:code], :redirect_uri => facebook_oauth_callback_url, :parse => :query)

    facebook_user = JSON(access_token.get("/me").body).symbolize_keys
    picture = access_token.get('/me/picture')

    @user = User.find_or_create_by_facebook_id!(facebook_user[:id],
      :facebook_access_token => access_token.token,
      :first_name => facebook_user[:first_name],
      :last_name => facebook_user[:last_name],
      :bio => facebook_user[:bio],
      :image_url => picture.response.env[:url].to_s
      )

    flash[:notice] = "Welcome #{@user.first_name}"
    session[:user_id] = @user.id
    redirect_to root_path
  end

  private
  def facebook_oauth_client
    @facebook_oauth_client ||= OAuth2::Client.new(
      BackbonePortfolio::Application.config.facebook_app_id,
      BackbonePortfolio::Application.config.facebook_secret,
      :site => 'https://graph.facebook.com', :token_url => '/oauth/access_token'
    )
  end

end
