$(document).ready(function () {
	'use-stricts';

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

	// Get the navbar
	const navbar = document.querySelector('.navbar');

	// Get the offset position of the navbar
	const sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
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

	const products = [
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/1.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/2.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/3.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/4.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/5.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/6.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/7.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/8.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/9.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/10.jpg',
		},
		{
			title: 'Card Title',
			content: 'Some quick example text to build on the card title and make up',
			img: './images/products/11.jpg',
		},
	];

	function loadProducts(products, start = 0, end = 0) {
		let ourProduct = '';
		const arr = end > 0 ? products.slice(start, end) : products;
		for (const product of arr) {
			ourProduct += `
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 mt-4">
        <div class="card product" style="width: 18rem">
          <img src="${product.img}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.content}</p>
          </div>
        </div>
      </div>`;
		}
		return ourProduct;
	}

	const btnLoadMore = document.getElementById('btn-see-more-product');
	const containProducts = document.getElementById('our-product');

	containProducts.innerHTML = loadProducts(products, 0, 6);

	btnLoadMore.addEventListener('click', function () {
		containProducts.insertAdjacentHTML(
			'beforeend',
			loadProducts(products, 6, 11)
		);
		btnLoadMore.style.display = 'none';
	});
});
