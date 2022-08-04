<template>
		<button
				:at-the-button="atAttribute"
				:type="buttonType"
				class="the-button"
		>
				{{ buttonName }}
		</button>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { TButtonType } from '../../constants/button-constants';

import { defineComponent } from 'vue';

import { E_BUTTON_TYPES } from '../../constants/button-constants';

export default defineComponent({
		name: 'TheButton',
		props: {
				buttonType: {
						type: String as PropType<TButtonType>,
						validator: (val: TButtonType) => Object.values(E_BUTTON_TYPES).includes(val),
						default: E_BUTTON_TYPES.BUTTON
				},
				buttonName: {
						type: String,
						default: ''
				},
				/**
				 * for AQA test
				 */
				atAttribute: {
						type: String,
						default: ''
				},
		},
});
</script>

<style lang="scss" src="./the-button.scss"/>
