<template>
	<header>
		<main-navbar />
		<slides />
	</header>

	<main>
		<!-- Outfits favs -->
		<section class="flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:my-20">
			<div class="flex flex-col items-center text-center md:mx-5 lg:mx-20 bg-white order-2 md:order-1">
				<h2 class="capitalize text-4xl md:text-5xl mt-10 mb-4 w-96">Nuestros outfits favoritos</h2>
				<the-button message="Ver más" borderColor="border-black" />
			</div>

			<div class="flex relative overflow-hidden order-1 md:order-2" id="container__carousel">
				<div>
					<div class="flex flex-nowrap md:gap-x-2">
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-1.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-2.jpg" loading="lazy" alt="imagen outfit 2" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-3.jpg" loading="lazy" alt="imagen outfit 3" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-4.jpg" loading="lazy" alt="imagen outfit 4" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-5.jpg" loading="lazy" alt="imagen outfit 5" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-6.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-7.jpg" loading="lazy" alt="imagen outfit 2" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-8.jpg" loading="lazy" alt="imagen outfit 3" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-9.jpg" loading="lazy" alt="imagen outfit 4" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-10.jpg" loading="lazy" alt="imagen outfit 5" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-11.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-1.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-2.jpg" loading="lazy" alt="imagen outfit 2" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-3.jpg" loading="lazy" alt="imagen outfit 3" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-4.jpg" loading="lazy" alt="imagen outfit 4" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-5.jpg" loading="lazy" alt="imagen outfit 5" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-6.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-7.jpg" loading="lazy" alt="imagen outfit 2" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-8.jpg" loading="lazy" alt="imagen outfit 3" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-9.jpg" loading="lazy" alt="imagen outfit 4" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-10.jpg" loading="lazy" alt="imagen outfit 5" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-11.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-1.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-2.jpg" loading="lazy" alt="imagen outfit 2" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-3.jpg" loading="lazy" alt="imagen outfit 3" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-4.jpg" loading="lazy" alt="imagen outfit 4" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-5.jpg" loading="lazy" alt="imagen outfit 5" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-6.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-7.jpg" loading="lazy" alt="imagen outfit 2" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-8.jpg" loading="lazy" alt="imagen outfit 3" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-9.jpg" loading="lazy" alt="imagen outfit 4" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-10.jpg" loading="lazy" alt="imagen outfit 5" />
						</div>
						<div class="h-outfits w-96">
							<img src="/img/outfits/outfit-11.jpg" loading="lazy" alt="imagen outfit 1" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- banner -->
		<div class="w-full h-44 sm:h-56 md:h-72 lg:h-98 mb-5 mt-10 lg:my-20">
			<img src="/img/banner.png" alt="img banner smiley" class="w-full h-full" />
		</div>

		<!-- ballling mens and womens -->
		<section class="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-4 sm:px-4 lg:gap-x-6 lg:px-6">
			<div class="bg-mens bg-center md:bg-cover flex justify-center items-end w-full h-categorias">
				<router-link to="/" class="mb-16">
					<the-button class="text-white" borderColor="border-white" message="Ver más" />
				</router-link>
			</div>
			<div class="bg-womens bg-center md:bg-cover flex justify-center items-end w-full h-categorias">
				<router-link to="/" class="mb-16">
					<the-button class="text-white" borderColor="border-white" message="Ver más" />
				</router-link>
			</div>
		</section>

		<!-- franelas -->
		<section class="bg-white fle flex-col shadow-md px-3 py-2 mt-16" id="hamburguesas">
			<div class="flex justify-between items-center border-b-2 border-t-2 border-gray-400 lg:px-4 py-2">
				<div class="font-semibold text-lg sm:text-xl flex gap-x-4">
					<h2>Prendas Nuevas</h2>
					<router-link to="#" class="text-gray-500 hover:text-black">Ver todos</router-link>
				</div>

				<div class="flex">
					<button>
						<chevron-left-icon class="w-7 h-7 sm:w-8 sm:h-8 active:text-primary lg:hover:text-primary left-arrow" />
					</button>
					<button>
						<chevron-right-icon
							class="w-7 h-7 sm:w-8 sm:h-8 active:text-primary lg:hover:text-primary right-arrow"
						/>
					</button>
				</div>
			</div>

			<div class="glider-contain relative">
				<div class="glider mt-10 overflow-hidden" id="">
					<card-products imageUrl="/img/prendas/prenda-1.png" name="short basic" price="12" />
					<card-products imageUrl="/img/prendas/prenda-2.png" name="Short Predator" price="10" />
					<card-products imageUrl="/img/prendas/prenda-3.png" name="Red Top" price="14" />
					<card-products imageUrl="/img/prendas/prenda-4.png" name="White Balling Set" price="10" />
					<card-products imageUrl="/img/prendas/prenda-5.png" name="Short Predator" price="10" />
				</div>
				<div role="tablist" class="dots my-10"></div>
			</div>
		</section>
	</main>

	<sidebar />
</template>

<script>
import MainNavbar from '../components/navbar/MainNavbar.vue';
import Slides from '../components/slideshow/Slides.vue';
import TheButton from '../components/TheButton.vue';
import CardProducts from '../components/cards/CardProducts.vue';
import Sidebar from '../components/navbar/Sidebar.vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';

import { computed, onMounted } from 'vue';

export default {
	components: { MainNavbar, Slides, TheButton, ChevronRightIcon, ChevronLeftIcon, CardProducts, Sidebar },

	setup() {
		onMounted(() => {
			const carousel = document.getElementById('container__carousel');

			setInterval(() => {
				carousel.scrollLeft += carousel.scrollLeft = 2;
			}, 50);

			new Glider(document.querySelector('.glider'), {
				slidesToShow: 1.5,
				slidesToScroll: 1,
				scrollLock: true,
				// draggable: true,
				dots: '.dots',
				arrows: {
					prev: '.left-arrow',
					next: '.right-arrow',
				},
				responsive: [
					{
						breakpoint: 470,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 960,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 1270,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
						},
					},
				],
			});
		});
	},
};
</script>

<style>
#container__carousel {
	scroll-behavior: smooth;
}
</style>
