import {getnumber, write} from './utils/io_utils.js'

/*22. Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo. */

function main(){
    // Entrada
    const fichas = getnumber('Quantas fichas de boiada tem? ')
    let count = 1
    let pesoboiMaisGordo = 0
    let pesoboiMaisMagro = 99999999999999999
    let boiMaisGordo = 0
    let boiMaisMagro = 0
    // Processamento
    while (count <= fichas){
        const id = getnumber(`ID doBoi ${count}:  `)
        const peso = getnumber(`Peso do boi ${count}: `)
        if (peso > pesoboiMaisGordo){
            boiMaisGordo = id
            pesoboiMaisGordo = peso
        }
        if (peso < pesoboiMaisMagro){
            boiMaisMagro = id
            pesoboiMaisMagro = peso
        }
        // Convergência de dados
        count ++
    }

    // Saída
write(`
=========== RESULTADO ==============
Boi mais gordo >>> ${boiMaisGordo}
-- Peso: ${pesoboiMaisGordo}kgs 
Boi mais magro >>>${boiMaisMagro}
-- Peso: ${pesoboiMaisMagro}kgs
`)

}

main()