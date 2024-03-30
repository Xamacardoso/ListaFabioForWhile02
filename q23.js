import {getnumber, write} from './utils/io_utils.js'

/*23. Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.*/

function main(){
    // Entrada
    const funcionarios = getnumber('Quantos funcionarios tem? ')
    let count = 1

    // Processamento
    while(count<=funcionarios){
        let id = getnumber(`ID do funcionario ${count}: `)
        let horas = getnumber('Quantidade de horas de trabalho: ')
        let dependentes = getnumber('Quantidade de dependentes: ')
        let salario_bruto = 12*horas + 40*dependentes
        let inss = salario_bruto*(8.5/100)
        let ir = salario_bruto*(5/100)
        
        // Convergencia de dados
        count++

// Saída
write(`
========== CONTRACHEQUE ==========
Funcionário: ${id}
+ Salário Bruto   : R$ ${salario_bruto.toFixed(2)}
- INSS (8.5%)     : R$ ${inss.toFixed(2)}
- IR (5%)         : R$ ${ir.toFixed(2)}
----------------------------------
> Salário líquido : R$ ${(salario_bruto-inss-ir).toFixed(2)}
`)

    }
}
main()