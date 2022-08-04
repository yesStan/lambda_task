<template>
	<div class="header">
		<div class="container">
			<div class="header__inner">
				<nav class="menu">
					<div class="logo">
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="./../../assets/img/im-logo.svg" alt="logo" />
						</a>
					</div>
					<div class="menu__wrapper">
						<div class="menu__list">
							<div class="menu__item">Компанія</div>
						</div>
						<div class="menu__list">
							<div class="menu__item">Послуги й ціни</div>
						</div>
						<div class="menu__list">
							<div class="menu__item">Вакансії</div>
						</div>
						<div class="menu__list">
							<div class="menu__item">Блог</div>
						</div>
						<div class="menu__list">
							<div class="menu__item">Надіслати текс</div>
						</div>
						<div class="menu__list">
							<div class="menu__item">lang picker</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Menu',
});
</script>

<style lang="scss" src="./menu.scss" />
