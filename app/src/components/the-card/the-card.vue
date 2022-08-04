<template>
	<div class="card">
		<img :src="iconName" />
		<TheImage class="icon" :image-name="iconName" alt="icon"  />
		<h4 class="small-title">{{ title }}</h4>
		<p class="content-text">{{ text }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheImage from './../../components/the-image'

export default defineComponent({
	name: 'TheCard',
	components: {
		TheImage,
	},
	props: {
		iconName: {
            type: String,
            default: ' '
        },
		title: {
			type: String,
			default: ' ',
		},
		text: {
			type: String,
			default: ' ',
		},
	},
});
</script>

<style lang="scss" src="./the-card.scss" />
