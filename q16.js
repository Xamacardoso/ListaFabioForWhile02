import {getnumber, write} from './utils/io_utils.js'

/*16. Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.*/

function main(){
    // Entrada
    const n = getnumber('Qual o valor de N? ')
    while (n<2){
        write('O valor de N deve ser maior ou igual a 2!')
        n = getnumber('Qual o valor de N? ')
    }

    let count = 1
    let ultimo = 1
    let penultimo = 0 
    let termo = 0
    // Processamento
    while (count <= n){
        if (count == 1){
            termo = 0
        }else if (count == 2){
            termo = 1
        }else{
            termo = penultimo + ultimo
            penultimo = ultimo
            ultimo = termo
        }
        write(termo)
        // Convergência de dados
        count ++
    }
}


main()