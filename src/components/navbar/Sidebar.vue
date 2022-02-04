<template>
	<div class="fixed z-30 top-0 w-screen h-screen hidden" id="sidebar">
		<div
			class="flex flex-col bg-primary w-3/4 h-screen opacity-100 p-4 transform translate -translate-x-full transition-transform duration-200"
			id="options"
		>
			<div class="flex justify-between items-center">
				<button @click="hiddeMenu">
					<x-icon class="w-10 h-10 text-white" />
				</button>
				<img src="/img/logo.png" alt="logo flow" loading="lazy" class="w-8" />
			</div>
			<ul class="fle flex-col divide-y-2 divide-gray-200 mt-8 text-white" @click="hiddeMenu">
				<li class="py-3"><router-link to="#" class="font-bold text-xl">Home</router-link></li>
				<li class="py-3"><router-link to="#" class="font-bold text-xl">Hombres</router-link></li>
				<li class="py-3"><router-link to="#" class="font-bold text-xl">Mujeres</router-link></li>
				<li class="py-3"><router-link to="#" class="font-bold text-xl">Contactanos</router-link></li>
			</ul>
		</div>
		<div class="bg-black opacity-0 transition-opacity duration-100 w-1/4 h-screen" id="background"></div>
	</div>
</template>

<script>
import { XIcon } from '@heroicons/vue/outline';

export default {
	components: { XIcon },

	methods: {
		hiddeMenu() {
			const sidebar = document.getElementById('sidebar');
			const options = document.getElementById('options');
			const background = document.getElementById('background');

			options.classList.add('-translate-x-full');
			background.classList.remove('opacity-75');

			setTimeout(() => {
				sidebar.classList.remove('flex');
				sidebar.classList.add('hidden');
			}, 200);
		},
	},
};
</script>
