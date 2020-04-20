/**
 * Linking objects with Object.create()
 *
 * Create three objects:
 *  human
 *  manager
 *  engineer
 *
 * humans have a "name" property unique to each of them
 * and they can all walk() and talk(words)
 * 
 * walk() just logs out: "{name} is walking", where name is the human's name
 * talk(words) just logs out: "{name} says: {words}"
 *
 * manager and engineers will delegate to Humans
 *
 * managers can manage(engineer)
 * This function will just log:
 * "{manager} says: Code faster, {engineer}!" 
 * where manager is the manager's name
 * and engineer is the engineer's name
 *
 * engineers can code()
 * This just logs out "{name} is coding", where name is the engineer's name
 *
 * Make this code work with your three object chums:
 */

const human = {
  walk() {
    console.log(`${this.name} is walking`);
  },
  talk(words) {
    console.log(`${this.name} says ${words}`);
  },
};

// @todo add an engineer
const engineer = {
  code() {
    console.log(`${this.name} is coding`);
  }
};

const manager = {
  manage(human) {
    console.log(`${this.name} says: Code faster, ${human.name}`);
  }
}

// @todo link the objects
const ryan = Object.create(engineer);
ryan.name = 'Ryan';

const tim = Object.create(manager);
tim.name = 'Tim';

ryan.code();
tim.manage(ryan); // 

const robot = {
  dance() {
    console.log(`${this.name} is doing the robot dance`);
  }
}

function robotish(human) {
  // augmenting
  Object.assign(human, robot);
}

robotish(tim);
tim.dance();
