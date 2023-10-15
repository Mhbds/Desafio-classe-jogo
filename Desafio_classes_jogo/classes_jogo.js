// Crie a classe Hero
class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
          break;
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Crie instâncias de heróis
  const mago = new Hero('Merlin', 50, 'mago');
  const guerreiro = new Hero('Conan', 35, 'guerreiro');
  const monge = new Hero('Bruce Lee', 32, 'monge');
  const ninja = new Hero('Hanzo', 28, 'ninja');
  
  // Chame o método atacar para cada herói
  mago.atacar(); // "o mago atacou usando magia"
  guerreiro.atacar(); // "o guerreiro atacou usando espada"
  monge.atacar(); // "o monge atacou usando artes marciais"
  ninja.atacar(); // "o ninja atacou usando shuriken"
  