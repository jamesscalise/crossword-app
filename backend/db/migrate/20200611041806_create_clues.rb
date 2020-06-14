class CreateClues < ActiveRecord::Migration[6.0]
  def change
    create_table :clues do |t|
      t.string :orientation
      t.string :content
      t.integer :number
      t.integer :crossword_id

      t.timestamps
    end
  end
end
