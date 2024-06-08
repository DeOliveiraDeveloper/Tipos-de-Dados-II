let info: [string, number, boolean, string, string]

info = ["Teste", 123, true, "teste2", "teste3"]

let user: [string, number, string, "ativo" | "inativo"]

user = ["De Oliveira", 2199999-9999, "teste@teste.com", "ativo"]

const outroTeste: [string, () => any] = ["Coé", function() {console.log("Fala pit!");}]

const [springles, funcfunc] = outroTeste

console.log(springles);

funcfunc()

