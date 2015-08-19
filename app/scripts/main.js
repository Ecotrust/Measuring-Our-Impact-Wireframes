$(function () {
    $('#sidebar').affix({
          offset: {
            top: $('main').offset().top + 10
          }
    });

    MOI.init();

});


var MOI = {

    init: function(){
        MOI.mapToggler();
    },

    mapToggler: function () {
        //$('.map-panel').hide();

        $('.map-button').on('click', function(){
            $(this).parents('.panel')
                .toggleClass('panel-show-map')
                .find('.map-holder')
                .append( $('#main-map') );
        });
    }
}
