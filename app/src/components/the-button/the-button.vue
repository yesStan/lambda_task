<template>
	<button href="#" class="the-button">{{ buttonName }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TheButton',
	props: {
		buttonName: {
			type: String,
			default: '',
		},
	},
});
</script>

<style lang="scss" src="./the-button.scss" />
