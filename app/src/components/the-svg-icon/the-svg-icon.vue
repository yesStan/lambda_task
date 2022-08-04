<template>
		<div
				v-if="iconName"
				class="the-svg-icon"
		>
				<component
						:is="defineComponent"
						class="the-svg-icon__icon"
				/>
		</div>
</template>

<script lang="ts">
import {
		defineComponent,
		defineAsyncComponent
} from 'vue';

const IconFriendly = defineAsyncComponent(() => import('./../../components/icons/icon-friendly.vue'))
const IconFascinating = defineAsyncComponent(() => import('./../../components/icons/icon-fascinating.vue'))

const ICONS_MAP: any = {
		'fascinating': IconFascinating,
		'friendly': IconFriendly
}

export default defineComponent({
		name: 'TheSvgIcon',
		props: {
				iconName: {
						type: String,
						validator: (val: string) => Object.keys(ICONS_MAP).includes(val),
						required: true
				},
		},
		computed: {
				defineComponent() {
						return ICONS_MAP[this.iconName] || ''
				}
		},
});
</script>
