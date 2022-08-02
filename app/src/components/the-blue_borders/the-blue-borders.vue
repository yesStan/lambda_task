<template>
	<span class="blue-border">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheBlueBorder',
    props: {
        text: {
            type: String,
            default: ''
        }
    }
})
</script>

<style lang="scss" src="./the-blue-borders.scss" />
