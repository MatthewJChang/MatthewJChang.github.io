$(document).ready(function(){
	
	$('#info-marist').hide();
	$('#info-cedarwood').hide();
	$('#info-princess').hide();
	$('#info-nizamiye').hide();

	$('#nizamiye').hover(function(){
		
		$('#info-marist').hide();
		$('#info-cedarwood').hide();
		$('#info-princess').hide();
		$('#info-nizamiye').show();
		$('#icon-nizamiye').css("height", '50px');
		$('#icon-nizamiye').css("width", '50px');

	})
	$('#marist').hover(function(){
		$('#info-marist').show();
		$('#info-cedarwood').hide();
		$('#info-princess').hide();
		$('#info-nizamiye').hide();
		$('#icon-marist').css("height", '50px');
		$('#icon-marist').css("width", '50px');

	})
	$('#cedarwood').hover(function(){
		$('#info-marist').hide();
		$('#info-cedarwood').show();
		$('#info-princess').hide();
		$('#info-nizamiye').hide();
		$('#icon-cedarwood').css("height", '50px');
		$('#icon-cedarwood').css("width", '50px');

	})
	$('#princess').hover(function(){
		$('#info-marist').hide();
		$('#info-cedarwood').hide();
		$('#info-princess').show();
		$('#info-nizamiye').hide();
		$('#icon-princess').css("height", '50px');
		$('#icon-princess').css("width", '50px');
	})

	$('#nizamiye').mouseleave(function(){
		
		$('#info-marist').hide();
		$('#info-cedarwood').hide();
		$('#info-princess').hide();
		$('#info-nizamiye').hide();
		$('#icon-nizamiye').css("height", '30px');
		$('#icon-nizamiye').css("width", '30px');
	})

	$('#marist').mouseleave(function(){
		$('#info-marist').hide();
		$('#info-cedarwood').hide();
		$('#info-princess').hide();
		$('#info-nizamiye').hide();
		$('#icon-marist').css("height", '30px');
		$('#icon-marist').css("width", '30px');
	})

	$('#cedarwood').mouseleave(function(){
		$('#info-marist').hide();
		$('#info-cedarwood').hide();
		$('#info-princess').hide();
		$('#info-nizamiye').hide();
		$('#icon-cedarwood').css("height", '30px');
		$('#icon-cedarwood').css("width", '30px');
	})

	$('#princess').mouseleave(function(){
		$('#info-marist').hide();
		$('#info-cedarwood').hide();
		$('#info-princess').hide();
		$('#info-nizamiye').hide();
		$('#icon-princess').css("height", '30px');
		$('#icon-princess').css("width", '30px');
	})
	
});