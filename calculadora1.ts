const teclado = require(`prompt-sync`)()
let cond: number = 0

do {
    console.log(``);
    console.log(`Digite qual operação básica`);
    console.log(` + - adição`);
    console.log(` - - subtração`);
    console.log(` / - divisão`);
    console.log(` * - multiplicação`);
    console.log(` 0 - sair`);
    let cond = teclado(`Digite sua opção: `);
    console.clear();

    if (cond == `+`) {
        console.log(`Adição`);
    }
    else if (cond == `-`) {
        console.log(`Subtração`);
    }
    else if (cond == `/`) {
        console.log(`Divisão`);
    }
    else if (cond == `*`) {
        console.log(`Multiplicação`);
    }
    else if (cond == 0) {
        console.clear()
        console.log(`Fim dos calculos`);

    }

    console.log(``)

    const n1 = parseInt(teclado(`Digite o primeiro número: `));
    const n2 = parseInt(teclado(`Digite o segundo número: `));

    const adicao: number = n1 + n2
    const divisao: number = n1 / n2
    const multiplicacao: number = n1 * n2
    const subtracao: number = n1 - n2

    if (cond == `+`) {
        console.log(`A adição entre ${n1} e ${n2} é ${adicao}`);
    }
    else if (cond == `-`) {
        console.log(`A subtração entre ${n1} e ${n2} é ${subtracao}`);
    }
    else if (cond == `/`) {
        console.log(`A divisão entre ${n1} e ${n2} é ${divisao}`);
    }
    else if (cond == `*`) {
        console.log(`A multiplicação entre ${n1} e ${n2} é ${multiplicacao}`);
    }
    else if (cond == 0) {
        console.clear()
    }

}
while (cond! ) 
