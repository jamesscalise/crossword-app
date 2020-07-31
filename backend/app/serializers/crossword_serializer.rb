class CrosswordSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :length, :clues, :squares, :scores, :comments
end
 