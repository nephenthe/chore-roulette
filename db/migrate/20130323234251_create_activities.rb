class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.integer :chore_id
      t.integer :duration
      t.string :image
      t.datetime :time
      t.string :name

      t.timestamps
    end
  end
end
