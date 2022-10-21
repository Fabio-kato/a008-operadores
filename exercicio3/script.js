

const operacao1 = 5 > 20 && 5 < 2

const operacao2 = 5 === 5 || 5 === 5

const operacao3 = ! 20 > 50 || 50 > 60

console.log(operacao1)
console.log(operacao2)
console.log(operacao3)

const auxCreche = 45.00
const salario = 2000.00

let comJan = 5784.50 * 0.1
let comFev = 3418.41 * 0.1
let comMar = 4124.10 * 0.1
let comAbr = 1874.00 * 0.1
let comMai = 7000.00 * 0.1
let comJun = 9450.00 * 0.1

let subTotalJan = (salario + comJan + auxCreche) 
let inssJan = subTotalJan * 0.05
let salJan = subTotalJan - inssJan
console.log('salário de janeiro', salJan)
console.log('INSS janeiro', inssJan)
console.log('comissão janeiro', comJan)
console.log('---------')

let subTotalFev = (salario + comFev + auxCreche) 
let inssFev = subTotalFev * 0.05
let salFev = subTotalFev - inssFev
console.log('salário de fevereiro' ,salFev)
console.log('INSS fevereiro', inssFev)
console.log('comissão fevereiro', comFev)
console.log('---------')

let subTotalMar = (salario + comMar + auxCreche) 
let inssMar = subTotalMar * 0.05
let salMar = subTotalMar - inssMar
console.log('salário de março', salMar)
console.log('INSS março', inssMar)
console.log('comissão março', comMar)
console.log('---------')

let subTotalAbr = (salario + comAbr + auxCreche) 
let inssAbr = subTotalAbr * 0.05
let salAbr = subTotalAbr - inssAbr
console.log('salário de abril', salAbr)
console.log('INSS abril', inssAbr)
console.log('comissão abril', comAbr)
console.log('---------')

let subTotalMai = (salario + comMai + auxCreche) 
let inssMai = subTotalMai * 0.05
let salMai = subTotalMai - inssMai
console.log('salário de maio', salMai)
console.log('INSS maio', inssMai)
console.log('comissão maio', comMai)
console.log('---------')

let subTotalJun = (salario + comJun + auxCreche) 
let inssJun = subTotalJun * 0.05
let salJun = subTotalJun - inssJun
console.log('salário de junho', salJun)
console.log('INSS junho', inssJun)
console.log('comissão junho', comJun)
console.log('---------')
