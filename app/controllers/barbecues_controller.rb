class BarbecuesController < ApplicationController
  
  before_action(:authenticate_user!)
  def index

    @barbecues = Barbecue.order(:date)
  end

  def show
    @users = User.all
    @bbq = Barbecue.find_by(:id => params[:id])
    @items = @bbq.items
  end

  def addItem
    bbq = Barbecue.find_by(:id => params[:id])
    user = current_user.id
    newItem = Item.create(:name => params[:itemName])
    current_user.items.push(newItem)
    bbq.items.push(newItem)
    render :status => 200, :json => {
      :response => "Successful"
    }
    
  end

  def removeBBQ
    bbq = Barbecue.find_by(:id => params[:id])
    current_user.barbecues.delete(bbq)
    render :status => 200, :json => {
          :response => "Confirmed"
        }
  end

  def showBBQ

    bbq = Barbecue.find_by(:id => params[:id])
    bbqPackage = {
      :title => bbq.title,
      :date => bbq.date,
      :venue => bbq.venue
    }
    render :status => 200, :json => bbqPackage

  end

  def joinBBQ

    bbq = Barbecue.find_by(:id => params[:id])
    
    if current_user.present?
      
      if current_user.barbecues.push(bbq)
      render :status => 200, :json => {:response => "Attempt to add bbq completed."}
      else
        render :status => 400, :json => {:response => "Attempt to add bbq failed. Please verify that you are logged in."}
      end

    else
      render :status => 400, :json => {:response => "Attempt to add bbq failed. Please verify that you are logged in."}
    end
  end

  def getComments
    bbq = Barbecue.find_by(:id => params[:id])
    commentsArray = []

    bbq.comments.each do |comment|
      commentUsername = User.find_by(:id => comment.user_id).name
      p commentUsername
      newComment = {
          :user => commentUsername,
          :content => comment.content,
          :date => format_date(comment.created_at)
      }
      commentsArray.push(newComment)
    end

    if bbq.present?
      render :status => 200, :json => commentsArray
    else
      render :status => 404, :json => {:response => "Request failed"}
    end

  end
  def addComments
    bbq = Barbecue.find_by(:id => params[:id])
    
    
    newComment = Comment.create(:content => params[:text], :user_id => current_user.id)
    bbq.comments.push(newComment)

   
    render :status => 200, :json => {:response => "Success"}
  end

  def new
    @bbq = Barbecue.new
  end

  def create
    bbq_params = params.require(:barbecue).permit(:title, :venue, :date)
    @bbq = Barbecue.new(bbq_params)

    unless @bbq.save
      render(:new)
    else
      redirect_to(barbecues_path)
    end
  end
  private
  def format_date(date)
    return date.strftime('%B, %e %Y at %l:%M %P')
  end


end