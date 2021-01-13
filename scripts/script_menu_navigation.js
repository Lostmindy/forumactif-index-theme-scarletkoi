$(document).ready(function() {
    /* déplacer Login/Logout et Inscription en fin de barre de nav */
    var navbar = $('.sklmNavbar ul');
    var login = $('.sklmNavbar a.mainmenu[href^="/login"]');
    var register = $('.sklmNavbar a.mainmenu[href^="/register"]');
    if (register.length) {
        register.closest('li').addClass("register_item").appendTo(navbar);
    };
    if (login.length) {
        login.closest('li').addClass("login_item").appendTo(navbar);
    };

    /* On retire le mini menu sur le bouton de recherche histoire qu'il soit cliquable */
    var search =  $('.sklmNavbar a.mainmenu[href^="/search"]');
    search.prop("onclick", null);

    /* On deplace le bouton Notifications */
    $(function(){
        $('a#fa_notifications').appendTo('#sklmNav_notifs');
    });

});