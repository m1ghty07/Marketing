'use strict';

$(document).ready(function () {
	$('.slider__inner').slick({
		dots: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
				},
			},
		],
	});
});

const filter = document.querySelector('.portfolio__filter');
const portfolioItems = document.querySelectorAll('.portfolio__item');

filter.addEventListener('click', e => {
	const btns = filter.querySelectorAll('.portfolio___btn');
	if (!e.target.classList.contains('portfolio___btn')) return;

	if (e.target && e.target.classList.contains('portfolio___btn')) {
		btns.forEach(btn => btn.classList.remove('active'));
	}
	e.target.classList.add('active');
	const category = e.target.dataset.category;

	portfolioItems.forEach(item => {
		item.classList.remove('hide');
		if (item.dataset.category !== category) {
			item.classList.add('hide');
		}

		if (category === '0') {
			item.classList.remove('hide');
		}
	});
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('active');
	menuBtn.classList.toggle('opened');
});
