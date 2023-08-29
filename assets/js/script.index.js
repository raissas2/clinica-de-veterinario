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

} else {
    console.log("Os campos não estão em brancos!");
   }
}

