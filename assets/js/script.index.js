console.log("bom dia!");

function verificarInputs(){
    let tutor = document.getElementById("input-tutor").value;
    let nomepet = document.getElementById("input-nomepet").value;
    let especie = document.getElementById("input-especie").value;
    let fotolink = document.getElementById("input-fotolink").value;
    let date = document.getElementById("input-date").value;

    console.log({tutor});
    console.log({nomepet});
    console.log({especie});
    console.log({fotolink});
    console.log({date});

if(tutor == "" || nomepet == "" || especie == "" || fotolink == "" || date == ""){
    console.log("Os campos estão vazios!");
    envieMsg("Preencha todos os campos!", "erro");
   
} else {
    console.log("Os campos não estão em brancos!");
   
   }
}

function envieMsg(msg,tipo){
let msgDiv = document.getElementById("msg");
msgDiv.innerHTML = "";

let msgnaTela = `
<p class='${tipo}'>${msg}<p>
`
   msgDiv.innerHTML += msgnaTela;

   setTimeout(function () {
       msgDiv.innerHTML = "";
   }, 3000);
}

class Pets{
    constructor(tutor,nomepet,especie,fotolink,date){
        this.tutor = tutor;
        this.nomepet = nomepet;
        this.especie = especie;
        this.fotolink = fotolink;
        this.date = date;
    }
}

const petsclinic = new Pets ("Raissa", "Revoada", "Cachorro", "link", "01-01-23")
console.log(petsclinic);

function registrePets(){
    let tutor = document.getElementById("input-tutor").value;
    let nomepet = document.getElementById("input-nomepet").value;
    let especie = document.getElementById("input-especie").value;
    let fotolink = document.getElementById("input-fotolink").value;
    let date = document.getElementById("input-date").value;

    const pets = new Pets(tutor,nomepet,especie,fotolink,date);
    console.log(pets);
    bibliotecadepets.add(pets)
}

class ListadePets{
    constructor(){
        this.listadepets = [];
    }

add(parametro){
    if(verificarInputs()){
        envieMsg("Preencha todos os campos!", "erro");
    }else{
        this.listadepets.push(parametro);
        limparInputs()
    envieMsg("cadastrado com sucesso!","sucesso")
    console.log(this.listadepets);
    }

    }
}

const bibliotecadepets = new ListadePets();
console.log(bibliotecadepets);

function limparInputs(){
    let tutor = document.getElementById("input-tutor").value = "";
    let nomepet = document.getElementById("input-nomepet").value = "";
    let especie = document.getElementById("input-especie").value = "";
    let fotolink = document.getElementById("input-fotolink").value = "";
    let date = document.getElementById("input-date").value = "";
}


