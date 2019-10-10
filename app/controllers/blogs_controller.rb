class BlogsController < ApplicationController
  def index
    # @blog = Blog.find
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      redirect_to root_path
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

private
  def blog_params
    params.require(:blog).permit(:title, :text, :video_url, :image)
  end
end


# (title: blog_params[:title], text: blog_params[:text], video_url: blog_params[:video_url])