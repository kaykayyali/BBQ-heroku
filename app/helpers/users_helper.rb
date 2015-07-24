module UsersHelper
	 def format_date(date)
    return date.strftime('%B, %e %Y at %l:%M %P')
  end
end
