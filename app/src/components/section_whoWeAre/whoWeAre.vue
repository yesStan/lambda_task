<template>
	<section class="section-centered">
		<div class="container">
			<div class="section__whoWeAre">
				<div class="whoWeAre__title">
					<h1>
						<TheBlueBorder text="Корегуємо" />, редагуємо й перекладаємо тексти
					</h1>
				</div>
				<div class="whoWeAre__description">
					<p class="content-text description__text">
						Correctarium — сучасне бюро та онлайновий сервіс перекладів і
						редактури. Замовити послугу редагування й перекладу можна просто на
						сайті. Вставте текст у спеціальну форму й відразу дізнайтеся
						вартість і термін виконання роботи.
					</p>
					<TheButton button-name="Надіслати текст" />
				</div>
				<div class="whoWeAre-langs">
					<div class="whoWeAre-langs__wrapper">
						<article class="whoWeAre-langs__ukr content-text">
							<h4 class="langs-title">УКРАЇНСЬКА</h4>
							Наші редактори — експерти з української мови, знають усі
							нововведення правопису й застосовують останні рекомендації
							авторитетних філологів.
							<br /><br />
							Обережно! Деякі виправлення можуть здатися вам незвичними, адже в
							медіапросторі України досі безліч помилок і росіянізмів, до яких
							усі звикли. Ми виправляємо цю ситуацію і сподіваємося на вашу
							підтримку.
						</article>
						<article class="whoWeAre-langs__eng content-text">
							<h4 class="langs-title">АНГЛІЙСЬКА</h4>
							Виправляємо тексти англійською. Такі замовлення виконують як
							редактори з України, так і носії мови. Усуваємо ортографічні,
							граматичні, пунктуаційні, стилістичні, лексичні, синтаксичні
							помилки й багато інших.
							<br /><br />
							Наші носії — не просто люди, що народилися за межами України, а
							професійні редактори з Великої Британії та США, що багато років
							працювали у видавництвах та університетах.
						</article>
						<article class="whoWeAre-langs__rus content-text">
							<h4 class="langs-title">РОСІЙСЬКА</h4>
							Перевірити правопис у тексті російською можна й за допомогою
							програми, але результат буде не дуже: усіх помилок вона не
							виловить. Контакт чи контракт? Таку помилку може помітити тільки
							людина. Та й із хоч трохи складнішою пунктуацією програми не
							можуть упоратися. А ще є неологізми й запозичення...
							<br /><br />
							Радимо надсилати всі тексти, розраховані на широку авдиторію, на
							вичитування професійному редакторові.
						</article>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheButton from './../the-button';
import TheBlueBorder from './../the-blue_borders'; //sooqa zachecm _

export default defineComponent({
	name: 'WhoWeAre',
	components: {
		TheButton,
		TheBlueBorder,
	},
});
</script>

<style lang="scss" src="./whoWeAre.scss" />
