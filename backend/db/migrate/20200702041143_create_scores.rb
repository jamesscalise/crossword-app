class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.string :username
      t.integer :time
      t.integer :crossword_id

      t.timestamps
    end
  end
end
