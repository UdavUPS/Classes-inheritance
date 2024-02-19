import { Daemon } from '../Class/Daemon';


test('Проверка создоваемого объекта Daemon', () => {
    let Monst = new Daemon('Вася', 'Daemon');
    const TestObdject = {
      name:'Вася',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    }
    expect(Monst).toMatchObject(TestObdject);
  
    Monst.health=90;
    Monst.levelUp();

    expect(Monst.level).toBe(2);
    expect(Monst.attack).toBe(12);
    expect(Monst.defence).toBe(48);
    expect(Monst.health).toBe(100);

    let damage = Monst.health - (2 * (1 - Monst.defence / 100));

    Monst.damage(2);

    expect(Monst.health).toBe(damage);
  });
  