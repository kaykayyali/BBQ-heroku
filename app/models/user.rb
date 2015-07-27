class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :barbecues, :through => :attendances
  has_many :attendances
  has_many :items
  has_many :comments

  include Gravtastic
  has_gravatar
end
