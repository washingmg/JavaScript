// Definição de uma interface simples
function Interface(methods) {
    this.methods = methods;
}

// Método de validação
Interface.prototype.validate = function (object) {
    this.methods.forEach(method => {
        if (typeof object[method] !== "function") {
            throw new Error(`O objeto não implementa o método obrigatório: '${method}'.`);
        }
    });
    console.log("Validação bem-sucedida: Todos os métodos estão implementados.");
};

// Criação de uma interface 'IAnimal'
const IAnimal = new Interface(
    ["makeSound", "move"]);

// Classe que implementa a interface
class Dog {
    makeSound() {
        console.log("Au au!");
    }
    move() {
        console.log("O cachorro está correndo.");
    }
}

// Classe que não implementa a interface corretamente
class Fish {
    swim() {
        console.log("O peixe está nadando.");
    }
}

// Validação
const dog = new Dog();
const fish = new Fish();

try {
    IAnimal.validate(dog); // Passa na validação
    dog.makeSound();
    dog.move();
} catch (error) {
    console.error(error.message);
}

try {
    IAnimal.validate(fish); // Lança erro
} catch (error) {
    console.error(error.message);
}

// Another exemple

// Definição de uma interface como um contrato informal (sem validação explícita)
class IDevice {
    turnOn() {
        throw new Error("O método 'turnOn()' deve ser implementado.");
    }

    turnOff() {
        throw new Error("O método 'turnOff()' deve ser implementado.");
    }
}

// Classes que implementam a "interface"
class SmartLight extends IDevice {
    turnOn() {
        console.log("A luz inteligente foi ligada.");
    }

    turnOff() {
        console.log("A luz inteligente foi desligada.");
    }
}

class AirConditioner extends IDevice {
    turnOn() {
        console.log("O ar-condicionado foi ligado.");
    }

    turnOff() {
        console.log("O ar-condicionado foi desligado.");
    }
}

// Uso das classes
const light = new SmartLight();
light.turnOn();  // A luz inteligente foi ligada.
light.turnOff(); // A luz inteligente foi desligada.

const ac = new AirConditioner();
ac.turnOn();     // O ar-condicionado foi ligado.
ac.turnOff();    // O ar-condicionado foi desligado.
