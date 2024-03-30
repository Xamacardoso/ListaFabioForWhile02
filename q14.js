import {getnumber, write} from './utils/io_utils.js'

/*14. Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6). */

function main(){
    const n = getnumber('Qual o valor de N? ')
    let quadrado = 1
    while (n - quadrado*quadrado > quadrado){
        quadrado ++
    }

    write(`Maior quadrado menor ou igual a ${n}: ${quadrado*quadrado} (quadrado de ${quadrado})`)
}

main()