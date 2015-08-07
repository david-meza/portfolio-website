class ContactFormsController < ApplicationController

  def create
    @contact_form = ContactForm.new(contact_params)
    @contact_form.request = request
    if @contact_form.deliver
      flash[:success] = "Thank you for your message! I'll contact you soon!"
      redirect_to "/#contact"
    else
      flash[:error] = @contact_form.errors.full_messages.first
      redirect_to "/#contact"
    end
    rescue ScriptError
      flash[:error] = 'Sorry, this message appears to be spam and was not delivered.'
  end

  private

  def contact_params
    params.require(:contact_form).permit(:name, :email, :message, :nickname)
  end
end
