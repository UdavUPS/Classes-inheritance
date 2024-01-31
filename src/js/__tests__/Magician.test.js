import { Magician } from '../app';


test('Проверка создоваемого объекта Magician', () => {
    let Monst = new Magician('Вася');
    const TestObdject = {
      name:'Вася',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    }
    expect(Monst).toMatchObject(TestObdject);
  });
  