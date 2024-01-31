import { Zombie } from '../app';


test('Проверка создоваемого объекта Zombie', () => {
    let Monst = new Zombie('Вася');
    const TestObdject = {
      name:'Вася',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
    expect(Monst).toMatchObject(TestObdject);
  });
  