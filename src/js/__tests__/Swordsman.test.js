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
    
    Monst.health=90;
    Monst.levelUp();

    expect(Monst.level).toBe(2);
    expect(Monst.attack).toBe(48);
    expect(Monst.defence).toBe(12);
    expect(Monst.health).toBe(100);

    let damage = Monst.health - (2 * (1 - Monst.defence / 100));

    Monst.damage(2);

    expect(Monst.health).toBe(damage);
  });
  