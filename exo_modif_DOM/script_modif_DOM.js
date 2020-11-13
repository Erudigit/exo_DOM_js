// Changer le contenu HTML avec elementFromDOM.innerHTML = "nouvelle valeur".
// Changer le texte avec elementFromDOM.textContent = "nouvelle valeur".
// Ajouter ou supprimer une classe CSS avec elementFromDOM.classList.add("title") ou elementFromDOM.classList.remove("title").
// Changer un attribut avec elementFromDOM.setAttribute("href", "http://www.thehackingproject.org").
// Modifier une propriété CSS avec elementFromDOM.style.font = "nouvelle propriete", par exemple elementFromDOM.style.color = "red".


/* MODIFICATION 1 */
function changeTitles() {
    document.getElementsByTagName("h1")[0].innerHTML = "Ce que j'ai appris à THP";
    document.querySelectorAll("p.lead")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}


/* MODIFICATION 2 */
function changeCallToActions() {
    document.querySelectorAll("div.container p a")[0].innerHTML = "OK je veux tester !";
    document.querySelectorAll("div.container p a")[0].setAttribute("href", "http://www.thehackingproject.org");
    document.querySelectorAll("div.container p a")[1].innerHTML = "Non merci !";
    document.querySelectorAll("div.container p a")[1].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}


/* MODIFICATION 3 */
function changeLogoName() {
    let navbar = document.querySelectorAll("div.navbar div.container a strong")[0];
    navbar.innerHTML = "The THP experience !";
    navbar.style.fontSize = "2em";
}


/* MODIFICATION 4 */
function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

    let col_card_img = document.querySelectorAll("div.album div.container div.row div.col-md-4");

    for (var i=0; i < 9; i++) {
        col_card_img[i].querySelectorAll("div.card img")[0].setAttribute("src", imagesArray[i]);
    }
}


/* MODIFICATION 5 */
function deleteLastCards() {
    let col_card_img = document.querySelectorAll("div.album div.container div.row div.col-md-4");
    for (var i=col_card_img.length - 1; i > col_card_img.length - 4; i--) {
        col_card_img[i].remove();
    }
}


/* MODIFICATION 6 */
function changeCardsText() {
    let text_to_replace = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];

    let col_card_txt = document.querySelectorAll("div.album div.container div.row div.col-md-4");
    for (var i=0; i < 3; i++) {
        col_card_txt[i].querySelectorAll("div.card-body p.card-text")[0].innerHTML = text_to_replace[i];
    }
}


/* MODIFICATION 7 */
function changeViewButtons() {
    let col_card_btn = document.querySelectorAll("div.album div.container div.row div.col-md-4");
    for (var i=0; i < 9; i++) {
        col_card_btn[i].querySelectorAll("div.card-body div.d-flex div.btn-group button")[0].classList.remove("btn-outline-secondary");
        col_card_btn[i].querySelectorAll("div.card-body div.d-flex div.btn-group button")[0].classList.add("btn-success");
    }
}


/* MODIFICATION 8 */
function addADiv() {
    let new_div = document.createElement("div");
    let col_card_row = document.querySelectorAll("div.album div.container")[0];
    col_card_row.appendChild(new_div).classList.add("row");
    console.log(document.querySelectorAll("div.album div.container div.row div.col-md-4")[2]);

    /* move the third card of the first div.row in the second div.row */
    new_div.appendChild(
        document.querySelectorAll("div.album div.container div.row div.col-md-4")[3]
      );
}

addADiv();