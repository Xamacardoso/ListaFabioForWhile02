import {getnumber, write} from './utils/io_utils.js'

/*15. Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).*/

function main(){
    // Entrada
    const n = getnumber('Qual o valor de N? ')
    let count = 1
    let termo = 1
    let aux = 2
    
    // Processamento
    while (count <= n){
        if (count == 1){
            // Saída
            write(termo)
        }else{
            termo = termo + aux
            // Saída e Convergência de dados
            write(termo)
            aux++
        }
        // Convergência de dados
        count ++
    }
}

main()