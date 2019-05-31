export default class Character {
  constructor(name, health, level, attack, defence) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    try {
      if (this.health === 0) {
        throw Error('Нельзя повысить левел умершего');
      } else {
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;

        return 'leveled up';
      }
    } catch (err) {
      return err;
    }
  }
}
