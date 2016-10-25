
document.observe("dom:loaded", function() {
  $j("span.fa-blue").click(function(){
  	$j(this).closest('li').parent()
  	$j(this).closest('li').toggleClass('open-sub');
  });
	$j('#btn-account ,#header-account').hover(
  		function() {
  			$j('#header-account').css('display','block');
  		}, function() {
    		$j('#header-account').css('display','none');
  		}
	);
});

