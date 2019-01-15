INSERT INTO users
    (name, userName, pwhash, avatar)
VALUES
    ('GUEST', 'GUEST', '$2b$10$uhKgaVnjNfCqfb3xiPk9/O3okupaySnS0AZc466fnkl6VK/zss8xS', 'guestIMG'),
    ('STAN', 'STAN', '$2b$10$mR0mYHjUO//SoDD7dyIRxuOH/TYkwglgGTmPx9FbHpoptUgeP8MhS', 'stanIMG'),
    ('GREG', 'GREG', '$2b$10$Z8Oo7UeMiwRhFLUOId8Dgu/O0pnLuXg90Y9U6Da1XblanyQXAG3GC', 'gregIMG'),
    ('KIM', 'KIM', '$2b$10$TAhxAfRRq9gXLCktzUEdZu2UI6Q11RbgZXhCO5BgFuWqgxrJMCuM.', 'kimIMG');

INSERT INTO categories
    (category_type, levels, id_user)
VALUES
    ('Arithemic', true, 1),
    ('Sequence', true, 1),
    ('Flash Cards', false, 3);

INSERT INTO timers
    (time, level, id_category, id_user)
VALUES
    ('Jan 2 2019 09:33:34', '1', 1, 1),
    ('Jan 3 2019 09:12:35', '2', 2, 2);

INSERT INTO questions
    (level, question, answer, id_category)
VALUES
    ('1', '11 + 11', '22', 1),
    ('1', '10 + 23', '33', 1),
    ('1', '20 + 33', '53', 1),
    ('1', '80 + 14', '94', 1),
    ('1', '12 + 16', '28', 1),
    ('1', '31 + 31', '62', 1),
    ('1', '19 + 41', '60', 1),
    ('1', '44 + 52', '96', 1),
    ('1', '64 + 11', '75', 1),
    ('1', '77 + 22', '99', 1),
    ('2', '21 - 11', '10', 1),
    ('2', '43 - 21', '22', 1),
    ('2', '60 - 33', '27', 1),
    ('2', '80 - 14', '76', 1),
    ('2', '42 - 16', '26', 1),
    ('2', '91 - 31', '60', 1),
    ('2', '59 - 41', '18', 1),
    ('2', '84 - 52', '32', 1),
    ('2', '64 - 11', '53', 1),
    ('2', '77 - 42', '35', 1),
    ('1', '11 22 33 44 55', '66', 2),
    ('1','2 4 9 11 16', '18', 2),
    ('1', '30 28 25 21 16', '10', 2),
    ('1', '61 52 43 34 25', '16', 2),
    ('1', '1 2 4 8 16', '32', 2),
    ('1', '1 2 10 20 100', '200', 2),
    ('1', '1 1 2 3 5', '8', 2),
    ('1', '0 1 4 9 16', '25', 2),
    ('1', '1 4 7 10 13', '16', 2),
    ('1', '3 8 13 18 23', '28', 2),
    ('1', '1 3 6 10 15', '21', 2),
    ('1', '1 10 100 1000 10000', '100000', 2),
    ('1', '636 545 454 363 272', '181', 2),
    ('1', '1432 3654 5876 7098', '9210', 2),
    ('2', 'A D G J M', 'P', 2),
    ('2', 'A C E G I', 'K', 2),
    ('2', 'Z Y X W V', 'U', 2),
    ('2', 'E C A Y W', 'U', 2),
    ('2', 'Z A Y B X', 'C', 2),
    ('2', 'I J K L M', 'N', 2),
    ('2', 'B D F G I', 'J', 2),
    ('2', 'BH CI DJ EK FL', 'GM', 2),
    ('2', 'A Z B Y C', 'X', 2),
    ('Physics', 'What is the formula for Force?', 'F = m * a', 3),
    ('Physics', 'What is the formula for Ohms Law?', 'I = R * V', 3),
    ('Physics', 'What is the acceleration of gravity on Earth?', '9.8 m/s^2', 3),
    ('Physics', 'What is the formula for momentum?', 'p = m * v', 3),
    ('Biology', 'What phenomenon relates to sunlight being converted to energy?', 'photosynthesis', 3),
    ('Biology', 'What is the green pigment in plants that is affected by photosynthesis?', 'chlorophyll', 3),
    ('Biology', 'Name a byproduct of photosynthesis in plants.', 'oxygen', 3);

INSERT INTO resultsets
    (time, id_user, score)
VALUES
    ('Jan 2 2019 09:33:00', 1, 100),
    ('Jan 3 2019 09:12:00', 1, 75),
    ('Jan 4 2019 07:15:00', 3, 100),
    ('Jan 9 2019 08:30:00', 3, 75),
    ('Jan 10 2019 08:30:00', 3, 100),
    ('Jan 11 2019 08:00:00', 3, 90),
    ('Jan 12 2019 08:00:00', 3, 100),
    ('Jan 13 2019 08:00:00', 3, 75);

INSERT INTO results
    (id_resultset, id_question, correct)
VALUES
    (1, 2, true),
    (1, 3, true),
    (1, 4, true),
    (2, 3, true),
    (2, 4, false),
    (2, 5, true),
    (2, 6, true),
    (3, 25, true),
    (3, 26, true),
    (3, 27, true),
    (4, 25, true),
    (5, 1, true),
    (6, 2, true),
    (7, 12, true),
    (8, 44, true);
    
INSERT INTO avatars
    (id_user, name, img)
VALUES
    (1, 'First Default', 'default1.png'),
    (1, 'Second Default', 'default2.png'),
    (1, 'Boy', 'boy1.png'),
    (1, 'Guy', 'boy2.png'),
    (1, 'Girl', 'girl1.png'),
    (1, 'Lady', 'girl2.png'),
    (1, 'DeadPool', 'deadPool.png'),
    (1, 'MarvelGirl', 'marvelGirl.png'),
    (1, 'SpiderMan', 'spiderMan.png'),
    (1, 'The Ninja', 'ninja.png');