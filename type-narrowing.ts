//Type Narrowing -> Estreitamento

function soma(num1: number | string, num2: number | string) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    } else{
        return "Vai colocar um número aí. Isso é uma calculadora zé ruela"
    }
}

console.log(soma(1,2));