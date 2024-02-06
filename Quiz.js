//Array para perguntas e respostas
const perguntas =[
        {
            pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
            respostas: [
                "var x;",
                "let x;",
                "const x;"
            ],
            correta: 2
        },
        {
            pergunta: "Qual método JavaScript é usado para adicionar novos elementos ao final de um array e retornar o novo comprimento do array?",
            respostas: [
                "push()",
                "pop()",
                "concat()"
            ],
            correta: 0
        },
        {
            pergunta: "Qual operador JavaScript é usado para comparar se dois valores são iguais, incluindo seus tipos?",
            respostas: [
                "===",
                "==",
                "!="
            ],
            correta: 0
        },
        {
            pergunta: "Qual método JavaScript é usado para converter um objeto em uma string JSON?",
            respostas: [
                "JSON.stringify()",
                "JSON.parse()",
                "stringify()"
            ],
            correta: 0
        },
        {
            pergunta: "Qual método JavaScript é usado para remover o primeiro elemento de um array e retornar esse elemento?",
            respostas: [
                "shift()",
                "unshift()",
                "splice()"
            ],
            correta: 0
        },
        {
            pergunta: "Qual função JavaScript é usada para converter uma string em minúsculas?",
            respostas: [
                "toLowerCase()",
                "toUpperCase()",
                "toString()"
            ],
            correta: 0
        },
        {
            pergunta: "Qual operador JavaScript é usado para atribuição?",
            respostas: [
                "=",
                "==",
                "===",
            ],
            correta: 0
        },
        {
            pergunta: "Qual método JavaScript é usado para retornar o número de elementos em um array?",
            respostas: [
                "length()",
                "size()",
                "count()"
            ],
            correta: 0
        },
        {
            pergunta: "Qual função JavaScript é usada para arredondar um número para o inteiro mais próximo?",
            respostas: [
                "Math.ceil()",
                "Math.round()",
                "Math.floor()"
            ],
            correta: 1
        },
        {
            pergunta: "Qual método JavaScript é usado para ordenar os elementos de um array?",
            respostas: [
                "sort()",
                "order()",
                "arrange()"
            ],
            correta: 0
        }
    ];
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')

    const corretas = new Set()
    const totalPerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas



//Estrutura de repetição para mostrar as perguntas
    for(const item of perguntas){
        console.log(item.pergunta)

        
        const QuizItem = template.content.cloneNode(true)
        QuizItem.querySelector('h3').textContent = item.pergunta
//Estrutura de repetição para mostrar as opções de respostas
        for(let resposta of item.respostas){
            const dt = QuizItem.querySelector('dl dt').cloneNode(true)
            dt.querySelector('span').textContent= resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta
                
                corretas.delete(item)
                if(estaCorreta){
                    corretas.add(item)
                }
                //alert(corretas.size)
                mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
            }

            QuizItem.querySelector('dl').appendChild(dt)
        }

        QuizItem.querySelector('dl dt').remove()

        //Coloca a pergunta na tela
        quiz.appendChild(QuizItem)


    }
    
    

