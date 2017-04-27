$(document).ready(function(){
	
	$('#info-lavieenrose').hide();
	$('#info-fishandchips').hide();
	$('#info-wimpy').hide();
	$('#info-cafedesol').hide();

	$('#cafedesol').hover(function(){
		
		$('#info-lavieenrose').hide();
		$('#info-fishandchips').hide();
		$('#info-wimpy').hide();
		$('#info-cafedesol').show();
		$('#icon-cafedesol').css("height", '50px');
		$('#icon-cafedesol').css("width", '50px');

	})
	$('#lavieenrose').hover(function(){
		$('#info-lavieenrose').show();
		$('#info-fishandchips').hide();
		$('#info-wimpy').hide();
		$('#info-cafedesol').hide();
		$('#icon-lavieenrose').css("height", '50px');
		$('#icon-lavieenrose').css("width", '50px');

	})
	$('#fishandchips').hover(function(){
		$('#info-lavieenrose').hide();
		$('#info-fishandchips').show();
		$('#info-wimpy').hide();
		$('#info-cafedesol').hide();
		$('#icon-fishandchips').css("height", '50px');
		$('#icon-fishandchips').css("width", '50px');

	})
	$('#wimpy').hover(function(){
		$('#info-lavieenrose').hide();
		$('#info-fishandchips').hide();
		$('#info-wimpy').show();
		$('#info-cafedesol').hide();
		$('#icon-wimpy').css("height", '50px');
		$('#icon-wimpy').css("width", '50px');
	})

	$('#cafedesol').mouseleave(function(){
		
		$('#info-lavieenrose').hide();
		$('#info-fishandchips').hide();
		$('#info-wimpy').hide();
		$('#info-cafedesol').hide();
		$('#icon-cafedesol').css("height", '30px');
		$('#icon-cafedesol').css("width", '30px');
	})

	$('#lavieenrose').mouseleave(function(){
		$('#info-lavieenrose').hide();
		$('#info-fishandchips').hide();
		$('#info-wimpy').hide();
		$('#info-cafedesol').hide();
		$('#icon-lavieenrose').css("height", '30px');
		$('#icon-lavieenrose').css("width", '30px');
	})

	$('#fishandchips').mouseleave(function(){
		$('#info-lavieenrose').hide();
		$('#info-fishandchips').hide();
		$('#info-wimpy').hide();
		$('#info-cafedesol').hide();
		$('#icon-fishandchips').css("height", '30px');
		$('#icon-fishandchips').css("width", '30px');
	})

	$('#wimpy').mouseleave(function(){
		$('#info-lavieenrose').hide();
		$('#info-fishandchips').hide();
		$('#info-wimpy').hide();
		$('#info-cafedesol').hide();
		$('#icon-wimpy').css("height", '30px');
		$('#icon-wimpy').css("width", '30px');
	})
	
});