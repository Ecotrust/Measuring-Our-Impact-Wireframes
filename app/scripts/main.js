var MOI = {

    indicatorsPageInit: function(){
        MOI.mapToggler();
        MOI.footerToggler();
        MOI.countySelect();

            MOI.setUpSidebars();
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
    },

    countySelect: function() {
        $('#sd-select').selectize({
            //sortField: 'text',
            //closeAfterSelect: true
        });
    },

    setUpSidebars: function() {
        $('#sidebar').affix({
              offset: {
                top: $('main').offset().top + 10
              }
        });

        $('body').scrollspy({
            target: '#side-nav',
            offset: 150
        });
    }
};

$(function () {

    if ( $('body').is('.page-indicators') ) {
        MOI.indicatorsPageInit();
    }

});
