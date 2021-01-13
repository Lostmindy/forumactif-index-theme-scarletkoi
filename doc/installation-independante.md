# Installation "indépendante" des éléments
Si vous souhaitez n'installer qu'un élément de ce thème indépendamment du reste, voici un petit guide en bonus. Pour ce qui est du CSS, aidez vous des commentaires (et des noms de classes) pour savoir ce que vous devez garder, j'ai marqué chaque section de manière aussi claire que possible.

## Le message de la page d'accueil

Outre le code [fourni ici](../misc/page-accueil.html), il y a quelques modifications à faire dans les templates de base de ModernBB.

Dans le template `index_body` : 
- trouvez le code qui commence par :
	```html
	<!-- BEGIN message_admin_index -->
	```
- et qui se termine par :
	```html
	<!-- END message_admin_index -->
	```

- Et remplacez le tout par ceci :
	```html
	<div class="sklmPAConteneur" id="bloc-pa">
	<!-- BEGIN message_admin_index -->
			<!-- BEGIN message_admin_titre -->
				<div class="sklmPA_titre">{message_admin_index.message_admin_titre.MES_TITRE}</div>
			<!-- END message_admin_titre -->

			<!-- BEGIN message_admin_txt -->
			<div class="sklmPA_contenu">
				{message_admin_index.message_admin_txt.MES_TXT}
			</div>
			<!-- END message_admin_txt -->
	<!-- END message_admin_index -->
	</div>
	```
Enregistrez vos modifications et validez le template.

Pour avoir cet affichage qui prend toute la largeur du forum, il faut également modifier le template `overall_header` :
- Trouvez la ligne suivante :
  ```html
  <div class="conteneur_minwidth_IE">
  ```
  Et **juste avant** rajoutez cette ligne :
  ```html
  <div id="js-recup-pa"><!-- La PA sera déplacée ici par Javascript --></div>
  ```
Comme indiqué, il faudra également installer le [script de déplacement du message d'accueil](../scripts/script_deplacement_pa.js).

## Les catégories
Remplacer votre template `index_box` par celui [fourni ici](../templates/index_box.html). Et c'est tout !

## Le Qui Est En Ligne (QEEL)

Pour utiliser ce QEEL sans le reste de l'index, commencez par remplacer votre template `overall_footer_begin` par celui [fourni ici](../templates/overall_footer_begin.html).

Vous devrez également éditer votre template `index_body` pour faire les modifications suivantes :

- Trouvez cette ligne :
	```html
	<!-- BEGIN disable_viewonline -->
	```
- Et trouvez cette ligne :
	```html
	<!-- END disable_viewonline -->
	```
- Supprimez ces deux lignes et **tout ce qui se trouve entre elles**.

Enfin, pour rappel, n'oubliez pas de remplacer le texte `URL_SCRIPT_ONGLETS_SUR_VOTRE_FORUM` dans le template `overall_footer_begin` par l'url du script des onglets. Vous trouverez les instructions à ce sujet dans le [guide d'installation](../README.md).
