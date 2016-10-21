
document.observe("dom:loaded", function() {
  $j("span.fa-blue").click(function(){
  	$j(this).closest('li').parent()
  	$j(this).closest('li').toggleClass('open-sub');
  })//depends on a div id.
});