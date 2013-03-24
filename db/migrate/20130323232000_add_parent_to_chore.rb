class AddParentToChore < ActiveRecord::Migration
  def change
    add_column :chores, :parent_id, :integer
  end
end
