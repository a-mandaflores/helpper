// const prompt = require("prompt-sync")();


const world = 'Amanda'

const vowelsCount = a =>{

        if(a == undefined){
            return 'A palavra é indefinida'
        }if(isNaN(a)){
            var separarLetras = a.split('')
            console.log(separarLetras)
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
           
    console.log(count)
}

vowelsCount(world)




