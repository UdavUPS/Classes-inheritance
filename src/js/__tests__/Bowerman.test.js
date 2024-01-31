import { Bowerman } from '../app';


test('Проверка создоваемого объекта Bowerman', () => {
    let Monst = new Bowerman('Вася');
    const TestObdject = {
      name:'Вася',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    }
    expect(Monst).toMatchObject(TestObdject);
    
  });
  