
const geraEtiquetas = (produto: {produto: string, lote: number, ano: number, qtd: number}) : string[]  => {

    let etiqueta: string[] = []

    for(let i:number = 0; i < produto.qtd; i++){

        etiqueta.push(`${produto.lote}-${produto.ano}-00${i+1}`)
    }

    return etiqueta



}

    console.log(geraEtiquetas(  {
        produto: 'CPU Dual Core 3.0GHZ',
        lote: 321,
        ano: 2022,
        qtd: 5
    }))
