<template>
	<div class="the-image">
		<img class="the-image__img" :src="loacalSrc" alt="" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TheImage',
	props: {
		imageName: {
			type: String,
			default: '',
		},
	},
	computed: {
		loacalSrc() {
			const img = new URL(
				`./../../assets/img/${this.imageName}`,
				import.meta.url
			);

			return this.imageName ? img : '';
		},
	},
});
</script>
