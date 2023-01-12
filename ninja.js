//create a Ninja class
//add an atribute:name
//add an atribute:health
//add a attribute:speed - give a default value of 3
//add a attribute: strength - give a default value of 3
//add a method: sayName() - this should log that Ninja's name to the console
//add a method: showStats() - this should show the Ninja's name, strength speed and health
//add a method: drinkSake() - this should add +10 Health to the Ninja
class Ninja {
  constructor(name, health, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  
  sayName(){
    console.log(this.name)
  }

  showStats(){
    console.log(this)
  }
  
  drinkSake(){
    this.health+=10;
    // console.log(this.health)
  }
  
  
}
const ninja1 = new Ninja("Hyabusa");
// const ninja2 = new Ninja("Jackie", 20);
ninja1.sayName();
ninja1.showStats();
// ninja2.sayName();
// ninja2.showStats();