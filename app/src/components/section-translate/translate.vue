<template>
	<div class="translate">
		<div class="container">
			<div class="translate-inner">
				<div class="translate__wrapper">
					<div class="title__medium">Переклад</div>
					<div class="content-text">
						Перекладаємо між українською, англійською та&nbsp;російською, але
						для великого проєкту можемо зібрати команду для перекладу
						й&nbsp;іншими мовами. Спеціалізуємося на&nbsp;креативних, рекламних
						і&nbsp;маркетингових текстах, презентаціях, пресрелізах, дописах
						у&nbsp;соцмережі, текстах про технології, фінанси, культуру
						й&nbsp;багато іншого. Кожен текст після перекладача вичитує
						професійний редактор, не&nbsp;залишаючи шансу навіть невеличким
						огріхам.
					</div>
					<TheButton
							button-name="Замовити переклад"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheButton from './../the-button';
export default defineComponent({
	name: 'Translate',
	components: {
		TheButton,
	},
});
</script>

<style lang="scss" src="./translate.scss" />
