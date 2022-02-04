<template>
	<router-view />

	<the-footer />
</template>

<script>
import TheFooter from './components/layout/TheFooter.vue';
export default {
	components: { TheFooter },
};
</script>

<style>
#app {
	font-family: 'Poppins', sans-serif;
}
</style>
