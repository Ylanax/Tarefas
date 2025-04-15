let tarefas = new Array()
let datasConclusao = new Array()

function fnSalvarTarefa(){
    // pegar a tarefa e colocar no array de tarefas

    let novaTarefa = document.getElementById("tarefa").value
    tarefas.push(novaTarefa)
    document.getElementById("tarefa").value=""

    let novaDataConclusao = document.getElementById("conclusao").value
    datasConclusao.push(novaDataConclusao)
    document.getElementById("conclusao").value
}

function fnExibirTarefa(){
    // exibe as tarefas na #lista-tarefas
    let listaDeTarefas = ""
    for(let i=0; i < tarefas.length ; i++){
        listaDeTarefas += "<li>" + tarefas[i] + " - " + datasConclusao[i] + "</li>"
    }
    document.getElementById("lista-tarefas").innerHTML = listaDeTarefas
}

let frutas = ['🍇', '🍊', '🍌', '🥑', '🍍']

for(let i=0 ; i < frutas.length ; i++){
    console.log
}

