document.getElementById('paragrafo1').innerHTML = 'Hello wold em JavaScript';

var objt1 = document.getElementById('paragrafo2');

function funcaoAddTitulo(){
    if (objt1.innerHTML === "<h1>Titulo criado por JS</h1>"){
        return objt1.innerHTML = "<h2>Texto apagado</h2>";
    }else{
        return objt1.innerHTML = "<h1>Titulo criado por JS</h1>";
    }
}