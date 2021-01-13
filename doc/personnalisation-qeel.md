# Personnalisation du code du QEEL

## En général
Contrairement aux sections "Qui est en ligne" habituelles, vous trouverez le code du QEEL proprement dit dans le template `overall_footer_begin`. 

## Remarques de personnalisation

Notez que par commodité je n'ai pas touché aux éléments par défaut du thème de base, et qu'à la suite du QEEL par défaut de ModernBB (qui se trouve dans le template `index_body`), on trouve d'autres éléments (notez les BEGIN/END, j'essaie juste d'éviter d'écrire deux fois la même chose, mais c'est bien `<!-- BEGIN nomdelaboucle -->` et `<!-- END nomdelaboucle -->` à chaque fois) :
- `{CHATBOX_BOTTOM}` qui affiche la chatbox si vous avez demandé son affichage en pied de page dans Modules → Chatbox → Configuration → Affichage de la chatbox.
- `<!-- BEGIN/END switch_user_login_form_footer -->` qui gère l'affichage de la boite de connexion rapide si vous avez autorisé son affichage dans Affichage → Page d'accueil → Généralités → Affichage de la connexion rapide.
- `<!-- BEGIN/END switch_legend -->`  qui gère l'affichage de la légende des icones, que vous pouvez régler dans Général → Messages et Emails → Configuration → Afficher la légende des statuts des messages.
C'est à vous de décider de l'affichage ou non de ces éléments, et leur apparence n'a pas été personnalisée. Par défaut, je recommande donc de ne pas les afficher, mais si vous y tenez, vous savez où ils sont, plus qu'à mettre les mains dans le cambouis !

## Modifier la liste des partenaires

Trouvez la zone marquée par les commentaires `<!-- DEBUT/FIN: LISTE DES PARTENAIRES -->`. Chaque lien vers un partenaire se trouve entre les balises de liste `<li>` et `</li>` sous la forme suivante :  
```html
<li><a href="URL_DU_PARTENAIRE" target="_blank"><img src="URL_IMAGE_BOUTON_PARTENAIRE" alt="Nom Partenaire" title="Description partenaire"></a></li>
```
En principe c'est assez simple, vous n'avez qu'à modifier le contenu des différents attributs pour chaque lien. Pensez à modifier les valeurs des attributs `alt` et `title`, beaucoup trop de gens les snobbent alors qu'ils sont importants ! ;) (Le `target="_blank"` sert à ouvrir une nouvelle fenêtre quand on clique sur le lien)


## Ajouter l'affichage de la légende des groupes

L'affichage des groupes du forum est géré par la PA de ce thème. Si d'aventure vous n'utilisez pas cette PA, vous pouvez rajouter la légende des groupes dans le QEEL.

Cherchez la ligne suivante :
```html
<div class="sklmQeelPartenaires">
```
Et juste AVANT, rajoutez ceci :

```html
        <div class="sklmQeel_groupes">
            <h2 class="sklmQeel_h1 sklmQeel_groupes-titre">Groupes</h2>
            <div class="sklmQeel_groupes-liste">
                {GROUP_LEGEND}
            </div>
        </div>
```

Et dans le CSS concernant la partie du QEEL, rajoutez ces lignes :
```css
.sklmQeel_groupes-liste {
  font-size: 0;
  display: flex;
  justify-content: space-evenly;
}

.sklmQeel_groupes-liste a {
  font-size: 2rem;
  display: inline-block;
  padding: 5px;
}
```