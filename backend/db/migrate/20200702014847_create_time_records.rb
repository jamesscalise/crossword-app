class CreateTimeRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :time_records do |t|
      t.integer :user_id
      t.integer :crossword_id
      t.integer :record

      t.timestamps
    end
  end
end
