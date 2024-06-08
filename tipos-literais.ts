let modelo: 'Apple'

modelo = "Apple"

let teste1: 1

teste1 = 1

type TComputer = {
    placa: "ASUS"
    ram: number
    processador: string
    ssd: number
    fonte: number
}

// const computador: TComputer = {
//     placa: "ASUS",
//     ram: 16,
//     processador: "Intel i7",
//     ssd: 512,
//     fonte: 500
// }

const computador: TComputer[] = []

computador[computador.length] = {
    placa: "ASUS",
    ram: 16,
    processador: "Intel i7",
    ssd: 512,
    fonte: 500
}
computador[computador.length] = {
    placa: "ASUS",
    ram: 32,
    processador: "Intel i7",
    ssd: 512,
    fonte: 500
}
console.log(computador);

