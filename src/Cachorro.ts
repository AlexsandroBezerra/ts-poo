class Animal {
    constructor() {
        console.log("Nasceu o bixo")
    }

    comer() {}
    dormir() {}
    cagar() {}
}

class Cachorro extends Animal {
    name: string

    constructor() {
        super()
        this.name = "Jorge"
    }

    latir() {}
}

const cachorro  = new Cachorro()

