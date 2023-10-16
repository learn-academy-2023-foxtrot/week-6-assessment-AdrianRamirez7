# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)BlogPost class that is created when the command $rails g BlogPosts is created in terminal. This class also inherits from the Application controller class.
class BlogPostsController < ApplicationController
  def index
    # ---2) Allows all data that was added the BlogPost controller to be seen on the main page of the rails app.
    @posts = BlogPost.all
  end

  # ---3) Will display the specific blog information related to the id that is given into the url. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)Makes a new blog post as a form
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Saves the blog post inside the 'new' method
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)Allows the user to go to a specific id and update/edit its content
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Update the blog post according the the specific parameters
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)Deletes the blog post from the site along with its id.
      redirect_to blog_posts_path
    end
  end

  # ---9)Creates the private section of the controller actions that are blocked from other users.
  private
  def blog_post_params
    # ---10)Will let the action understand which parameters can be modified.
    params.require(:blog_post).permit(:title, :content)
  end
end
