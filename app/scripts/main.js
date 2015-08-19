var MOI = {

    init: function(){
        MOI.mapToggler();
        MOI.footerToggler();
    },

    mapToggler: function () {
        //$('.map-panel').hide();

        $('.map-button').on('click', function(){
            $(this).parents('.panel')
                .toggleClass('panel-show-map')
                .find('.map-holder')
                .append( $('#main-map') );
        });
    },

    footerToggler: function() {
        $('a.reference').on('click', function() {
            $(this).next('div').slideToggle();
            return false;
        });
    }
};

$(function () {
    $('#sidebar').affix({
          offset: {
            top: $('main').offset().top + 10
          }
    });

    MOI.init();

});
