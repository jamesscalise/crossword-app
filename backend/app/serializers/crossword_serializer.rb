class CrosswordSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :length, :clues, :squares
end
