class MainsController < ApplicationController
  def index
    @informations = Tune.where(tune_params)

    @blog = Blog.last
    @blogs = Blog.limit(7).order('id DESC')

    @comments = Comment.where(blog_id: @blog.id)
  end



  # プルダウンメニュークリックでの記事習得機能
  def kiji_get
    @blog = Blog.find(params[:kiji_id])
  end

  def comment_get
    @blog = Blog.find(params[:kiji_id])
    @comments = Comment.where(blog_id: @blog.id)
  end
  # ーーーーーーーーーーーーーーーーーーーーーーーーーーー
  # ーーーーーーーーーーーーーーーーーーーーーーーーーーー



  # カレンダークリックでの記事習得機能
  def dates
    date = Date.parse(params[:date])
    @blog = Blog.where(created_at: date.beginning_of_day..date.end_of_day).limit(1)
  end

  def dates_comment
    date = Date.parse(params[:date])
    @blog = Blog.where(created_at: date.beginning_of_day..date.end_of_day).limit(1)
    @comments = Comment.where(blog_id: @blog.ids)
  end
  # ーーーーーーーーーーーーーーーーーーーーーーーーーーー
  # ーーーーーーーーーーーーーーーーーーーーーーーーーーー



  def create
    @comments = Comment.where(blog_id: comment_params[:blog_id])
    @comment = Comment.new(comment_params)
    @comment.save
  end




  # ーーーーーーーーーーーーーーーーーーーーーーーーーーー
  # ーーーーーーーーーーーーーーーーーーーーーーーーーーー
  private
  def tune_params
    params.permit(:img_url, :music_title, :artist_name)
  end


  def comment_params
    params.permit(:comment, :nickname).merge(blog_id: params[:blog_id])
  end
end

