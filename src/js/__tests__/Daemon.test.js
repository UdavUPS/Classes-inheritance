import { Daemon } from '../app';


test('Проверка создоваемого объекта Daemon', () => {
    let Monst = new Daemon('Вася');
    const TestObdject = {
      name:'Вася',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    }
    expect(Monst).toMatchObject(TestObdject);
  });
  