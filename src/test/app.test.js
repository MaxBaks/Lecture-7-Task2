import Character from '../js/domain';

test('characters levelUp should be correct', () => {
  const char = new Character('Лучник', 10, 2, 25, 25);
  char.levelUp();

  const expected = {
    name: 'Лучник', health: 100, level: 3, attack: 30, defence: 30,
  };

  expect(char).toEqual(expected);
});


test('dead character should not be leveled up', () => {
  const char = new Character('Лучник', 0, 2, 25, 25);

  const result = char.levelUp();

  const expected = Error('Нельзя повысить левел умершего');

  expect(result).toEqual(expected);
});
