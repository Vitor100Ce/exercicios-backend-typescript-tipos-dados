


const geraTabuada = (numeros: number[]) => {

   for(let i = 0; i < numeros.length; i++) {

        for(let j = 0; j < 11; j++){

            console.log(`${numeros[i]} x ${j} = ${numeros[i] * j}` )

        }

        console.log('--------------------------')

   }

}


geraTabuada([1, 2, 9])