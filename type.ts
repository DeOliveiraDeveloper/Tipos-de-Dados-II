type TNome = {
    nome: string,
    idade: number,
    genero: string}

const nome: TNome = {
    nome: 'João',
    idade: 20,
    genero: 'Masculino'
}

//se quisesse usar como um array de tipos

const nome2: TNome[] = [
    {
        nome: 'João',
        idade: 20,
        genero: 'Masculino'
    },
    {
        nome: 'Maria',
        idade: 20,
        genero: 'Feminino'
    },
    {
        nome: 'Pedro',
        idade: 20,
        genero: 'Masculino'
    }

]

console.log(nome2[2]);
