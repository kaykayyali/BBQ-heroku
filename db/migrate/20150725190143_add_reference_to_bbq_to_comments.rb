class AddReferenceToBbqToComments < ActiveRecord::Migration
  def change
  	add_reference :comments, :barbecue, index: true
  end
end
