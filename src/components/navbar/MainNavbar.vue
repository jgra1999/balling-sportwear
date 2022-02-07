<template>
	<!-- Navbar Mobile -->
	<nav
		class="fixed z-20 md:hidden w-full py-1.5 px-2 flex justify-between items-center text-gray-200 transition-color duration-700"
		:class="{ 'bg-primary shadow-md': showBackground }"
	>
		<div class="w-full flex justify-center" :class="{ hidden: showBackground }">
			<img src="/img/logo.png" alt="Icon balling" loading="lazy" class="w-8 max-h-12" />
		</div>

		<div
			class="flex items-center gap-x-4 opacity-0 transition-opacity duration-700"
			:class="{ 'opacity-100': showBackground }"
			v-if="showBackground"
		>
			<button @click="showMenu" class="transition-opacity duration-700">
				<menu-icon class="w-8 h-8 active:text-white" />
			</button>

			<img src="/img/logo completo blanco.png" alt="logo balling" loading="lazy" class="w-52" />
		</div>

		<div
			class="flex items-center gap-x-4 opacity-0 transition-opacity duration-700"
			:class="{ 'opacity-100': showBackground }"
			v-if="showBackground"
		>
			<router-link to="#">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="w-6 h-6 fill-current active:text-white"
				>
					<path
						d="M6 23.73l-3-2.122v-14.2l3 1.359v14.963zm2-14.855v15.125l13-1.954v-15.046l-13 1.875zm5.963-7.875c-2.097 0-3.958 2.005-3.962 4.266l-.001 1.683c0 .305.273.54.575.494.244-.037.425-.247.425-.494v-1.681c.003-1.71 1.416-3.268 2.963-3.268.537 0 1.016.195 1.384.564.422.423.654 1.035.653 1.727v1.747c0 .305.273.54.575.494.243-.037.423-.246.423-.492l.002-1.749c.002-1.904-1.32-3.291-3.037-3.291zm-6.39 5.995c.245-.037.427-.247.427-.495v-2.232c.002-1.71 1.416-3.268 2.963-3.268l.162.015c.366-.283.765-.513 1.188-.683-.405-.207-.858-.332-1.35-.332-2.096 0-3.958 2.005-3.962 4.266v2.235c0 .306.272.538.572.494z"
					/>
				</svg>
			</router-link>
			<router-link to="#">
				<search-icon class="w-6 h-6 text-gray-200 hover:text-white" />
			</router-link>
		</div>
	</nav>

	<!-- navbar pc -->
	<nav
		class="fixed z-50 h-20 hidden md:flex justify-between items-center px-10 w-full transition-color duration-700"
		:class="{ 'bg-primary shadow-md': showBackground }"
	>
		<img
			src="/img/logo.png"
			alt="icono balling"
			loading="lazy"
			class="w-10"
			:class="{ hidden: showBackground }"
		/>

		<img
			src="/img/logo completo blanco.png"
			alt="logo balling"
			loading="lazy"
			class="w-logo hidden"
			id="logo"
		/>

		<div v-if="showBackground" class="transition duration-700">
			<ul class="flex items-center gap-x-5 text-white">
				<router-link to="/" class="border-b-4 py-6 border-transparent hover:border-white">
					<li class="font-bold text-lg">Home</li>
				</router-link>

				<li class="group font-bold text-lg border-b-4 py-6 border-transparent hover:border-white cursor-default">
					Hombres

					<div
						class="bg-primary shadow-md absolute left-0 top-0 w-full p-5 mt-20 hidden group-hover:flex justify-around"
						id="catalogue"
					>
						<div>
							<ul>
								<span class="font-bold text-xl">Prendas Superiores</span>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Jerseys
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Chaquetas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Franelas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Franelillas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Sueteres
									</li>
								</router-link>
							</ul>
						</div>

						<div class="flex flex-col">
							<ul>
								<span class="font-bold text-xl">Prendas Inferiores</span>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Joggers
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Shorts
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Licras
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Boxers
									</li>
								</router-link>
							</ul>
						</div>

						<div>
							<ul>
								<span class="font-bold text-xl">Otros</span>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Mangas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Medias
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Gorras
									</li>
								</router-link>
							</ul>
						</div>
					</div>
				</li>

				<li class="group font-bold text-lg border-b-4 py-6 border-transparent hover:border-white cursor-default">
					Mujeres
					<div
						class="bg-primary shadow-md absolute left-0 top-0 w-full p-5 mt-20 hidden group-hover:flex justify-around"
					>
						<div>
							<ul>
								<span class="font-bold text-xl">Prendas Superiores</span>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Tops
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Chaquetas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Franelas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Franelillas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Sueteres
									</li>
								</router-link>
							</ul>
						</div>

						<div class="flex flex-col">
							<ul>
								<span class="font-bold text-xl">Prendas Inferiores</span>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Joggers
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Shorts
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Licras
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Bikers
									</li>
								</router-link>
							</ul>
						</div>

						<div>
							<ul>
								<span class="font-bold text-xl">Otros</span>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Mangas
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Medias
									</li>
								</router-link>
								<router-link to="/">
									<li
										class="text-gray-200 font-medium mt-1 hover:text-white transform hover:translate-x-2 transition-all duration-200"
									>
										Gorras
									</li>
								</router-link>
							</ul>
						</div>
					</div>
				</li>

				<router-link to="/" class="border-b-4 py-6 border-transparent hover:border-white">
					<li class="font-bold text-lg">Contactanos</li>
				</router-link>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="w-5 h-5 fill-current text-gray-200 hover:text-white"
					>
						<path
							d="M6 23.73l-3-2.122v-14.2l3 1.359v14.963zm2-14.855v15.125l13-1.954v-15.046l-13 1.875zm5.963-7.875c-2.097 0-3.958 2.005-3.962 4.266l-.001 1.683c0 .305.273.54.575.494.244-.037.425-.247.425-.494v-1.681c.003-1.71 1.416-3.268 2.963-3.268.537 0 1.016.195 1.384.564.422.423.654 1.035.653 1.727v1.747c0 .305.273.54.575.494.243-.037.423-.246.423-.492l.002-1.749c.002-1.904-1.32-3.291-3.037-3.291zm-6.39 5.995c.245-.037.427-.247.427-.495v-2.232c.002-1.71 1.416-3.268 2.963-3.268l.162.015c.366-.283.765-.513 1.188-.683-.405-.207-.858-.332-1.35-.332-2.096 0-3.958 2.005-3.962 4.266v2.235c0 .306.272.538.572.494z"
						/>
					</svg>
				</li>
				<li>
					<search-icon class="w-5 h-5 text-gray-200 hover:text-white" />
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { ref } from 'vue';
import { MenuIcon, SearchIcon } from '@heroicons/vue/outline';

export default {
	components: { MenuIcon, SearchIcon },

	setup() {
		let showBackground = ref(false);

		document.addEventListener('scroll', function () {
			let bodyTopPosition = document.body.getBoundingClientRect().top;
			const logo = document.getElementById('logo');

			if (bodyTopPosition < -150) {
				showBackground.value = true;
				logo.classList.remove('hidden');
			} else {
				showBackground.value = false;
				logo.classList.add('hidden');
			}
		});

		const showMenu = () => {
			const sidebar = document.getElementById('sidebar');
			const options = document.getElementById('options');
			const background = document.getElementById('background');

			sidebar.classList.remove('hidden');
			sidebar.classList.add('flex');

			setTimeout(() => {
				options.classList.remove('-translate-x-full');
				background.classList.add('opacity-75');
			}, 100);
		};

		return { showBackground, showMenu };
	},
};
</script>
