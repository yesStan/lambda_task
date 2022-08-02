<template>
	<div>
		<Menu />
    <WhoWeAre/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import WhoWeAre from './components/section_whoWeAre'
import Menu from './components/menu';
export default defineComponent({
	name: 'App',
	components: {
		Menu,
    WhoWeAre
	},
});
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style>
.container {
	max-width: 1280px;
	padding: 0 60px;
	margin: 0 auto;
}

 /* mani text on a page */
.content-text {
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    margin: 0;
    max-width: 100%;
}
</style>
