// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.

// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.

const world = 'jOAO'

const vowelsCount = a =>{

        if(a == undefined){
            return 'A palavra é indefinida'
        }if(isNaN(a)){
            var separarLetras = a.split('')
            voewls(separarLetras)
            
        }else{
            console.log('A informação passada é um numero, mude para uma palavra')
        }
}

const voewls = array => {
    var count = 0
    for (let i = 0; i < array.length; i++) {
            var letra = array[i].toLowerCase()
            if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
                count++
            } 
                  
    }
           
    console.log(`A quantidade de vogais da palavra é ${count}`)
}

vowelsCount(world)


// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('Escreva a palavra aqui: ', world => {
    vowelsCount(world)
  });
