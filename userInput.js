// Get user input using built-in readline module
const ui = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

class TamagotchiCLI {     
    run(){
        console.clear();
        this.firstQuestion();
    }

    firstQuestion(){
        ui.question("\nWelcome to Tamagotchi. First, give your pet a name\n> ", input => {
            console.log(`Your pet's name is ${input}`);
            this.name = input;
            ui.question(`\nWhat is ${this.name}'s age?\n> `, input => {
                this.age = parseInt(input);
                this.secondQuestion();
            })
        });
    }

    secondQuestion(){
        ui.question(`\nPlease provide some details about ${this.name}.\nWhat is their happiness level between 0 and 10?\n> `, input => {
            this.happiness = parseInt(input);
            
            ui.question(`\nWhat is their hunger level between 0 and 10?\n> `, input => {
                this.hunger = parseInt(input);

                ui.question(`\nWhat is their energy level between 0 and 10?\n> `, input => {
                    this.energyLevel = parseInt(input);
                    this.thirdQuestion();
                })
            })
        })
    }
    
    thirdQuestion(){
        ui.question(`\nWould you like to feed ${this.name}? (Y/N)\n> `, input => {
            if (input === "Y") {
                console.log(`${this.name}'s hunger was ${this.hunger}`)
                console.log(`${this.name}'s happiness was ${this.happiness}`)
                this.hunger = 0;
                this.happiness += 3;
                console.log(`Now, ${this.name} is full up -- Hunger Level: ${this.hunger}`);
                console.log(`You made ${this.name} happy -- Happiness Level: ${this.happiness}`);
                this.fourthQuestion();
            } else if (input === "N") {
                this.fourthQuestion();
            } else {
                console.log("Incorrect input, Tamagotchi is shutting down...")
                ui.close();
            }
        })
    }

    fourthQuestion(){
        ui.question(`\nWould you like to play with ${this.name}? (Y/N)\n> `, input => {
            if (input === "Y") {
                console.log(`${this.name}'s energy level was ${this.energyLevel}`);
                console.log(`${this.name}'s happiness was ${this.happiness}`)
                this.energyLevel -= 4;
                this.happiness += 2;
                console.log(`Now, ${this.name} is now very tired -- Energy Level:${this.energyLevel}`);
                console.log(`You made ${this.name} happy -- Happiness Level: ${this.happiness}`);
                this.lastQuestion();
            } else if (input === "N") {
                this.lastQuestion();
            } else {
                console.log("Incorrect input, Tamagotchi is shutting down...")
                ui.close();
            }
        })
    }

    lastQuestion(){
        ui.question(`\nWould you like to check in with ${this.name}? (Y/N)\n> `, input => {
            if (input === "Y") {
                if (this.happiness) {
                    console.log(`${this.name} is happy -- Happiness Level: ${this.happiness}`);
                    console.log("Well done for taking care of your pet today! Bye!")
                    ui.close();
                } else {
                    console.log(`Please feed or play with ${this.name} to make them happy`);
                    this.thirdQuestion();
                    this.fourthQuestion();
                }
            } else {
                console.log("Well done for taking care of your pet today! Bye!")
                ui.close();
            }
        })
    }
}

module.exports = { TamagotchiCLI } // Export user input function