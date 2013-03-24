class RouletteController < ApplicationController
  def index
    @chores = Chore.all
    @selected_chore = @chores.first
    #debugger
    #puts @chores
    
  end
end
