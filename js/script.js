$(document).ready(function () {
	const listAnimations = [
		document.querySelector('#img-introduct-1'),
		document.querySelector('#img-introduct-2'),
		document.querySelector('#our-product'),
		document.querySelector('#testimonial-1'),
		document.querySelector('#testimonial-2'),
		document.querySelector('#testimonial-text-1'),
		document.querySelector('#testimonial-text-2'),
	];

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const id = entry.target.id;
			if (id === 'img-introduct-1' && entry.isIntersecting) {
				entry.target.classList.add('flip-top');
			}
			if (id === 'img-introduct-2' && entry.isIntersecting) {
				entry.target.classList.add('flip-bottom');
			}
			if (id === 'our-product' && entry.isIntersecting) {
				entry.target.classList.add('flash-bang');
			}
			if (id === 'testimonial-1' && entry.isIntersecting) {
				entry.target.classList.add('flip-left');
			}
			if (id === 'testimonial-2' && entry.isIntersecting) {
				entry.target.classList.add('flip-left');
			}
			if (id === 'testimonial-text-1' && entry.isIntersecting) {
				entry.target.classList.add('flip-right');
			}
			if (id === 'testimonial-text-2' && entry.isIntersecting) {
				entry.target.classList.add('flip-right');
			}
		});
	});
	listAnimations.map((selector) => {
		observer.observe(selector);
	});

	const navbar = document.querySelector('.navbar');
	const sticky = navbar.offsetTop;

	function navbarSticky() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	}

	function scrollToSection(selcted, section) {
		$(selcted).click(function (e) {
			e.preventDefault();
			$('html, body').animate(
				{
					scrollTop: $(section).offset().top - 120,
				},
				2000
			);
		});
	}

	scrollToSection('#introduct', '#section-introduct');
	scrollToSection('#product', '#section-product');
	scrollToSection('#project', '#section-project');
	scrollToSection('#testimonials', '#section-testimonials');

	const scrollToTop = document.getElementById('scroll-to-top');

	scrollToTop.addEventListener('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
	document.getElementById('contact').addEventListener('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: document.body.scrollHeight }, 'slow');
	});

	window.onscroll = function () {
		if ($(document).scrollTop() > 700) {
			scrollToTop.classList.add('show');
		} else {
			scrollToTop.classList.remove('show');
		}
		navbarSticky();
	};

	new Swiper('.swiper-container', {
		speed: 600,
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
