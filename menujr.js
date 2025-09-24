$(document).ready(function () {
	$('.menujq > ul').addClass('nav-list') // # <-- main ul
	$('.menujq > ul > li:has(ul)').addClass('desplegable') // # <-- fisrt child
	$('.menujq > ul > li:has(ul) > ul').addClass('inner-lvl-1') // # <-- second child
	$('.menujq > ul > li:has(ul) > ul > li:has(ul)').addClass('inner-lvl-2') // # <-- third child
	$('.menujq > ul > li > a').click(function () {
		var comprobar = $(this).next()
		$('.menujq li').removeClass('active')
		$(this).closest('li').addClass('active')
		if (comprobar.is('ul') && comprobar.is(':visible')) {
			$(this).closest('li').removeClass('active')
			comprobar.slideUp('normal')
		}
		if (comprobar.is('ul') && !comprobar.is(':visible')) {
			$('.menujq ul ul:visible').slideUp('normal')
			comprobar.slideDown('normal')
		}
	})
	$('.menujq > ul > li > ul > li:has(ul)').addClass('desplegable')
	$('.menujq > ul > li > ul > li > a').click(function () {
		var comprobar = $(this).next()
		$('.menujq ul ul li').removeClass('active')
		$(this).closest('ul ul li').addClass('active')
		if (comprobar.is('ul ul') && comprobar.is(':visible')) {
			$(this).closest('ul ul li').removeClass('active')
			comprobar.slideUp('normal')
		}
		if (comprobar.is('ul ul') && !comprobar.is(':visible')) {
			$('.menujq ul ul ul:visible').slideUp('normal')
			comprobar.slideDown('normal')
		}
	})
	$('.menujq > ul > li > ul > li > ul > li:has(ul)').addClass('desplegable')
	$('.menujq > ul > li > ul > li > ul > li > a').click(function () {
		var comprobar = $(this).next()
		$('.menujq ul ul ul ul li').removeClass('active')
		$(this).closest('ul ul ul ul li').addClass('active')
		if (comprobar.is('ul ul ul') && comprobar.is(':visible')) {
			$(this).closest('ul ul ul ul li').removeClass('active')
			comprobar.slideUp('normal')
		}
		if (comprobar.is('ul ul ul') && !comprobar.is(':visible')) {
			$('.menujq ul ul ul ul:visible').slideUp('normal')
			comprobar.slideDown('normal')
		}
	})
})
