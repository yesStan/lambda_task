<template>
	<div class="the-svg-icon">
		<component :is="componentName" />
        <!-- <icon /> -->
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
// import icon from './../../assets/img/Fascinating.svg?component' 
// ./../../assets/img/Fascinating.svg?component

export default defineComponent({
	name: 'TheSvgIcon',
    // components: {
    //     icon
    // },
	props: {
		iconName: {
			type: String,
            required: true
		},
	},
	computed: {
		componentName() {
			// const component = defineAsyncComponent(
			// 	() => import(`./../../assets/img/${this.iconName}.svg?component`)
			// );
            // const component = import(`./../../assets/img/${this.iconName}.svg?component`);
			// return this.iconName ? component : '';
            return defineAsyncComponent(() => import(`./../../components/icons/${this.iconName.toLowerCase()}.vue`));
		},
	},
});
</script>
