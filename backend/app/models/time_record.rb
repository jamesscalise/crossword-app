class TimeRecord < ApplicationRecord
    belongs_to :user
    belongs_to :crossword
end
