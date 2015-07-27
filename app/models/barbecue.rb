class Barbecue < ActiveRecord::Base
  validates :title, presence: true
  validates :venue, presence: true
  validates :date, presence: true
  has_many :users, :through => :attendances
  has_many :attendances
  has_many :items
  has_many :comments
end
