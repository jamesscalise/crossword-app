class Crossword < ApplicationRecord
    has_many :clues
    has_many :squares
    has_many :time_records
    has_many :users, through: :time_records
    has_many :scores
    has_many :comments
end
