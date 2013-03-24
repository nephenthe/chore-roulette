class Chore < ActiveRecord::Base
  attr_accessible :fastest, :frequency, :image, :last_done, :name
end

# class Activity < Chore  
#   belongs_to :chore, :foreign_key => :parent_id  
# end

