window.addEventListener("load", init);
function ID(elem) {
    return document.getElementById(elem);
}

var kepeim = [
    {
        eleresiut: "kepek/kep1.jpg",
        cim: "kep1"
    },
    {
        eleresiut: "kepek/kep2.jpg",
        cim: "kep2"
    },
    {
        eleresiut: "kepek/kep3.jpg",
        cim: "kep3"
    },
    {
        eleresiut: "kepek/kep4.jpg",
        cim: "kep4"
    },
    {
        eleresiut: "kepek/kep5.jpg",
        cim: "kep5"
    }
]

var index = 0;

function init() {
    megjelenit(index);
    ID("balra").addEventListener("click", kepBalra);
    ID("jobbra").addEventListener("click", kepJobbra);
    ID("kep1").addEventListener("click", kepKattint1);
    ID("kep2").addEventListener("click", kepKattint2);
    ID("kep3").addEventListener("click", kepKattint3);
    ID("kep4").addEventListener("click", kepKattint4);
    ID("kep5").addEventListener("click", kepKattint5);
}

function kepBalra() {
    if (index === 0){
        index = 5;
    }

    index -= 1;

    megjelenit(index);

}
function kepJobbra() {
    if (index === 4){
        index = -1;
    }

    index += 1;

    megjelenit(index);

}

function megjelenit(kep) {
    ID("kivalasztott").src = kepeim[kep].eleresiut;
    ID("kivalasztott").alt = kepeim[kep].cim;
}

function kepKattint1(){
    index = 0;
    megjelenit(index);
}

function kepKattint2(){
    index = 1;
    megjelenit(index);
}

function kepKattint3(){
    index = 2;
    megjelenit(index);
}

function kepKattint4(){
    index = 3;
    megjelenit(index);
}

function kepKattint5(){
    index = 4;
    megjelenit(index);
}