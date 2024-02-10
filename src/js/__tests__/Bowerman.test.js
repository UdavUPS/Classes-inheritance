import { Bowerman } from '../Class/Bowerman';


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

    Monst.health=90;
    Monst.levelUp();

    expect(Monst.level).toBe(2);
    expect(Monst.attack).toBe(30);
    expect(Monst.defence).toBe(30);
    expect(Monst.health).toBe(100);

    let damage = Monst.health - (2 * (1 - Monst.defence / 100));

    Monst.damage(2);

    expect(Monst.health).toBe(damage);
  });
  