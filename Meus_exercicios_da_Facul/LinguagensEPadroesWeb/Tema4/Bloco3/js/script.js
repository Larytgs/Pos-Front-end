document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input[name=tarefa') /*busque para mim um input que tem o nome tarefa */
    let btn = document.querySelector('#botao');
    let lista = document.querySelector('#lista')
    let card = document.querySelector('.card')
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] /*buscar o local de armazenamento, ele vai buscar tds os elementos da tarefa, ou se ele nao encontrar o localStorage, vai me mostrar vazio*/ 
    /*getItm: buscar a informação 
      setItem: utilizada para armazenar um valor no local storage*/
    
    
    function rendenizarTarefas(){
        lista.innerHTML = ''
    
        for(tarefa of tarefas){ /*vai percorrer toda lista que tenho, criando uma lista*/
            let itemLista = document.createElement('li')
            itemLista.setAttribute('class', 'list-group-item list-group-item-action') /*lista do bootStrap*/
            itemLista.onclick = function(){
                deletarTarefa(this)
            }
            /*a partir que eu excluir um item da lista, ele vaideslocar todo os valores q eu tinha armazenado p um nivel anterior, para nao ficar nenhum "buraco" no registro que eu removi*/
            let itemTexto = document.createTextNode(tarefa)
            itemLista.appendChild(itemTexto) /*insirir um texto na minha lista*/
            lista.appendChild(itemLista)
        }
    }

    rendenizarTarefas()


    btn.onclick = function(){ /*coloquei a função direta*/
        
        let novaTarefa = input.value; /*pega o valor do input, joga para uma variavel local, para verificar */

        if(novaTarefa !== ""){ /*caso nao esteja vazio*/
            tarefas.push(novaTarefa)/*vai inserir tds as tarefas*/
            rendenizarTarefas() /*função para mostrar as tarefas*/
            input.value = ''
            removerSpans() /*função p remover os espaços*/
            salvarDadosNoStorage() /*função p salvar os dados*/ 
        }else{ /*se tiver tarefas*/
            removerSpans()
            let span = document.createElement('span')
            span.setAttribute('class', 'alert alert-warning') /*alerta do bootStrap*/
            let msg = document.createTextNode('Voce precisa digitar a tarefa que deseja registrar!')
            /*caso o usuario nao digitarnenhuma tarefa, vai mostrar a mensagem de alerta*/
            span.appendChild(msg) /*vai inserir a msg dentro do span*/
            card.appendChild(span) /*dps vai inserir o span dentro do card*/
        }
    }

    function removerSpans(){
        let spans = document.querySelectorAll('span')
        for(let i = 0; i < spans.length; i++){
            card.removeChild(spans[i])
        }
    }

    function deletarTarefa(tar){
        tarefas.splice(tarefas.indexOf(tar.textContent), 1) /*splice: busca um indice de um determinado conteudo, e remove aquele conteudo*/
        /*indexOf(): utilizado para retornar o índice da primeira ocorrência
        de uma determinada palavra ou caractere em uma string,
        lembrando que a contagem das posições começa sempre do zero.*/
        rendenizarTarefas() 
        salvarDadosNoStorage()
    }

    function salvarDadosNoStorage(){
        localStorage.setItem('tarefas', JSON.stringify(tarefas))

        /*setItem: utilizada para armazenar um valor no local storage*/
    }

})

