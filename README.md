# Vue3 Chart

[Посмотреть деплой](https://proehavshiy.github.io/vue-chart/)


<br />

## Экосистема
* `Vue CLI` for installation
* `Vue3` (SFC Components)
* `Vue Router` for routing
* `Vuex` for storage
* `ESlint` for linting
* `SCSS` for styling
* `Git` for versioning
* [amcharts4](https://www.amcharts.com/docs/v4/) for chart

<br />

## Вспомогательные зависимости

<br />

## Функционал
### Общий
- [x] все глобальные функциональные данные, мутаторы и экшны хранятся в Vuex store
- [x] сохранение данных в `localStorage` (siteId и данных для аналитики) (via [vuex-persist](https://github.com/championswimmer/vuex-persist))
- [x] попап, информирующий о статусе запроса данных
<br />

### Роутинг
- [x] защищенный роутинг страницы с аналитикой. Без данных в localStorage siteId страница недоступна
- [x] автоматический редирект на страницу с аналитикой, если пользователь уже залогинен
- [x] страница 404

<br />

### Страница "Авторизация"
- [x] форма для запроса данных для аналитики с сервера 
- [x] валидация формы: длина значения, введенного в поле, равна 24 символам (via [ValidityState API](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState))
- [x] кнопка сабмита активна только при валидности формы
- [x] Кнопка "Аналитика" - при успешном запросе к серверу / наличии siteId в localStorage, кликабельна и ведет на одноименную страницу

<br />

### Страница "Аналитика"
- [x] график визитов по данным, полученным из запроса
- [x] при наведении на точки пересечения осей отображается дата и количество визитов конкретно для этой точки
- [x] Tooltip для управления графиком
- [x] Кнопка "Выйти" - разлогинивает и редиректит на страницу "Авторизации"

<br />

<br />

## Требования
* [Функционал](https://docs.google.com/document/d/1kkBaZYmehNVgCMd76jdbvL8zTxgMsg63VWnDWdTdkiY/edit)

<br />


## Команды:
*  `git clone git@github.com:proehavshiy/vue-chart.git` - clone branch
* `npm install` - install dependencies
* `npm run serve` - run the project in dev mode
* `npm run build` - build final version
* `npm run lint` - check linter errors
*  `sh deploy.sh` - deploy to gh-pages
