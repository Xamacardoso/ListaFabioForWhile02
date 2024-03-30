import {getnumber, write} from './utils/io_utils.js'

/*25. Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.*/

function main(){
    // Entrada
    const eleitores = getnumber('Quantos eleitores tem? ')
    let count = 1
    let votos1 = 0   
    let votos2 = 0   
    let votos3 = 0   
    let nulo = 0   
    let branco = 0   
    
    // Processamento
    while(count<=eleitores){
        write('Candidatos: 1- Jujuba \n2- Pedro Marcelo \n3- Janio Cleber \nOutros: \n9-Nulo \n 0- Branco')
        let voto = getnumber(`Voto ${count}: `)
        while (voto!=1 || voto!=2 || voto != 3 || voto != 9 || voto != 0){
            write('Voto inválido, digite novamente!')
            voto = getnumber(`Voto ${count}: `)
        }
        if (voto == 1){
            votos1++
        }else if (voto == 2){
            votos2++
        }else if (voto == 3){
            votos3++
        }else if (voto == 9){
            nulo++
        }else if (voto == 0){
            branco++
        }
        

        // Convergencia de dados
        count++

    

// Saída
write(`
========== RESULTADO ==========
Habitantes: ${habitantes}
Média Salarial    : R$ ${mediasalario.toFixed(2)}
Media de filhos   : ${mediafilhos} filhos
Percentual dos salarios até R$ 1000,00 : ${((qtd_ate_1000/habitantes)*100).toFixed(2)}%
`)

    }
}
main()