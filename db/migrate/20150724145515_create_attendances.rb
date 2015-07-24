class CreateAttendances < ActiveRecord::Migration
  def change
    create_table :attendances do |t|
    	t.references :user, index: true
    	t.references :barbecue, index: true

      t.timestamps null: false
    end
  end
end
