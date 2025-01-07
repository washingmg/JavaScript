// 1. Definição de Classe com Visibilidade Pública e Privada
class Carro {
    // Propriedade privada usando a sintaxe de # (ES2022)
    #marca;
    #modelo;
    // Propriedade pública (visibilidade padrão)
    cor;
  
    constructor(marca, modelo, cor) {
      this.#marca = marca; // Propriedade privada
      this.#modelo = modelo; // Propriedade privada
      this.cor = cor; // Propriedade pública
    }
  
    // Método público
    ligar() {
      console.log(`${this.#marca} ${this.#modelo} está ligado!`);
    }
  
    // Getter para a propriedade privada 'marca'
    get marca() {
      return this.#marca;
    }
  
    // Setter para a propriedade privada 'marca'
    set marca(marca) {
      if (marca.length < 3) {
        console.log('Marca inválida, deve ter pelo menos 3 caracteres');
      } else {
        this.#marca = marca;
      }
    }
  
    // Getter para a propriedade privada 'modelo'
    get modelo() {
      return this.#modelo;
    }
  
    // Setter para a propriedade privada 'modelo'
    set modelo(modelo) {
      if (modelo.length < 2) {
        console.log('Modelo inválido, deve ter pelo menos 2 caracteres');
      } else {
        this.#modelo = modelo;
      }
    }
  
    // Método privado com #, não acessível fora da classe
    #mostrarDetalhes() {
      console.log(`Detalhes do carro: ${this.#marca} ${this.#modelo}, cor: ${this.cor}`);
    }
  
    // Método público que chama o método privado
    exibirDetalhes() {
      this.#mostrarDetalhes();
    }
  }
  
  // 2. Classe com Propriedades Privadas por Convenção
  class Pessoa {
    constructor(nome, idade) {
      this._nome = nome; // Propriedade privada por convenção
      this._idade = idade; // Propriedade privada por convenção
    }
  
    // Método público para acessar o nome
    get nome() {
      return this._nome;
    }
  
    // Método público para acessar a idade
    get idade() {
      return this._idade;
    }
  
    // Método público para modificar a idade
    set idade(idade) {
      if (idade < 0) {
        console.log('Idade inválida');
      } else {
        this._idade = idade;
      }
    }
  
    // Método público
    saudacao() {
      console.log(`Olá, meu nome é ${this._nome} e tenho ${this._idade} anos.`);
    }
  }
  
  // 3. Exemplo de Uso
  
  // Criando uma instância da classe Carro
  const meuCarro = new Carro('Ford', 'F-150', 'azul');
  console.log(meuCarro.cor);  // Acessa a propriedade pública 'cor'
  meuCarro.ligar();  // Chama o método público 'ligar'
  
  // Usando o getter e setter para marca
  console.log(meuCarro.marca);  // Acessa a propriedade privada via getter
  meuCarro.marca = 'Chevrolet';  // Modifica a propriedade privada via setter
  console.log(meuCarro.marca);  // Acessa a propriedade modificada
  
  // Usando getter e setter para modelo
  meuCarro.modelo = 'Civic';  // Modifica o modelo
  console.log(meuCarro.modelo);  // Acessa o modelo atualizado
  
  // Chamando um método público que usa um método privado
  meuCarro.exibirDetalhes();
  
  // Criando uma instância da classe Pessoa
  const pessoa1 = new Pessoa('João', 30);
  console.log(pessoa1.nome);  // Acessa a propriedade 'nome' via getter
  pessoa1.saudacao();  // Chama o método público 'saudacao'
  
  // Modificando a idade de forma controlada
  pessoa1.idade = -5;  // Erro: Idade inválida
  pessoa1.idade = 35;  // Modifica a idade com sucesso
  console.log(pessoa1.idade);  // Acessa a nova idade
  