import { Undead } from '../app';


test('Проверка создоваемого объекта Undead', () => {
    let Monst = new Undead('Вася');
    const TestObdject = {
      name:'Вася',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    }
    expect(Monst).toMatchObject(TestObdject);
  });
  