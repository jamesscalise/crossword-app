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

crossword2 = Crossword.create(title: "Hard Crossword", length: 15)

clues_list =[
    ['horizontal', 'Londoner, e.g., informally', 1, crossword2],
    ['horizontal', 'Get an A, B, C or D', 5, crossword2],
    ['horizontal', 'Audibly expresses shock', 9, crossword2],
    ['horizontal', '"I do solemnly swear ...," e.g.', 14, crossword2],
    ['horizontal', 'Like a billionaire', 15, crossword2],
    ['horizontal', 'Rushed toward', 16, crossword2],
    ['horizontal', 'Mystery-solving Great Dane of cartoons', 17, crossword2],
    ['horizontal', 'Yoga pose', 19, crossword2],
    ['horizontal', 'City where the "Gangnam Style" video was filmed', 20, crossword2],
    ['horizontal', 'Architect Sir Christopher ___', 21, crossword2],
    ['horizontal', 'Cribbage Scoring Piece', 23, crossword2],
    ['horizontal', 'Logo art that changes almost daily', 24, crossword2],
    ['horizontal', 'Place to buy a drink', 28, crossword2],
    ['horizontal', 'Talk Drunkenly', 31, crossword2],
    ['horizontal', "Fiction's opposite", 32, crossword2],
    ['horizontal', "50%", 33, crossword2],
    ['horizontal', "Thin as ___", 36, crossword2],
    ['horizontal', "Bobby of N.H.L. fame", 39, crossword2],
    ['horizontal', 'Some household helpers ... or an oral hint to 17-, 24-, 51- and 63-Across', 40, crossword2],
    ['horizontal', 'Non-___ (label on some foods)', 42, crossword2],
    ['horizontal', 'What salmon swim upstream to do', 43, crossword2],
    ['horizontal', '"I ___ a dream ..."', 45, crossword2],
    ['horizontal', 'Amount for the washer or dryer', 46, crossword2],
    ['horizontal', "Teller's partner in magic", 47, crossword2],
    ['horizontal', 'Make better', 49, crossword2],
    ['horizontal', 'Stir-fry ingredients, often', 51, crossword2],
    ['horizontal', 'At least 35 years, for a U.S. president', 55, crossword2],
    ['horizontal', 'Threesome', 56, crossword2],
    ['horizontal', 'Car with a "T" logo', 57, crossword2],
    ['horizontal', "Plenty o'", 61, crossword2],
    ['horizontal', "Can't-miss", 63, crossword2],
    ['horizontal', '"Sauer" hot dog topping', 66, crossword2],
    ['horizontal', 'From Bangkok, say', 67, crossword2],
    ['horizontal', 'Lady ___, a.k.a. the First Lady of Song', 68, crossword2],
    ['horizontal', 'Balm', 69, crossword2],
    ['horizontal', 'Fermented rice wine', 70, crossword2],
    ['horizontal', 'Cherished', 71, crossword2]
]

clues_list.each do |orientation, content, number, crossword|
    Clue.create(orientation: orientation, content: content, number: number, crossword: crossword)
end


vertical_clue_list = [
    ['Office head', 1],
    ["Marathon, e.g.", 2],
    ['"Am ___ late?"', 3],
    ["Something going through one's head", 4],
    ["Poke one's nose (into)", 5],
    ["Lend a hand", 6],
    ["Angry expression", 7],
    ["Beachfront", 8],
    ["Breakfast mixtures with rolled oats", 9],
    ["Some smallish batteries", 10],
    ["Flower named for its resemblance to a winged beast", 11],
    ["Group of experts", 12],
    ["'All the world's a ___': Shak.", 13],
    ["Ill-defined lump", 18],
    ["Magazine heads, for short", 22],
    ["Hawaiian honeymoon destination", 25],
    ["Visual representation of data", 26],
    ['"Give us this day ___ daily bread"', 27],
    ["Money execs", 28],
    ["Org. looking out for seniors' interests", 29],
    ["Reusable material in a junkyard", 30],
    ["A.L. West team, on scoreboards", 34],
    ["TV's Hawaii ___", 35],
    ["Popular Apple product", 37],
    ["Vein of ore", 38],
    ["Mark up, as a textbook", 40],
    ["Nevada city", 41],
    ['The third "w" in www', 44],
    ['Hit with a beam of light', 46],
    ['Counterpart of "neither"', 48],
    ['URL starter', 50],
    ["Pitching blunders", 51],
    ['Ancient Greek gathering spot', 52],
    ['Carefully sorts (through)', 53],
    ['Commotion, in slang', 54],
    ["Shoe part that's usually the first to wear out", 58],
    ['Kinks song set "down in old Soho"', 59],
    ["Many miles away", 60],
    ["Jeep Grand Cherokee, for one", 62],
    ["Sturdy tree", 64],
    ["Tell whoppers", 65]
]

squares = [
    ['B', 1],
    ['R', 2],
    ['I', 3],
    ['T', 4],
    [''],
    ['P', 5],
    ['A', 6],
    ['S', 7],
    ['S', 8],
    [''],
    ['G', 9],
    ['A', 10],
    ['S', 11],
    ['P', 12],
    ['S', 13],
    ['O', 14],
    ['A'],
    ['T'],
    ['H'],
    [''],
    ['R', 15],
    ['I'],
    ['C'],
    ['H'],
    [''],
    ['R', 16],
    ['A'],
    ['N'],
    ['A'],
    ['T'],
    ['S', 17],
    ['C'],
    ['O'],
    ['O'],
    ['B', 18],
    ['Y'],
    ['D'],
    ['O'],
    ['O'],
    [''],
    ['A', 19],
    ['S'],
    ['A'],
    ['N'],
    ['A'],
    ['S', 20],
    ['E'],
    ['O'],
    ['U'],
    ['L'],
    [''],
    [''],
    ['W', 21],
    ['R'],
    ['E', 22],
    ['N'],
    [''],
    ['P', 23],
    ['E'],
    ['G'],
    [''],
    [''],
    [''],
    ['G', 24],
    ['O'],
    ['O', 25],
    ['G', 26],
    ['L'],
    ['E'],
    ['D'],
    ['O'],
    ['O', 27],
    ['D'],
    ['L'],
    ['E'],
    ['C', 28],
    ['A', 29],
    ['S', 30],
    ['H'],
    ['B'],
    ['A'],
    ['R'],
    [''],
    [''],
    ['S', 31],
    ['L'],
    ['U'],
    ['R'],
    [''],
    [''],
    ['F', 32],
    ['A'],
    ['C'],
    ['T'],
    [''],
    ['H', 33],
    ['A'],
    ['L', 34],
    ['F', 35],
    [''],
    ['A', 36],
    ['R'],
    ['A'],
    ['I', 37],
    ['L', 38],
    ['O', 39],
    ['R'],
    ['R'],
    [''],
    ['A', 40],
    ['U'],
    ['P'],
    ['A'],
    ['I'],
    ['R', 41],
    ['S'],
    [''],
    ['G', 42],
    ['M'],
    ['O'],
    ['S', 43],
    ['P'],
    ['A'],
    ['W', 44],
    ['N'],
    [''],
    ['H', 45],
    ['A'],
    ['V'],
    ['E'],
    [''],
    ['L', 46],
    ['O'],
    ['A'],
    ['D'],
    [''],
    [''],
    ['P', 47],
    ['E'],
    ['N'],
    ['N', 48],
    [''],
    [''],
    ['E', 49],
    ['N'],
    ['H', 50],
    ['A'],
    ['N'],
    ['C'],
    ['E'],
    ['B', 51],
    ['A', 52],
    ['M'],
    ['B'],
    ['O'],
    ['O'],
    ['S', 53],
    ['H', 54],
    ['O'],
    ['O'],
    ['T'],
    ['S'],
    [''],
    [''],
    [''],
    ['A', 55],
    ['G'],
    ['E'],
    [''],
    ['T', 55],
    ['R'],
    ['I'],
    ['O'],
    [''],
    [''],
    ['T', 57],
    ['E'],
    ['S', 58],
    ['L', 59],
    ['A', 60],
    ['L', 61],
    ['O'],
    ['T'],
    ['S', 62],
    ['A'],
    [''],
    ['F', 63],
    ['O'],
    ['O', 64],
    ['L',65],
    ['P'],
    ['R'],
    ['O'],
    ['O'],
    ['F'],
    ['K', 60],
    ['R'],
    ['A'],
    ['U'],
    ['T'],
    [''],
    ['T', 67],
    ['H'],
    ['A'],
    ['I'],
    [''],
    ['E', 68],
    ['L'],
    ['L'],
    ['A'],
    ['S', 69],
    ['A'],
    ['L'],
    ['V'],
    ['E'],
    [''],
    ['S', 70],
    ['A'],
    ['K'],
    ['E'],
    [''],
    ['D', 71],
    ['E'],
    ['A'],
    ['R'],
]

y = 0
x = 0
i = 0

while (y < 15) do
    x = 0
    while (x < 15) do
        if squares[i][1]
            Square.create(letter: squares[i][0], is_black: false, y:y, x:x, corner_value: squares[i][1], crossword: crossword2)
        elsif squares[i][0] == ''
            Square.create(is_black: true, y:y, x:x, crossword: crossword2)
        else
            Square.create(letter: squares[i][0], is_black:false, y:y, x:x, crossword: crossword2)
        end
        x+= 1
        i += 1
    end

    y+=1
    
end


vertical_clue_list.each do |content, number| 
    Clue.create(orientation: "vertical", content: content, number: number, crossword: crossword2)
end

john = User.create(username: "John")