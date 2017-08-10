$(document).ready(function(){
  // declare vars
  var totalWidth = 0;
  var postions = new Array();

  $('#slides .slide').each(function(i){
    // get slider widths
    postions[i] = totalWidth;
    totalWidth += $(this).width();
    // check widths
    if(!$(this.width)){
      alert('Please add a width to your images');
      return false;
    }
  });
  // set width
  $('#slides').width(totalWidth);
  // menu iten click handler
  $('#menu ul li a').click(function(e, keepScroll){
    // remove active class and add inactive
    $('li.product').removeClass('active').addClass('inactive');

    // add active class to parent
    $(this).parent().addClass('active');

    var pos = $(this).parent().prevAll('.product').length;

    $('#slides').stop().animate({marginLeft:-postions[pos]+'px'}, 450);

    // prevent default
    e.preventDefault();
    // stop auto scroll
    if(!autoScroll) clearInterval(itvl);
  });

  // make first image active
  $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

  // auto scroll
  var current = 1;
  function autoScroll(){
    if(current == -1) return false;

    $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
    current++;
  }

  // duration for auto scroll
  var duration = 3;
  var itvl = setInterval(function(){autoScroll()}, duration*1000)
});
