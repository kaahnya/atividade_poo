class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

  calcularArea(){
    return this.largura * this.altura
  }

  area(){
  return this.calcularArea()
}
  
}
let retangulo = new Retangulo(25, 35);
  console.log(retangulo.area())

let retanguloo = new Retangulo(30, 40);
  console.log(retanguloo.area())
