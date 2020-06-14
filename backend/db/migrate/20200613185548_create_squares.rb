class CreateSquares < ActiveRecord::Migration[6.0]
  def change
    create_table :squares do |t|
      t.string :letter
      t.boolean :is_black
      t.integer :x
      t.integer :y
      t.integer :corner_value
      t.integer :crossword_id

      t.timestamps
    end
  end
end
