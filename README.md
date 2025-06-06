# Тестовое задание Neoflex Invite Test

Ссылка на задание: [Тестовое задание](https://neostudy.neoflex.ru/pluginfile.php/154459/mod_assign/introattachment/0/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%20%D1%82%D0%B7.pdf?forcedownload=1)

Demo проекта: https://vue-qpick.netlify.app/

## Выполненные требования

[x] Необходимо разработать используя React, React Router, две страницы интернет-магазина аудио аксессуаров. Первая страница – каталог товаров, вторая – корзина с приобретенными товарами; (Использование TS приветствуется). Для стилизации можете выбрать любой подход. (css, sass, styled-components, и т.д). Компоненты желательно продумывать с дальнейшим переиспользованием. Уточнение: согласно условию Можно решить данное задание одним из фреймфорков vue/angular/react. Выполнено на базе Vue3; 

[x] Необходимо реализовать удобный и масштабируемый роутинг;

[x] Все элементы ссылок, иконок, должны отзываться при наведении на них (будет плюсом переход на какие либо соц-сети или вызов несуществующего номера);

[x] Реализовать переход с корзины обратно домой (через logo или кнопкой возврата);

[x] При нажатии на «Купить» в карточке на первой странице счетчик товаров рядом с иконкой корзины должен увеличиваться

[x] При изменении количества товаров в корзине, сумма и кол-во товаров должна изменяться

[x] Обязательным условием является хранение данных о каждом товаре в виде элемента массива. Уточнение: данные о товарах хранятся удалённо на сервере https://mokky.dev/ и доступны по ссылке https://f6c4889c93430217.mokky.dev/items. 

## Дополнительные улучшения

[x] Чистка кода, рефакторинг, работа над улучшением производительности;

[x] Адаптивность на все устройства;

[x] Возможность удалять карточку товара из корзины товаров;

[x] Реализовать «Переход к оформлению» на отдельную страницу с формой оплаты или модальное окно с формой оплаты. Уточнение: данные о заказах хранятся удалённо на сервере https://mokky.dev/ и доступны по ссылке https://f6c4889c93430217.mokky.dev/orders;

[x] Реализовать модальное окно с подробной информацией о товаре, добавить в карточку иконку просмотра на свой выбор, которая будет открывать данное модальное окно;

---

## Настройки проекта

```sh
npm install
```

### Запуск разработки

```sh
npm run dev
```

### Сборка

```sh
npm run build
```