function calculateSalary(salarioFixo, valorVendas) {
    if (valorVendas > 1200) {
        return ((5 / 100) * valorVendas + salarioFixo)
    }
    return ((3 / 100) * valorVendas + salarioFixo)
}

function cashMachine(valorDoSaque, valorDoSalario, valorDasVendas) {
    let salario = calculateSalary(valorDoSalario, valorDasVendas)
    let saque = valorDoSaque
    let notas = {
        200: 0,
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0,
    }

    if (valorDoSaque > salario) {
        return `Saldo atual é de R$${salario}, valor insuficiente para sacar R$${valorDoSaque}`
    }

    if (saque % 2 !== 0) {
        notas[5] += 1
        saque -= 5
    }

    for (saque; saque >= 200; saque -= 200, notas[200] += 1){}
    for (saque; saque >= 100; saque -= 100, notas[100] += 1){}
    for (saque; saque >= 50; saque -= 50, notas[50] += 1){}
    for (saque; saque >= 20; saque -= 20, notas[20] += 1){}
    for (saque; saque >= 10; saque -= 10, notas[10] += 1){}
    for (saque; saque >= 2; saque -= 2, notas[2] += 1){}

    let resposta = []
    for (let key in notas) {
        console.log(notas[key])
        if (notas[key] > 0) {
            if (notas[key] === 1) {
                resposta.push(`${notas[key]} nota de R$${key}`)
            } else {
                resposta.push(`${notas[key]} notas de R$${key}`)
            }
        }
    }
    return `Notas sacadas: ${resposta.join(", ")}, Saldo Atual: R$${salario - valorDoSaque}`
}

function calculateStock(estoqueAtual, estoqueMax, estoqueMin) {
    let quantidadeMedia = (estoqueMax + estoqueMin) / 2
    if (estoqueAtual >= quantidadeMedia) {
        return "Não efetuar compra"
    }
    return "Efetuar compra"
}

function calculateAge(anoNascimento, anoAtual) {
    let idade = anoAtual - anoNascimento
    let meses = idade * 12
    let dias = idade * 365
    let semanas = dias / 7

    return `A idade dessa pessoa em anos é ${idade} anos, a idade dessa pessoa em meses é ${meses} meses, a idade dessa pessoa em dias é ${dias} dias, a idade dessa pessoa em semanas é ${parseInt(semanas)} semanas`
}

function getDiagonal(matrizQuadrada) {
    let resultado = []
    let soma = 0
    for (let i = 0; i < matrizQuadrada.length; i++) {
        resultado.push(matrizQuadrada[i][soma])
        soma++
    } 
    return resultado
}