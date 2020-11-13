// Question 1 :

// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
let p_counted = document.getElementsByTagName("p");

console.log(p_counted.length);

// Question 2 :

// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
let coucou_content = document.getElementById("coucou");

console.log(coucou_content.textContent);

// Question 3 :

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
let third_link = document.getElementsByTagName("a");
console.log(third_link[3].href );

// Question 4 :

// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
let compte_moi_class = document.getElementsByClassName("compte-moi");

console.log(compte_moi_class.length);

// Question 5 :

// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
let compte_moi_li_class = document.querySelectorAll("li.compte-moi");

console.log(compte_moi_li_class.length);

// Question 6 :

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
let compte_moi_ol_li_class = document.querySelectorAll("ol li.compte-moi");

console.log(compte_moi_ol_li_class.length);
// Question 7 :

// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
let mini_game = document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0];

console.log(mini_game.textContent);