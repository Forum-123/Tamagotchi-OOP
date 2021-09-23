// Error ideas:
// -dead
// -doesnt yet exist

class TamagotchiError extends Error {
    constructor(msg){
        super(`\nOopsie Woopsie! Looks live we've stumbed on an error due to ${msg}!\n
        Vewy sowwy D: `);
        this.name = 'TamagotchiError';
    };

    displayErr(){ 
        console.clear()
        console.log(`Error of type ${this.name}!`.toUpperCase())
    }
};


