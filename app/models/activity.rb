class Activity < ActiveRecord::Base
  attr_accessible :chore_id, :duration, :image, :name, :time
end
