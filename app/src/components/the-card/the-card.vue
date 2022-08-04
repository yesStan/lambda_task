<template>
		<div class="the-card">
				<TheSvgIcon
						v-if="iconName"
						:icon-name="iconName"
						class="card__icon"
				/>
				<h4 class="card__title">
						{{ title }}
				</h4>
				<p class="card__content-text content-text">
						{{ text }}
				</p>
		</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheImage from './../../components/the-image';
import TheSvgIcon from './../../components/the-svg-icon';

export default defineComponent({
		name: 'TheCard',
		components: {
				TheImage,
				TheSvgIcon
		},
		props: {
				iconName: {
						type: String,
						default: ''
				},
				title: {
						type: String,
						default: '',
				},
				text: {
						type: String,
						default: '',
				},
		},
});
</script>

<style lang="scss" src="./the-card.scss"/>
