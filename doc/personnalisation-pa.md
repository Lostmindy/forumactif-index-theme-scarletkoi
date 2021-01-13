# Personnalisation du code du message de la page d'accueil (PA)

En principe, si vous vous débrouillez relativement bien avec les bases du code, entre les commentaires et le nom des classes CSS, vous devriez pouvoir vous en sortir, mais au cas où voici quelques informations qui pourraient vous aider. 

## Généralités 

- La classe `.sklm_hidden` sert à cacher par défaut certains contenus, en particulier les titres des différentes sections. Ils sont là pour s'y repérer, et également pour (vaguement) faciliter la lecture aux potentiels lecteurs d'écrans automatiques.  
- A la base ce thème était un exercice de code basé sur une maquette de Sygea, qui suggérait d'en profiter pour s'entrainer avec flexbox. Du coup, lorsque l'écran n'est plus assez large pour elle, cette PA tient sur deux lignes. Ce n'est pas un bug !  
- La plupart des éléments de cette page d'accueil sont sous forme de liste HTML, qui, pour rappel, doivent respecter cette forme : 
    ```html
    <ul>
        <li>Un item de liste</li>
        <li>Un autre item de liste</li>
        <li>Un troisième item de liste</li>
    </ul>
    ```
    Pour vos modifications, le texte se met entre les balises `<li>` et `</li>`, et pas en dehors. Attention à ne pas retirer de balises !
- J'ai mis des commentaires en mode DEBUT et FIN pour vous aider à vous y retrouver.  
- Petite astuce quand vous rajoutez des liens internes à votre forum, vous n'avez pas besoin de mettre l'url complète de votre forum, vous pouvez juste mettre la partie `/t1287-nom-du-topic` de l'URL. Il faut juste ne pas oublier le `/` de départ. Il est même possible de raccourcir à `/t1287-` (avec le tiret, oui) mais c'est potentiellement moins clair à la relecture.

## Le menu de navigation

Ce n'est pas trop difficile à repérer, c'est cette partie :
```html
<!-- DEBUT: MENU DE NAVIGATION -->
<ul class="sklmPA_navBloc">
    <li><a href="#">Règlement</a></li>
    <li><a href="#">Annexes</a></li>
    <li><a href="#">Prédéfinis</a></li>
    <li><a href="#">Guide du forum</a></li>
    <li><a href="#">Partenariats</a></li>
</ul>
<!-- FIN: MENU DE NAVIGATION -->
```
Remplacez les symboles `#` par les liens de votre choix. 

**Note :** Évitez d'avoir plus de cinq liens, le code n'a pas été prévu pour.

## La liste des membre du staff
Il s'agit d'une liste HTML, chaque membre du staff étant un élément de cette liste, sous cette forme :

```html
<!-- DEBUT: BLOC STAFF X -->
<li class="sklmPA_staffItem">
    <img src="URL_IMAGE_STAFF" alt="RANG DU STAFF : PSEUDO DU STAFF">
    <div class="sklmPA_staffInfo">
        <strong>PSEUDO DU STAFF</strong>
        <br /> 
        RANG DU STAFF (modo, admin, mj...)
        <br /> 
        <a href="URL_MP_DU_STAFF"><img src="https://i.goopics.net/N90K7.png" alt="MP" title="Envoyer un message privé" /></a>
    </div>
</li>
<!-- FIN: BLOC STAFF X -->
```
Le texte en majuscules est ce qu'il faut personnaliser (sauf les commentaires). Il va sans dire que quand il y a écrit "STAFF" dans ce bout de code, ça veut dire "membre du staff".

Il est possible de raccourcir les liens des MPs sous la forme `/privmsg?mode=post&u=XXX` avec `XXX` l'identifiant du membre concerné.

## La liste des groupes

Il s'agit de cette section dans le code. 
```html
<!-- DEBUT: LISTE DES GROUPES -->
<ul class="sklmPA_groupesList">
    <li class="sklm_gr1"><strong>X</strong> NomDuGroupe</li>
    <li class="sklm_gr2"><strong>X</strong> NomDuGroupe</li>
    <li class="sklm_gr3"><strong>X</strong> NomDuGroupe</li>
    <li class="sklm_gr4"><strong>X</strong> NomDuGroupe</li>
    <li class="sklm_gr5"><strong>X</strong> NomDuGroupe</li>
    <li class="sklm_gr6"><strong>X</strong> NomDuGroupe</li>
</ul>
<!-- FIN: LISTE DES GROUPES -->
```
Chaque groupe est présenté sous cette forme :
```html
<li class="sklm_grX"><strong>Nombre de membres</strong> Nom Du Groupe</li>
```
Les classes `.sklm_gr1` à `.sklm_gr6` servent à colorer le fond sous le nombre de membres d'un groupe. Référez-vous en au code CSS si vous avez besoin de rajouter ou supprimer un groupe (et donc une classe associée).

Si vous souhaitez ajouter des liens sur les noms de groupes, procédez de cette façon pour un groupe :

```html
<li class="sklm_grX"><a href="URL_GROUPE"><strong>X</strong> NomDuGroupe</a></li>
```


## La liste des évènements / nouveautés
Encore une liste, plutôt basique. Vous pouvez naturellement allonger la description des events ou mettre du texte en gras ou des liens.
```html
<!-- DEBUT: LISTE DES EVENTS/NEWS -->
<ul class="sklmPA_eventsList sklmScrollbar">
    <li>01/01/2020 - Dernier event !</li>
    <li>01/01/2020 - Dernier event !</li>
    <li>01/01/2020 - Dernier event !</li>
    <li>01/01/2020 - Dernier event !</li>
    <li>.... etc.</li>
</ul>
<!-- FIN: LISTE DES EVENTS/NEWS -->
```

## La liste des prédéfinis

Ce sont les quatre images circulaires à côté de la liste des nouveautés, leur affichage se fait avec le code suivant :

```html
<!-- DEBUT: LISTE DES PREDEFINIS -->
<ul class="sklmPA_predefsList">
    <li>
        <a href="URL_FICHE_PREDEF"><img src="URL_IMAGE_50x50" alt="Nom du personnage" title="Nom du personnage" /></a>
    </li>
    <li>
        <a href="URL_FICHE_PREDEF"><img src="URL_IMAGE_50x50" alt="Nom du personnage" title="Nom du personnage" /></a>
    </li>
    <li>
        <a href="URL_FICHE_PREDEF"><img src="URL_IMAGE_50x50" alt="Nom du personnage" title="Nom du personnage" /></a>
    </li>
    <li>
        <a href="URL_FICHE_PREDEF"><img src="URL_IMAGE_50x50" alt="Nom du personnage" title="Nom du personnage" /></a>
    </li>
</ul>
<!-- FIN: LISTE DES PREDEFINIS -->
```
Pour chaque personnage, nous n'avez qu'à changer l'url qui mène vers sa fiche (marquée `URL_FICHE_PREDEF` dans le code ci-dessus) et le lien de l'image 50x50 (marqué `URL_IMAGE_50x50`).

## La liste des top partenaires

Repérez la zone balisée par les commentaires `<!-- DEBUT/FIN: LISTE DES PARTENAIRES -->` dans le code du message d'accueil. Chaque lien vers un partenaire se trouve entre les balises de liste `<li>` et `</li>` sous la forme suivante :  
```html
<a href="URL_LIEN_DU_PARTENAIRE" target="_blank"><img src="URL_IMAGE_DU_PARTENAIRE" alt="Nom Partenaire" title="courte descrption partenaire" /></a>
```

Vous pouvez ajouter autant de partenaires que vous le souhaitez. N'oubliez juste pas les balises de liste !

## La liste des tops

Repérez la zone balisée par les commentaires `<!-- DEBUT/FIN: LISTE DES TOPS -->` dans le code du message d'accueil. Chaque lien vers un top-site se trouve entre les balises de liste `<li>` et `</li>` sous la forme suivante :  
```html
<a href="URL_DU_TOPSITE" target="_blank"><img src="URL_IMAGE_BOUTON_TOPSITE" alt="Nom Topsite" title="Votez sur le top-site !" /></a>
```
Vous pouvez ajouter autant de liens de top-sites que vous le souhaitez. N'oubliez juste pas les balises de liste ! 

(Une impression de déjà-lu ? Allons donc, qu'allez vous imaginer.)