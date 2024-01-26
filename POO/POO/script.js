class Cachorro{
    //propriedades
    constructor(nome, raca){
    this.nome = nome
    this.raca = raca
    }
    //métodos
    latir(){
        return('AU AUU')
    }

}
//instância daclasse
const Lupy = new Cachorro('Lupy', 'Pastor Alemão')
console.log(Lupy)

//-------------------------------------------------------//

class Mamifero{
    constructor(patas, nome){
        this.patas = patas
        this.nome = nome
    }
}
//herdando da classe pai
class Lobo extends Mamifero{
    constructor(patas, nome){
        //herdando da classe pai
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark)