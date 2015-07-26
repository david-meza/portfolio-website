class MessagesController < ApplicationController

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    fail
    if @message.save
      flash[:success] = 'Thank you for your message. I will contact you soon!'
      redirect_to root_path
    else
      flash[:error] = "Could not send message :( Please try again!"
      render :new
    end
  end


  def message_params
    params.require(:message).permit(:name, :email, :message, :nickname)
  end


end
