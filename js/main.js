$(document).ready(function() {
  var url = "http://www.mec.ca/api/v1/shop/promotions";
  $.ajax({
  url: url,
  success: function(response) {
    for(var i=0; i<response.promotions.length; i++)
    {
      $("#promotions-list").append("<li><a href=\"" + response.promotions[i].web_url + "\">" + response.promotions[i].label + "</a></li><hr>");
      $("#promotion-thumbs").append("<td><a href=\"" + response.promotions[i].web_url + "\"><img src=\"" + response.promotions[i].image_url + "\"></a><br><a href=\"" + response.promotions[i].web_url + "\">" + response.promotions[i].label + "</a></td>");
    }
  },
  dataType: "json",
  });

  $(function() {
    $('#menu-icon').on('click', toggleNav);
    
    function toggleNav() {
      if ($('#site-wrapper').hasClass('show-nav')) {
          $('#site-wrapper').removeClass('show-nav');
      } else {
          $('#site-wrapper').addClass('show-nav');
      }
    }
  });

});