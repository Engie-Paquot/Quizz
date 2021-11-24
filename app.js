const form = document.querySelector(".form-quizz");
let tableauResultats = [];
const reponses = ["a", "b", "b", "b", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const titreResultat = document.querySelector(".resultats h2");
const aideResultat = document.querySelector(".note");
const noteResultats = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question-block");
let verifTableau = [];

// création de l'évenement de recupérer les données qui sont cochées
form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (i = 1; i < 6; i++) {
    tableauResultats.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  //console.log(tableauResultats);
  verifFunc(tableauResultats);
  tableauResultats = [];
});

function verifFunc(tabResultats) {
  for (let a = 0; a < 5; a++) {
    if (tabResultats[a] === reponses[a]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  //console.log(verifTableau);
  afficherResultats(verifTableau);
  couleursFonction(verifTableau);
  verifTableau = [];
}

function afficherResultats(tabCheck) {
  const nbDeFautes = tabCheck.filter((el) => el !== true).length;

  switch (nbDeFautes) {
    case 0:
      titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`;
      aideResultat.innerText = "";
      noteResultats.innerText = "5/5";
      break;
    case 1:
      titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
      aideResultat.innerText =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      noteResultats.innerText = "4/5";
      break;
    case 2:
      titreResultat.innerText = `✨ Encore un effort ... 👀`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultats.innerText = "3/5";
      break;
    case 3:
      titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultats.innerText = "2/5";
      break;
    case 4:
      titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultats.innerText = "1/5";
      break;
    case 5:
      titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultats.innerText = "0/5";
      break;

    default:
      "Wops, cas innatendu.";
  }
}

function couleursFonction(tabValBool) {
  tabValBool.forEach((tabValBool, ct) => {
    if (tabValBool === true) {
      toutesLesQuestions[ct].style.background = "lightgreen";
    } else {
      toutesLesQuestions[ct].style.background = "#ffb8b8";
      toutesLesQuestions[ct].classList.add("echec");

      setTimeout(() => {
        toutesLesQuestions[ct].classList.remove("echec");
      }, 500);
    }
  });
}

toutesLesQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "white";
  });
});
