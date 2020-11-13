# exo_DOM_js
Projet : Exerce tes talents de manipulateur DOM

1. Introduction

On t'a prévu un super projet pour t'exercer à tordre le DOM dans tous les sens. Le travail va se diviser en 2 parties : dans un premier temps on va parcourir le DOM, se balader sur la page HTML, retirer des informations, mais sans rien toucher. Ensuite on va prendre une page et la modifier dans tous les sens uniquement via notre code JavaScript.

Après ça tu en seras convaincu : quand tu as la main dans le fichier JS lié à une page HTML, tu as la main sur son contenu et tu peux la modifier du tout au tout.
2. Le projet
2.1. Visitons le DOM - time for some Parkour

Dans cette partie on va te faire parcourir une page HTML de long en large afin de répondre à plusieurs questions concernant son contenu. Sache que pour obtenir la réponse de chaque question, une seule ligne de code JS suffit . On te dit ça pour ton information, afin que sur cet exercice 1) tu n'écrives pas de fonction (pour le moment) et 2) tu ne partes pas dans des délires compliqués de boucles ou autre.
Toutefois, comme le code sur une seule ligne c'est illisible, n'hésite pas à découper chaque réponse en plusieurs lignes bien claires.
Mise en place de l'exo

On va mettre en place la page HTML qu'on va parcourir. Pour cela, créé un dossier dans lequel tu vas mettre un fichier exo_parcours_DOM.html contenant les bases d'un fichier HTML :

<!DOCTYPE html>
<html>
<head>
  <title>Exercice de parcours du DOM</title>
</head>
<body>

</body>
</html>

Ensuite, pour le contenu compris entre chaque tag <body>, utilisons tout simplement le cours d'aujourd'hui ! Qui sait, peut-être qu'il renferme quelques surprises…

Va sur la page de modification du cours et copie le contenu HTML qui s'affiche dans l'encadré. Ensuite colle-le dans le body de ton fichier exo_parcours_DOM.html.

Finalement créé un fichier script_parcours_DOM.js dans le même dossier que la page HTML et rajoute, en bas de la page HTML, la balise faisant appel à ce fichier JS (<script src="script_parcours_DOM.js"></script>).

On est prêts !
Question 1 :

Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
Question 2 :

Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
Question 3 :

Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
Question 4 :

Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
Question 5 :

Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
Question 6 :

Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
Question 7 :

Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
2.2. Modifions le DOM - ravalement de façade complet

Dans cette deuxième partie on va prendre une page HTML basique et la changer du tout au tout sans toucher au code HTML : tout sera fait directement dans le code JavaScript. Cet exercice n'est pas vraiment représentatif de ce qu'un dev professionnel ferait car il est rare de devoir autant modifier une page web sans toucher au HTML. Mais le but ici est que tu vois la puissance de JS quand on passe par le DOM : on peut tout modifier.

Rappelle-toi de la consigne principale : 🚷 interdiction de modifier le HTML ⛔. Dans la vraie vie tu pourrais rajouter des choses pour t'aider à parcourir le DOM de ta page : des id, des class, des div. Ici on va considérer un cas plus compliqué pour t'obliger à chercher des solutions en JS et utiliser un max de fonctions de modification vues dans la ressource.

Dernière consigne : chaque modification devra être apportée par une fonction JS que tu vas écrire. Eh oui, on ne perd pas les bonnes habitudes : tout ton code doit être rangé dans des fonctions !
Mise en place de l'exo

Voici les étapes à effectuer pour disposer de la page HTML sur laquelle nous allons bosser :

    Crée un fichier exo_modif_DOM.html contenant les éléments de base d'un fichier HTML (reprends ceux de l'exercice précédent si besoin).
    Pour le <body>, tu vas récupérer celui de cette page d'exemple Bootstrap. Copie-colle tout ce qu'il y a entre les balises <body> (et rien d'autre !).
    Supprime toutes balises <script> en bas du body (on utilisera notre propre JS).
    Rajoute un lien vers le CSS de Bootstrap dans ton <head> en copiant-collant le CDN de Bootstrap présent ici.
    Finalement, crée un fichier script_modif_DOM.js dans le même dossier que ton fichier HTML puis appelle-le en bas de ton <body> avec la balise <script> habituelle.

Et on est prêts !
Avant de se lancer…

On veut te filer quelques bonnes pratiques avant de te lancer :

    Quand tu cherches à modifier un élément, assure-toi d'abord que tu pointes bien dessus (quitte à l'imprimer en console). Ensuite seulement tu peux essayer de lui appliquer la modification. Si tu fais les 2 en même temps et que ça marche pas, tu ne sais pas quelle étape tu as raté : tu pointes vers un mauvais élément ? Ou bien c'est la fonction de modification qui est mal écrite ? Fais les choses pas à pas !
    Rappelle-toi que "si ça bogue, mets des console.log" ! Affiches tes variables, tes éléments HTML et confirment qu'ils ont les valeurs auxquelles tu t'attends.
    Rappelez-vous : de nombreuses fonctions pour parcourir le DOM renvoient des listes d'éléments (qui s'apparentent à des arrays). Et on ne peut pas appliquer une fonction de modification sur une liste : il faut l'appliquer sur un élément de cette liste (sinon on obtient une erreur). En gros, si tu fais document.getElementsByClassName("coucou").innerHTML = "salut" tu as une erreur. Il faut rajouter un [x] pour choisir un élément de la liste sur lequel appliquer la modification : document.getElementsByClassName("coucou")[0].innerHTML = "salut" ça marche.
    Les modifications demandées sont nombreuses ! Tu n'arriveras probablement pas à toutes les faire. Pas de panique ! Fais le maximum et surtout, pense à demander de l'aide.

Modification n°1

Écris une fonction changeTitles() qui va :

    Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
    Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"

Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.
Modification n°2

Ecris une fonction changeCallToActions() qui va:

    Changer le texte du bouton "Main call to action" en "OK je veux tester !"
    Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
    Changer le texte du bouton "Secondary action" en "Non Merci"
    Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"

Modification n°3

Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :

    Change "Album" par "The THP Experience" ;
    Change la taille du texte pour le passer en 2em.

Modification n°4

Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

Une petite boucle des familles va être utile ici.
Modification n°5

Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. Je donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de ne pas les lire.
Coups de main sur cette modif

Pour les lire, surligne le texte ci-dessous en le sélectionnant (c'est écrit blanc sur blanc 😏 )

    Attention si ta boucle supprime des éléments d'une liste : cela peut modifier les indices des éléments. Illustration : si tu supprimes le 7ème élément d'une liste de 9, l'élément numéro 8 passe alors au numéro 7 et le numéro 9 passe au numéro 8. Ça peut faire foirer ta boucle 🤭
    https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove 😘

Modification n°6

Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :

    Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
    Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
    Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."

Essaye de mettre ça dans une boucle.
Modification n°7

Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !
Modification n°8

Allez, on finit sur une modification un peu tordue :

    Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
    Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.

Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?).
3. Rendu attendu

Un repo GitHub par groupe de pair-programming contenant :

    Un HTML exo_parcours_DOM.html et son fichier JS script_parcours_DOM.js qui affiche en console, dès chargement, la réponse à toutes les questions ci-dessus.

    (Hésite pas à comparer tes résultats à ceux d'autres Mouss' sur le Slack !)
    Un HTML exo_modif_DOM.html et son fichier JS script_modif_DOM.js qui contient toutes les fonctions demandées et qui modifie la page HTML dès son chargement.

    (Hésite pas à partager une capture d'écran de ton site web (ou une version en PROD ?) pour comparer ton résultat avec celui des autres Mouss' du Slack.)

