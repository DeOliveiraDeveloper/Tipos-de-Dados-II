const identificador: number | boolean | "Cb DE OLIVEIRA" = "Cb DE OLIVEIRA"
//o "|" é como se fosse o "||" do JavaScript, significa "Ou".

type TTeste = {
    nomeDeGuerra: string
    dataPraca: number | string
    cia?: number | string
    // o "?" significa que  o atributo é opcional. Se não for passado, ele será undefined.
}

const mil: TTeste[] = []

mil[mil.length] = {
    nomeDeGuerra: "Cb DE OLIVEIRA",
    dataPraca: 2022,
    cia: "Cia Com"
}

console.log(mil);
