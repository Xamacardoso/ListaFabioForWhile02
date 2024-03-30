import { question } from "readline-sync";

export function write(message){
    console.log(message)
}
export function getnumber(message){
    return Number(question(message))
}

export function getstring(message){
    return String(question(message))
}

export function getpositivenumber(message){
    const num = Number(question(message))
    if(num <= 0){
        write('O numero deve ser positivo!')
        return getpositivenumber(message)
    }
    return num
}