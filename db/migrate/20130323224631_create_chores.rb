class CreateChores < ActiveRecord::Migration
  def change
    drop_table :chores
    create_table :chores do |t|
      t.string :name
      t.integer :frequency
      t.string :image
      t.datetime :last_done
      t.integer :fastest

      t.timestamps
    end
  end
end
