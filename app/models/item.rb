class Item < ActiveRecord::Base
	belongs_to :barbecue
	belongs_to :user
end
