class Crossword < ApplicationRecord
    has_many :clues
    has_many :squares
end
