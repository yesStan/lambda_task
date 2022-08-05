<template>
    <div>
        <AMenu />
        <WhoWeAre />
        <Translate />
        <Excellence />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import WhoWeAre from './components/section-whoWeAre';
import AMenu from './components/a-menu';
import Translate from './components/section-translate';
import Excellence from './components/section-excellence';


export default defineComponent({
    name: 'App',
    components: {
        AMenu,
        WhoWeAre,
        Translate,
        Excellence

    }
});

</script>

<style>
.container {
	min-width: 1280px;
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
