# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


crossword = Crossword.create(title: 'Easy Crossword', length: 5)

square1 = Square.create(letter: 'S', is_black: false, y:0, x:0,  corner_value:1, crossword: crossword)

square2 = Square.create(letter: 'T', is_black: false, y:0, x:1,  corner_value:2, crossword: crossword)

square3 = Square.create(letter: 'A', is_black: false, y:0, x:2,  corner_value:3, crossword: crossword)

square4 = Square.create(letter: 'R', is_black: false, y:0, x:3,  corner_value:4, crossword: crossword)

square5 = Square.create(is_black: true, y:0, x:4, crossword: crossword)

square6 = Square.create(letter: 'H', is_black: false, y:1, x:0,  corner_value:5, crossword: crossword)

square7 = Square.create(letter: 'O', is_black: false, y:1, x:1,  crossword: crossword)

square8 = Square.create(letter: 'P', is_black: false, y:1, x:2,   crossword: crossword)

square9 = Square.create(letter: 'E', is_black: false, y:1, x:3,  crossword: crossword)

square10 = Square.create( is_black: true, y:1, x:4,  crossword: crossword)

square11 = Square.create(letter: 'H', is_black: false, y:2, x:0,  corner_value:6, crossword: crossword)

square12 = Square.create(letter: 'Y', is_black: false, y:2, x:1, crossword: crossword)

square13 = Square.create(letter: 'P', is_black: false, y:2, x:2,  crossword: crossword)

square14 = Square.create(letter: 'E', is_black: false, y:2, x:3,  crossword: crossword)

square15 = Square.create(letter: 'R', is_black: false, y:2, x:4,  corner_value:7, crossword: crossword)

square16 = Square.create(is_black: true, y:3, x:0,  crossword: crossword)

square17 = Square.create(letter: 'E', is_black: false, y:3, x:1,  corner_value:8, crossword: crossword)

square18 = Square.create(letter: 'L', is_black: false, y:3, x:2,  crossword: crossword)

square19 = Square.create(letter: 'S', is_black: false, y:3, x:3,  crossword: crossword)

square20 = Square.create(letter: 'E', is_black: false, y:3, x:4,  crossword: crossword)

square21 = Square.create(is_black: true, y:4, x:0,  crossword: crossword)

square22 = Square.create(letter: 'D', is_black: false, y:4, x:1,  corner_value:9, crossword: crossword)

square23 = Square.create(letter: 'E', is_black: false, y:4, x:2,  crossword: crossword)

square23 = Square.create(letter: 'E', is_black: false, y:4, x:3,  crossword: crossword)

square24 = Square.create(letter: 'P', is_black: false, y:4, x:4,  crossword: crossword)


clue1 = Clue.create(orientation: 'horizontal', content: 'Indicator of an important email', number: 1, crossword: crossword)

clue2 = Clue.create(orientation: 'horizontal', content: '"The thing with feathers / that perches in the soul," per Emily Dickinson', number: 5, crossword: crossword)

clue3 = Clue.create(orientation: 'horizontal', content: 'Bouncing off the walls', number: 6, crossword: crossword)

clue4 = Clue.create(orientation: 'horizontal', content: 'Otherwise', number: 8, crossword: crossword)

clue5 = Clue.create(orientation: 'horizontal', content: 'Like the Marianas Trench', number: 9, crossword: crossword)


clue6 = Clue.create(orientation: 'vertical', content: "'The baby is sleeping!'", number: 1, crossword: crossword)

clue7 = Clue.create(orientation: 'vertical', content: 'Played (with)', number: 2, crossword: crossword)

clue8 = Clue.create(orientation: 'vertical', content: 'Fruit dipped in honey for the Jewish New Year', number: 3, crossword: crossword)

clue9 = Clue.create(orientation: 'vertical', content: 'Witherspoon of "Big Little Lies"', number: 4, crossword: crossword)

clue10 = Clue.create(orientation: 'vertical', content: 'Workout unit', number: 7, crossword: crossword)