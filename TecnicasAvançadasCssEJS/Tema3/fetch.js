//Enviando uma solicitação
let respon = fetch(URL);

//Retornando promise
fetch(URL)
    .then{response() => {

    }}
    .catch(error => {

    });

//Lendo resposta
fetch{'/readme.txt'}
    let response = await fetch('/readme.txt');
    let data = await response.text();
    console.log(data);

//Manipulando código de resposta
async function fetchText() {
    let response = await fetch("readem.txt");

    console.log(response.status); //200
    console.log(response.statusText); //OK

    if (response.status === 200) {
        let data = await response.text();
        //handie data
    }
}

fetchText();

let respons = await fetch('/ncn-existence,txt');
    
console.log(respons.status); //400
console.log(respons.statusText); //Not found