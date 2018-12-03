
function myFunction() {
    window.print();
}
var span = document.getElementById("nSociete");
var input = document.getElementById("n_societe");
var numero = document.getElementById("n_numero");
var numeroSpan = document.getElementById("num_dubuisson");
var adresse = document.getElementById('adresse');
var span_adr = document.getElementById('adr');
var s = document.getElementsByTagName('select');


ecrire(adresse, span_adr);
ecrire(input, span);
ecrire(numero, numeroSpan);


function ecrire(input, element) {
    input.onkeyup = function () {
        element.innerHTML = input.value;
    }
}
var select = document.getElementById('client');

// inp me retourne un tableaux car j'utilise "bytagName"

var inp = document.getElementsByTagName('input');


function client(s) {

    if (s.value == "Nouveau client") {
        inp[6].value = "";
        inp[7].value = "";
        inp[8].value = "";
        inp[9].value = "";
        inp[10].value = "";



    }
    else if (s.value == "Gertrude") {
        inp[6].value = "Gertrude-assurance";
        inp[7].value = "gertrude";
        inp[8].value = "38 avennue mars";
        inp[9].value = "78938";
        inp[10].value = "01 35 65 67 91";


    }
    else if (s.value == "Gérard") {
        inp[6].value = "Gérard-auto";
        inp[7].value = "gérard";
        inp[8].value = "23 rue de la pierre";
        inp[9].value = "32000";
        inp[10].value = "03 54 65 86 12";


    }
    else if (s.value == "Jeano") {
        inp[6].value = "Jeano-shop";
        inp[7].value = "Jeano";
        inp[8].value = "65 rue du pont";
        inp[9].value = "69720";
        inp[10].value = "0376 85 98 66";


    }
    else if (s.value == "Roro") {
        inp[6].value = "Roro-immobilier";
        inp[7].value = "roro";
        inp[8].value = "75 rue jean charles";
        inp[9].value = "69987";
        inp[10].value = "01 45 76 87 43";


    }

}
s[0].onclick = function () {
    client(s[0]);
}
// fonction client2 pour exepedier a
function client2(s) {

    if (s.value == "Nouveau client") {
        inp[11].value = "";
        inp[12].value = "";
        inp[13].value = "";
        inp[14].value = "";
        inp[15].value = "";
    }
    else if (s.value == "Gertrude") {
        inp[11].value = "Gertrude-assurance";
        inp[12].value = "gertrude";
        inp[13].value = "38 avennue mars";
        inp[14].value = "78938";
        inp[15].value = "01 35 65 67 91";
    }
    else if (s.value == "Gérard") {
        inp[11].value = "Gérard-auto";
        inp[12].value = "gérard";
        inp[13].value = "23 rue de la pierre";
        inp[14].value = "32000";
        inp[15].value = "03 54 65 86 12";
    }
    else if (s.value == "Jeano") {
        inp[11].value = "Jeano-shop";
        inp[12].value = "Jeano";
        inp[13].value = "65 rue du pont";
        inp[14].value = "69720";
        inp[15].value = "03 76 85 98 66";
    }
    else if (s.value == "Roro") {
        inp[11].value = "Roro-immobilier";
        inp[12].value = "roro";
        inp[13].value = "75 rue jean charles";
        inp[14].value = "69987";
        inp[15].value = "01 45 76 87 43";
    }

}

s[1].onclick = function () {
    client2(s[1]);
}



//s = tableau select car on utilise "tagname"  

var td = document.getElementsByTagName('td');
var s = document.getElementsByTagName('select');

function produit(s, libille, prix) {

    if (s.value == "ac1") {
        libille.innerHTML = "assasin's creed 1";
        prix.innerHTML = 20.00;
    }
    else if (s.value == "ac2") {
        libille.innerHTML = "assasin's creed 2";
        prix.innerHTML = 30.00;
    }
    else if (s.value == "ac3") {
        libille.innerHTML = "assasin's creed 3";
        prix.innerHTML = 40.00;
    }
    else if (s.value == "ac4") {
        libille.innerHTML = "assasin's creed 4";
        prix.innerHTML = 50.00;
    }
}
s[2].onclick = function () {
    produit(s[2], td[0], td[1]);
};
s[3].onclick = function () {
    produit(s[3], td[4], td[5]);
};
s[4].onclick = function () {
    produit(s[4], td[8], td[9]);
};
s[5].onclick = function () {
    produit(s[5], td[12], td[13]);
};

// je recupere les valeures des inp en tableau car c'est tag name

function calcul(prix,quantite,total) {
    total.innerHTML=prix * quantite;
} 
// pour ecrire une quantité  et la calculer
inp[16].onkeyup = function (){
calcul(td[1].innerHTML,inp[16].value,td[3]);
}
inp[17].onkeyup = function (){
calcul(td[5].innerHTML,inp[17].value,td[7]);
}
inp[18].onkeyup = function (){
calcul(td[9].innerHTML,inp[18].value,td[11]);
}
inp[19].onkeyup = function (){
calcul(td[13].innerHTML,inp[19].value,td[15]);
}
//pour afficher le dernier td donc le total (24)
console.log(td.length);

//fuction pour calcluer le total avec taxe

prix1=td[3];
prix2=td[7];
prix3=td[11];
prix4=td[15];
total=prix1+prix2+prix3+prix4;

td[15].onclick= function(){
    td[23].innerHTML=total;
}


