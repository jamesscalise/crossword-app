class CrosswordSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :length, :clues, :squares, :time_records, :scores
end
