// AOS.init();

// $(function() {

// 	//Modal
// 	$(".modal").each( function(){
// 		$(this).wrap('<div class="modal__overlay"></div>')
// 	});

// 	$(".open-modal").on('click', function(e){
// 		e.preventDefault();
// 		e.stopImmediatePropagation;
// 		var $this = $(this),
// 		modal = $($this).data("modal");
// 		$(".modal").not(modal).removeClass("open");
// 		setTimeout( function(){
// 			$(".modal").not(modal).parents(".modal__overlay").removeClass("open");
// 			$("body").removeClass("nonescroll");
// 		}, 350);
// 		$(modal).parents(".modal__overlay").addClass("open");
// 		setTimeout( function(){
// 			$(modal).addClass("open");
// 			$("body").addClass("nonescroll");
// 		}, 350);

// 		$(document).on('click', function(e){
// 			var target = $(e.target);
// 			if ($(target).hasClass("modal__overlay")){
// 				$(target).find(".modal").each( function(){
// 					$(this).removeClass("open");
// 				});
// 				setTimeout( function(){
// 					$(target).removeClass("open");
// 					$("body").removeClass("nonescroll");
// 				}, 350);
// 			}
// 		});

// 	});

// 	$(".modal__close").on('click', function(e){
// 		e.preventDefault();
// 		e.stopImmediatePropagation;
// 		var $this = $(this),
// 		modal = $($this).data("modal");
// 		$(modal).removeClass("open");
// 		setTimeout( function(){	
// 			$(modal).parents(".modal__overlay").removeClass("open");
// 			$("body").removeClass("nonescroll");
// 		}, 350);

// 	});

// 	//Mask phone
// 	var telInp = $('input[type="tel"]');
// 	telInp.each(function(){
// 		$(this).mask("+7 (999) 999-99-99");
// 	});

// 	//Lang switcher
// 	$(".lang a").on("click",function(e){
// 		e.preventDefault();
		
// 		let lang = $(this).data("lang");

// 		if (lang == 'ru') {
// 			$(this).data("lang", 'eng');
// 			$(this).text('eng');
// 			$("html").attr("lang",'eng');
// 		} else {
// 			$(this).data("lang", 'ru');
// 			$(this).text('ru');
// 			$("html").attr("lang",'ru');
// 		}
// 	});

// 	//Vacancy Value
// 	$(".vacancy__list-link").on("click",function(e){
// 		e.preventDefault();
		
// 		let vacancyVal = $(this).data('vacancy');

// 		$('.input-vacancy').val(vacancyVal);
// 	});

// 	//Order button show
// 	$('.form__input').on('keyup',function(){
// 		valName = $('.input-name').val();
// 		valPhone = $('.input-phone').val();

// 		if(valName.length >= 1 && valPhone.length >= 1){
// 			$('.order__head-hidden').addClass('active');
// 		}else {
// 			$('.order__head-hidden').removeClass('active');
// 		}
// 	});

// 	//Validate Password show
// 	$('.input-password').on('keyup',function(){
// 		if($(this).val().length >= 1){
// 			$('.modal__btn').removeClass('disabled');
// 		}else {
// 			$('.modal__btn').addClass('disabled');
// 		}
// 	});

// 	//Validate Password Error Test
// 	$('.modal__btn').on('click',function(e){
// 		e.preventDefault();
// 		$('.modal__form-item').addClass('error');
// 	});

// 	//Tabs
// 	$('.tab-js').click(function(event){
// 		event.preventDefault();
// 		if(!$(this).hasClass('active')){
// 			$('.tab-js').removeClass('active');
// 			$(this).toggleClass("active");
// 			$('.tab-content-js').hide();
// 			var href = $(this).attr('href');
// 			$(href).fadeIn();
// 		}
// 	});

// 	//Range Slder Value
// 	$('.form__range-input').on('input', function() {
// 		var val = $(this).val();
// 		var min = $(this).attr('min');
// 		var max = $(this).attr('max');
// 		var portion = (val - min) / (max - min);
// 		$('.form__range-number span').text(val);
// 	});

// 	//Footer accordeon mobile
// 	if ($(window).width() < '1025'){
// 		$(".footer__link-title").on("click", function(event) {
// 			$(this).toggleClass('active');
// 			$(this).next().slideToggle(250);
// 		});
// 	}

// 	//Sending a request Test
// 	$("#form-vacancy").submit(function(event) {
// 		// $.ajax({
// 		// 	type: "POST",
// 		// 	url: "assets/php/post-modal.php",
// 		// 	data: $(this).serialize()
// 		// }).done(function() { 
// 		// 	$(".modal__massage").addClass("active").css('display', 'flex').hide().fadeIn(); 
// 		// 	setTimeout(function(){ 
// 		// 		jQuery("#form__modal").trigger("reset"); 
// 		// 		$(".modal__massage").removeClass('active').fadeOut(); 
// 		// 	}, 3000); 
// 		// });
// 		// return false;
// 		event.preventDefault();
// 		$(".massage").addClass("active").css('display', 'flex').hide().fadeIn(); 
// 		setTimeout(function(){ 
// 			jQuery("#form-vacancy").trigger("reset"); 
// 			$(".massage").removeClass('active').fadeOut(); 
// 		}, 3000); 
// 	});

// 	//Gallary
// 	$('[data-fancybox]').fancybox({
// 		animationEffect : "fade"
// 	});

// 	//Filtering works
// 	$('.works-js').isotope({
// 		itemSelector: '.works__item-js'
// 	});

// 	$('.works__category a').click(function(){
// 		$('.works__category a').removeClass('active');
// 		$(this).addClass('active');
// 		var selector = $(this).attr('data-filter');

// 		$('.works-js').isotope({
// 			filter: selector,
// 			animationOptions: {
// 				duration: 1000,
// 				easing: 'easeOutQuart',
// 				queue: false
// 			}
// 		});
// 		return false;
// 	});

// 	$('.slider__development-inner').slick({
// 		arrows: false,
// 		dots: true
// 	})
// });


// 	//Hover development




// $('.not-hover__item').on({
// 	mouseenter: function() {
// 		$(this).closest('.sites__inner-item--hover').css({'opacity' : '0', 'visibility':'hidden'});
// 	},
// 	mouseleave: function() {
// 		$(this).closest('.sites__inner-item--hover').removeAttr( 'style' );
// 	}
// },);

$(function() {

	//Modal
	$(".modal").each( function(){
		$(this).wrap('<div class="modal__overlay"></div>')
	});

	$(".open-modal").on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation;
		var $this = $(this),
		modal = $($this).data("modal");
		$(".modal").not(modal).removeClass("open");
		setTimeout( function(){
			$(".modal").not(modal).parents(".modal__overlay").removeClass("open");
			$("body").removeClass("nonescroll");
		}, 350);
		$(modal).parents(".modal__overlay").addClass("open");
		setTimeout( function(){
			$(modal).addClass("open");
			$("body").addClass("nonescroll");
		}, 350);

		$(document).on('click', function(e){
			var target = $(e.target);
			if ($(target).hasClass("modal__overlay")){
				$(target).find(".modal").each( function(){
					$(this).removeClass("open");
				});
				setTimeout( function(){
					$(target).removeClass("open");
					$("body").removeClass("nonescroll");
				}, 350);
			}
		});

	});

	$(".modal__close").on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation;
		var $this = $(this),
		modal = $($this).data("modal");
		$(modal).removeClass("open");
		setTimeout( function(){
			$(modal).parents(".modal__overlay").removeClass("open");
			$("body").removeClass("nonescroll");
		}, 350);

	});

	//Mask phone
	var telInp = $('input[type="tel"]');
	telInp.each(function(){
		$(this).mask("+7 (999) 999-99-99");
	});

	//Lang switcher
	$(".lang a").on("click",function(e){
		e.preventDefault();

		let lang = $(this).data("lang");

		if (lang == 'ru') {
			$(this).data("lang", 'eng');
			$(this).text('eng');
			$("html").attr("lang",'eng');
		} else {
			$(this).data("lang", 'ru');
			$(this).text('ru');
			$("html").attr("lang",'ru');
		}
	});

	//Vacancy Value
	$(".vacancy__list-link").on("click",function(e){
		e.preventDefault();

		let vacancyVal = $(this).data('vacancy');

		$('.input-vacancy').val(vacancyVal);
	});

	//Order button show
	$('.form__input').on('keyup',function(){
		valName = $('.input-name').val();
		valPhone = $('.input-phone').val();

		if(valName.length >= 1 && valPhone.length >= 1){
			$('.order__head-hidden').addClass('active');
		}else {
			$('.order__head-hidden').removeClass('active');
		}
	});

	//Validate Password show
	$('.input-password').on('keyup',function(){
		if($(this).val().length >= 1){
			$('.modal__btn').removeClass('disabled');
		}else {
			$('.modal__btn').addClass('disabled');
		}
	});

	//Validate Password Error Test
	$('.modal__btn').on('click',function(e){
		e.preventDefault();
		$('.modal__form-item').addClass('error');
	});

	//Tabs
	$('.tab-js').click(function(event){
		event.preventDefault();
		if(!$(this).hasClass('active')){
			$('.tab-js').removeClass('active');
			$(this).toggleClass("active");
			$('.tab-content-js').hide();
			var href = $(this).attr('href');
			$(href).fadeIn();
		}
	});

	//Range Slder Value
	$('.form__range-input').on('input', function() {
		var val = $(this).val();
		var min = $(this).attr('min');
		var max = $(this).attr('max');
		var portion = (val - min) / (max - min);
		$('.form__range-number span').text(val);
	});

	//Footer accordeon mobile
	if ($(window).width() < '1025'){
		$(".footer__link-title").on("click", function(event) {
			$(this).toggleClass('active');
			$(this).next().slideToggle(250);
		});
	}

	//Sending a request Test
	$("#form-vacancy").submit(function(event) {
		// $.ajax({
		// 	type: "POST",
		// 	url: "assets/php/post-modal.php",
		// 	data: $(this).serialize()
		// }).done(function() {
		// 	$(".modal__massage").addClass("active").css('display', 'flex').hide().fadeIn();
		// 	setTimeout(function(){
		// 		jQuery("#form__modal").trigger("reset");
		// 		$(".modal__massage").removeClass('active').fadeOut();
		// 	}, 3000);
		// });
		// return false;
		event.preventDefault();
		$(".massage").addClass("active").css('display', 'flex').hide().fadeIn();
		setTimeout(function(){
			jQuery("#form-vacancy").trigger("reset");
			$(".massage").removeClass('active').fadeOut();
		}, 3000);
	});

	//Gallary
	$('[data-fancybox]').fancybox({
		animationEffect : "fade"
	});

	//Filtering works
	$('.works-js').isotope({
		itemSelector: '.works__item-js'
	});

	$('.works__category a').click(function(){
		$('.works__category a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');

		$('.works-js').isotope({
			filter: selector,
			animationOptions: {
				duration: 1000,
				easing: 'easeOutQuart',
				queue: false
			}
		});
		return false;
	});

	$('.slider__development-inner').slick({
		arrows: false,
		dots: true
	})
});


	//Hover development





let unlock = true;

//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}

function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}

function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}


//Добавление класса lock для body при открытии меню=====================================================================
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('_lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("_lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
		document.documentElement.classList.add("_lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}

//Добавление класса бургеру===================================================================================
let iconMenu = document.querySelector(".header__mmenu");
const menuBody = document.querySelector('.header__menu');
const headerInner = document.querySelector('.header__inner');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock();
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
			headerInner.classList.toggle('_active');
		}
	});
}
//Прокрутка по клику и закрытие меню============================================================================
const menuLinks = document.querySelectorAll('._link[data-link]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.link && document.querySelector(menuLink.dataset.link)) {
			const linkBlock = document.querySelector(menuLink.dataset.link);
			const linkBlockValue = linkBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			if (iconMenu.classList.contains('_active')) {
				if (unlock) {
					body_lock();
					iconMenu.classList.toggle('_active');
					menuBody.classList.toggle('_active');
					headerInner.classList.toggle('_active');
				}
			}
			// window.scrollTo({
			// 	top: linkBlockValue,
			// 	behavior: "smooth"
			// });
			e.preventDefault();
		}
	}
}
$(window).resize(function () {
	var windowWidth = $(window).width();
	if (windowWidth > 768) $("body").removeClass("_lock");
});





// document.addEventListener('DOMContentLoaded', () => {
// 	const hero = document.querySelector('.hero');
// 	const header = document.querySelector('.header');
// 	const scrollItems = document.querySelectorAll('.scroll-item');

// 	const scrollAnimation = () => {
// 		let windowCenter = (window.innerHeight / 1) + window.scrollY;
// 		console.log(windowCenter)
// 		scrollItems.forEach(el => {
// 			let scrollOffset = el.offsetTop + (el.offsetHeight / 1);
// 			if (windowCenter >= scrollOffset) {
// 				el.classList.add('animation-class');
// 			} else {
// 				el.classList.remove('animation-class');
// 			}
// 		});
// 	};

// 	const headerFixed = () => {
// 		let scrollTop = window.scrollY;
// 		let heroCenter = hero.offsetHeight / 1;

// 		if (scrollTop >= heroCenter) {
// 			header.classList.add('fixed')
// 			hero.style.marginTop = `${header.offsetHeight}px`;
// 		} else {
// 			header.classList.remove('fixed')
// 			hero.style.marginTop = `0px`;
// 		}
// 	};

// 	headerFixed();
// 	scrollAnimation();
// 	window.addEventListener('scroll', () => {
// 		headerFixed();
// 		scrollAnimation();
// 	});
// });












$('.not-hover__item').on({
	mouseenter: function() {
		$(this).closest('.sites__inner-item--hover').css({'opacity' : '0', 'visibility':'hidden'});
	},
	mouseleave: function() {
		$(this).closest('.sites__inner-item--hover').removeAttr( 'style' );
	}
},);
