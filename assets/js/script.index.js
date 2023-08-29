console.log("bom dia!");

function verificarInputs(){
    let tutor = document.getElementById("input-tutor").value;
    let nomepet = document.getElementById("input-nomepet").value;
    let especie = document.getElementById("input-especie").value;
    let fotolink = document.getElementById("input-fotolink").value;
    let date = document.getElementById("input-date").value;
if(tutor == "" || nomepet == "" || especie == "" || fotolink == "" || date == ""){
    console.log("Os campos estão vazios!");
    envieMsg("Preencha todos os campos!", "erro");
   return true
} else {
    console.log("Os campos não estão em brancos!");
    return false
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
        this.idade = this.getAge();
    }
    getAge(){
        let today = new Date();
        let birthdate = new Date(this.date);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
        
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
    renderizarConteudo();
}

class ListadePets{
    constructor(){
        this.listadepets = [];
    }

add(parametro){
    if(verificarInputs()){
        envieMsg("Preencha todos os campos!", "erro");
    } else if(!isURLValida(parametro.fotolink)) {
        envieMsg("URL inválida", "erro")
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

function renderizarConteudo() {

    const listaHtml = document.getElementById('containerLista');
    listaHtml.innerHTML = '';
    let array = bibliotecadepets.listadepets;
    console.log(array)
    array.forEach(pets => {
        const petsDiv = ` 
         <div id='Petsclinic'>
         <p>Tutor: ${pets.tutor}</p>
         <p>Nome do Pet: ${pets.nomepet}</p>
         <p>Espécie: ${pets.especie}</p>
         <img src="${pets.fotolink}" alt="${pets.tutor}">
         <p>Data de Nascimento: ${dateinPTBR(pets.date)}</p>
         <p>Idade: ${pets.idade}</p>

        </div>
        `;
        listaHtml.innerHTML += petsDiv;
    });
}
function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}
function dateinPTBR(data) {
    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}
function RegistroPets(){
    document.getElementById("principal").classList.remove("hidden");
    document.getElementById("containerLista").classList.add("hidden");
    document.getElementById("Petsclinic").classList.add("hidden");
}

function ExibicaoPets(){
    document.getElementById("principal").classList.add("hidden");
    document.getElementById("containerLista").classList.remove("hidden");
    document.getElementById("Petsclinic").classList.remove("hidden");
}