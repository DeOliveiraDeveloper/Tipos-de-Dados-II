type TUser = {
    nome: string
    email: string
    idade: number
}

type TEndereco = {
    rua: string
    numero: number
    cep: number
    cidade: string
}

type TMesclado = TEndereco & TUser 

const users: TMesclado[] = [
    {
        nome: "Caio",
        email: "teste@teste.com",
        idade: 25,
        rua: "Das Pacas",
        numero: 123,
        cep: 23029203,
        cidade: "Rio de Janeiro"
    }
]

console.log(users[0]);

