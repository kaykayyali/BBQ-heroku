class UsersController < ApplicationController
	before_action(:authenticate_user!)
	def showUser
		@user = User.find_by(:id => params[:id])
		if @user.present?
			render "show"
		else
			redirect_to(barbecues_path)
		end
	end
	
end
