//var nome = document.getElementsByName('usuario');
//var senha = document.getElementsByName('senha');

function validadeLogin(){
    var user = 'Laryssa';
    var pass = '1234';
    if(user === document.forms['validaLogin']['usuario'].value && pass === document.forms['validaLogin']['senha'].value){
        alert('Login Válido!');
        return true;
    }else{
        alert('Login Inválido!');
        return false;
    }
}