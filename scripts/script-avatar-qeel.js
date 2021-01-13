/* Affichage de l'avatar du dernier membre inscrit dans le QEEL */
$(function(){

    /* On teste si l'information du dernier inscrit est visible sur la page */
    if( $('#id_js_derniermembre').length ){

        var $newestUser = $('#id_js_derniermembre'),

        // Dans ce cas, on va récupérer l'url vers le profil du dernier inscrit
            urlNewestUser = $newestUser.find('a').attr('href'),
        // Et son pseudo (gaffe à l'ordre des balises)
            pseudoNewestUser = $newestUser.find('strong > a').text();

        // on va récupérer l'avatar sur la page du profil utilisateur et on l'insère dans l'élément html souhaité
        $('#id_js_derniermembre_avatar').load('' + urlNewestUser +' img[alt="'+ pseudoNewestUser +'"]');

    }
});