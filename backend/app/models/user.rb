class User < ApplicationRecord
    has_many :time_records
    has_many :crosswords, through: :time_records
end
