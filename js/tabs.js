$(document).ready(function(){

    $('.allTabs .tab').on('click touchstart', function(){
      var panelToShow = $(this).attr('rel');
      $('.tab.active').removeClass('active');
      $(this).addClass('active');
      $('.panel.active').removeClass('active');      $('#'+panelToShow).addClass('active');
    }); //end click

}); //end ready
