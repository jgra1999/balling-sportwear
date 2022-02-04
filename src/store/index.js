import { createStore } from 'vuex';

export default createStore({
	state: {
		slides: [],
	},
	mutations: {
		/* Slides */
		setSlides(state, payload) {
			state.slides = payload;
		},
	},
	actions: {
		/* Slides */
		async fetchDataSlide({ commit }) {
			try {
				const res = await fetch('slides.json');
				const data = await res.json();

				commit('setSlides', data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
