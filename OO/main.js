// Exemplos organizados de conceitos de Orientação a Objetos (OO) em JavaScript

// 1. Definição de Classes
// Uma classe básica que define propriedades e métodos associados ao objeto
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// 2. Métodos Estáticos
// Métodos que pertencem à classe, não às instâncias
// Quando a funcionalidade não depender das instâncias da classe e quando você precisar de métodos ou propriedades que são acessíveis pela classe em vez de por cada instância.
class Utilitarios {
  static descricao() {
    return 'Esta classe fornece utilitários para manipulação de dados.';
  }
}

// 3. Herança
// Extensão de classes para reutilizar e especializar comportamentos
class Funcionario extends Pessoa {
  constructor(nome, idade, cargo) {
    super(nome, idade);
    this.cargo = cargo;
  }

  saudacao() {
    return `${super.saudacao()} Eu sou um(a) ${this.cargo}.`;
  }
}

// 4. Getters e Setters
// Encapsulamento de propriedades para validações e controle de acesso
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this._preco = preco;
  }

  get preco() {
    return this._preco;
  }

  set preco(valor) {
    if (valor < 0) {
      throw new Error('O preço não pode ser negativo.');
    }
    this._preco = valor;
  }
}

// 5. Encapsulamento com WeakMap
// Ocultação de propriedades privadas usando WeakMap
const propriedadesPrivadas = new WeakMap();

class ContaBancaria {
  constructor(saldo) {
    propriedadesPrivadas.set(this, { saldo });
  }

  depositar(valor) {
    const props = propriedadesPrivadas.get(this);
    props.saldo += valor;
  }

  sacar(valor) {
    const props = propriedadesPrivadas.get(this);
    if (valor > props.saldo) {
      throw new Error('Saldo insuficiente.');
    }
    props.saldo -= valor;
  }

  consultarSaldo() {
    return propriedadesPrivadas.get(this).saldo;
  }
}

// 6. Polimorfismo
// Sobrescrita de métodos para diferentes comportamentos
class Animal {
  fazerSom() {
    return 'Som genérico';
  }
}

class Cachorro extends Animal {
  fazerSom() {
    return 'Latido';
  }
}

class Gato extends Animal {
  fazerSom() {
    return 'Miau';
  }
}

// 7. Interfaces Simuladas
// Implementação de padrões obrigatórios por convenção
class Operacao {
  executar() {
    throw new Error('Método executar() deve ser implementado.');
  }
}

class Soma extends Operacao {
  executar(a, b) {
    return a + b;
  }
}

class Subtracao extends Operacao {
  executar(a, b) {
    return a - b;
  }
}

// 8. Mixins
// Reutilização de funcionalidades entre classes
const Movel = {
  mover() {
    return 'Objeto está se movendo';
  }
};

const Parado = {
  parar() {
    return 'Objeto está parado';
  }
};

class Veiculo {
  constructor(nome) {
    this.nome = nome;
  }
}

Object.assign(Veiculo.prototype, Movel, Parado);

// 9. Abstração
// Classe base genérica com métodos obrigatórios implementados por subclasses
class Figura {
  calcularArea() {
    throw new Error('Método calcularArea() deve ser implementado.');
  }
}

class Circulo extends Figura {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }
}

class Retangulo extends Figura {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

// Exemplos de Uso de Cada Conceito

// Classes Básicas
const pessoa1 = new Pessoa('João', 30);
console.log(pessoa1.saudacao());

// Métodos Estáticos
console.log(Utilitarios.descricao());

// Herança
const funcionario1 = new Funcionario('Ana', 25, 'Engenheira');
console.log(funcionario1.saudacao());

// Getters e Setters
const produto1 = new Produto('Notebook', 3000);
console.log(produto1.preco);
produto1.preco = 3500;
console.log(produto1.preco);

// Encapsulamento
const conta = new ContaBancaria(1000);
conta.depositar(500);
conta.sacar(300);
console.log(conta.consultarSaldo());

// Polimorfismo
const cachorro = new Cachorro();
const gato = new Gato();
console.log(cachorro.fazerSom());
console.log(gato.fazerSom());

// Interfaces Simuladas
const soma = new Soma();
const subtracao = new Subtracao();
console.log(soma.executar(10, 5));
console.log(subtracao.executar(10, 5));

// Mixins
const carro = new Veiculo('Carro');
console.log(carro.mover());
console.log(carro.parar());

// Abstração
const circulo = new Circulo(5);
const retangulo = new Retangulo(4, 6);
console.log(circulo.calcularArea());
console.log(retangulo.calcularArea());
