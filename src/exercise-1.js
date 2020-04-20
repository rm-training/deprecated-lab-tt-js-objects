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

// @todo add the walk() and talk(words) functions
const human = {};

// @todo add the code() method
const engineer = {};

// @todo add the manage(human) method
const manager = {}

const ryan = Object.create(engineer);
const tim = Object.create(manager);

// @todo set their own "name" properties!

ryan.code(); // this should log out "Ryan is coding"
tim.manage(ryan); // this should log out "Tim says: Code faster, Ryan!"

/**
 * Bonus!
 * 
 * We want to augment a human so they can actually behave more like a robot...
 * 
 * Make a new function:
 *   robotish(human)
 * 
 * This function will accept any object (really) and augment it, making it behave more like a robot.
 * 
 * It does this by adding on or merging in "robot" behaviors, which should include:
 *  dance() // logs out "{name} is dancing like a robot"
 * 
 * You can do this by setting properties on the human object directly, or using Object.assign() to merge
 */
 function robotish(human) {

 }