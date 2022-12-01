let pomme = "Elle est belle ma pomme !";

//exo1
document.getElementById("index-pomme");
let position = pomme.indexOf('pomme');
console.log(position);

//exo2
document.getElementById("last-index-m");
let position = pomme.lastIndexOf('pomme')
console.log(pomme.lastIndexOf('m'));

//exo3
if (pomme.startsWith("Elle")){
    console.log("Elle est belle ma pomme ! commence par elle");
}

//exo4
let aTrouver = "!";
if (pomme.endsWith("!")){
    console.log("Elle est belle ma pomme ! Se termine par un point d exclamation");
}

//exo5
//recupere le mot pomme
document.getElementById("pomme");
let newChain = pomme.substring(18, 23);
console.log("pomme");

//exo6
document.getElementById("one-line");
for (let i = 0; i < pomme.length; i++){
    console.log(pomme[i]);
}