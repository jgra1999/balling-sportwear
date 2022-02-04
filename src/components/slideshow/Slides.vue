<template>
	<div class="h-screen relative flex justify-center overflow-hidden">
		<slide
			v-for="slide in slides"
			:key="slide.id"
			:index="slide.id"
			:visibleSlide="visibleSlide"
			:direction="direction"
		>
			<img :src="slide.img" loading="lazy" class="hidden md:block h-full w-full z-0" />
			<img :src="slide.imgPC" loading="lazy" class="md:hidden h-full w-full" />
		</slide>
		<div class="flex gap-x-4 absolute bottom-5">
			<button
				@click="controller"
				id="cero"
				class="h-1 w-20 bg-white opacity-50"
				:class="{ 'opacity-100': visibleSlide == 0, 'opacity-50 ': visibleSlide != 0 }"
			></button>
			<button
				@click="controller"
				id="uno"
				class="h-1 w-20 bg-white opacity-50"
				:class="{ 'opacity-100': visibleSlide == 1, 'opacity-50 ': visibleSlide != 1 }"
			></button>
			<button
				@click="controller"
				id="dos"
				class="h-1 w-20 bg-white opacity-50"
				:class="{ 'opacity-100': visibleSlide == 2, 'opacity-50 ': visibleSlide != 2 }"
			></button>
		</div>
	</div>
</template>

<script>
import Slide from './Slide.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
export default {
	components: { Slide },

	data() {
		return {
			visibleSlide: 0,

			direction: 'left',
		};
	},

	computed: {
		slidesLength() {
			return this.slides.length;
		},
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchDataSlide'); //dispatch hace la funcion de commit pero en composition api
		});

		const slides = computed(() => store.state.slides);

		return { slides };
	},

	mounted() {
		setInterval(() => {
			this.visibleSlide = this.visibleSlide + 1;
			if (this.visibleSlide === 3) {
				this.visibleSlide = 0;
			}
		}, 6000);
	},
};
</script>

<style></style>
