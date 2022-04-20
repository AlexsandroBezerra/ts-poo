class Pessoa {
  public name: string
  public cpf: string
  private hungryLevel: number // 0-100

  constructor(name: string, cpf: string) {
    this.name = name
    this.cpf = cpf
    this.hungryLevel = 0
  }

  public chorar() {
    console.log("kkkkkkrying")
    this.hungryLevel += 40
  }

  public comer() {
    if (this.hungryLevel < 50) {
      console.log('Não tô com muita fome, tô comendo tô triste')

      this.chorar()
      this.hungryLevel = 0
    } else {
      this.hungryLevel = 0

      console.log('Tô cagada de fome, nham, hammmm.....')
    }
  }
}

const pessoa1 = new Pessoa('Aninha pika demais', '01231231231')
const pessoa2 = new Pessoa('Aninha 2', '123123123')

pessoa1.chorar()
pessoa1.chorar()

console.log("------------------- Pessoa 2 --------------------")
pessoa2.comer()

// console.log({...pessoa1})