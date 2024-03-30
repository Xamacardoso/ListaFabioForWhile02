import {getnumber, write} from './utils/io_utils.js'

/*24. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.*/

function main(){
    // Entrada
    const habitantes = getnumber('Quantos habitantes tem? ')
    let count = 1
    let somafilhos = 0
    let somasalarios = 0
    let qtd_ate_1000 = 0
    // Processamento
    while(count<=habitantes){
        let salario = getnumber(`Salario do habitante ${count}: `)
        let filhos = getnumber('Quantidade de horas de trabalho: ')
        if (salario <= 1000){
            qtd_ate_1000++
        }
        somasalarios += salario
        somafilhos += filhos
        // Convergencia de dados
        count++

    const mediasalario = somasalarios/habitantes
    const mediafilhos = somafilhos/habitantes

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