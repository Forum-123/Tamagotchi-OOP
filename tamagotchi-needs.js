
class Tamagotchi{
    // Tamagotchi constructor
    constructor(name, age, happiness, hunger, energyLevel){
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.hunger = hunger;
        this.energyLevel = energyLevel;
    };

    // Tamagotchi prototype methods
    speak(){ console.log(`${this.name} says hello!`); };
    
   
};

let Mametchi = new Tamagotchi('Mametchi', 3, 10, 7, 6);

console.log(Mametchi)

console.log("Is Mametchi a Tamagotchi?", (Mametchi instanceof Tamagotchi)); 