import { Swordsman } from '../app';


test('Проверка создоваемого объекта Swordsman', () => {
    let Monst = new Swordsman('Вася');
    const TestObdject = {
      name:'Вася',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
    expect(Monst).toMatchObject(TestObdject);
  });
  