


const geraTabuada = (numeros: number[]) : string => {

    let resultado: string = '';

   for(let i = 0; i < numeros.length; i++) {

        for(let j = 0; j < 11; j++){

            resultado += `${numeros[i]} x ${j} = ${numeros[i] * j} \n`

            if(j === 10){
                resultado += '--------------------------- \n'
            }


        }


   }

   return resultado

}


console.log(geraTabuada([1, 2, 9]))