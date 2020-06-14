class CreateCrosswords < ActiveRecord::Migration[6.0]
  def change
    create_table :crosswords do |t|
      t.string :title
      t.integer :length

      t.timestamps
    end
  end
end
