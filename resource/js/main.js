$(document).ready(function () {
	memorySwiperFirst();
	memorySwiperSecond();
	memorySwiperThird();
});

function memorySwiperFirst() {


	let autoPlayDelay = 3000;

	let options = {
		//slidesPerView: "auto",
		spaceBetween: 15,
		// init: true,
		// // Optional parameters
		// loop: false,
		// // autoplay: {
		// // 	delay: autoPlayDelay
		// // },
		// //effect: 'fade',
		// observer: true,
		// observeParents: true,
		pagination: {
			el: '.photo-slot01 .swiper-pagination',
			clickable: true,
		},
	};

	let mySwiper = new Swiper('.memory-swiper01', options);

	
	



}
function memorySwiperSecond() {


	let autoPlayDelay = 3000;

	let options = {
		
		
		pagination: {
			el: '.photo-slot02 .swiper-pagination',
			clickable: true,
		},
	};

	let mySwiper2 = new Swiper('.memory-swiper02', options);

		
	
	
	



}

function memorySwiperThird() {


	let autoPlayDelay = 3000;

	let options = {
		
		
		pagination: {
			el: '.photo-slot03 .swiper-pagination',
			clickable: true,
		},
		observer: true,
		observeParents: true,
	};

	let mySwiper3 = new Swiper('.memory-swiper03', options);

		
	
	
	



}

