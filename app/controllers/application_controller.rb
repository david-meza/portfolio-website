class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def home
    @contact_form = ContactForm.new
  end

  def download_resume

    send_file(
    "#{Rails.root}/public/Resume.pdf",
    filename: "david_meza.pdf",
    type: "application/pdf",
    disposition: 'inline'
  )

  end
end
