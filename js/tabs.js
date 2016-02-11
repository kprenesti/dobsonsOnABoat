$(document).ready(function(){
  //select the tab
  $('li.tab').on('click touchstart', function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    var panelId = "#" + $(this).attr('rel');
    var panelHTML = $(panelId).html();
    $('.tab-content').html(panelHTML);
  });


}); //end ready
