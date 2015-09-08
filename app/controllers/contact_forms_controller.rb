class ContactFormsController < ApplicationController

  respond_to :html, :js, only: [:new]

  def new
    @contact_form = ContactForm.new
  end

  def create
    @contact_form = ContactForm.new(contact_params)
    @contact_form.request = request
    respond_to do |format|
      if @contact_form.deliver
        flash[:success] = "Thank you for your message! I'll contact you soon!"
        format.html { redirect_to "/#contact" }
        format.js # This renders create.js.erb
      else
        flash[:error] = @contact_form.errors.full_messages.first
        format.html { render :new }
        format.js { render :fail_form }
      end
    end
    # rescue ScriptError
    #   flash[:error] = 'Sorry, this message appears to be spam and was not delivered.'
  end

  private

  def contact_params
    params.require(:contact_form).permit(:name, :email, :message, :nickname)
  end
end
