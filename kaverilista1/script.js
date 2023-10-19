let kaveritArr = new Array();

function lisaaNimi() {
    let nameInput = document.getElementById("nameInput").value;
    // Onko tyhjä
    if (nameInput === "") {
        alert("Nimi ei voi olla tyhjä");
        return;
    }
    // Jos nimimäärä alle 10, lisää listaan
    if (kaveritArr.length <= 9) {
        kaveritArr.push(nameInput);
        document.getElementById("nameInput").value = "";

    //Jos 10 nimeä, täytä niillä lista 
    } else {
        for (let i = 0; i < kaveritArr.length; i++) {
            listaaNimet(kaveritArr[i]);
        }
    }
    console.log(kaveritArr);
console.log(kaveritArr.length);

}

function listaaNimet(nimi) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(nimi));

    document.querySelector(".items").appendChild(li);
}

console.log(kaveritArr);
console.log(kaveritArr.length);
