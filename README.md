# Vue3 Chart

[Посмотреть деплой]()


<br />

## Экосистема
* `Vue CLI` for installation
* `Vue3` (SFC Components)
* `Vue Router` for routing
* `Vuex` for storage
* `ESlint` for linting
* `SCSS` for styling
* `Git` for versioning

<br />

## Вспомогательные зависимости

<br />

## Функционал
### Общий
- [x] защищенный роутинг
- [x] сохранение данных в `localStorage` (via [vuex-persist](https://github.com/championswimmer/vuex-persist))
- [x] попап, информирующий о статусе запроса данных

<br />

### Страница "Авторизация"
- [x] форма для запроса данных для аналитики с сервера 
- [x] валидация формы: длина значения, введенного в поле, равна 24 символам (via [ValidityState API](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState))
### Страница "Аналитика"
- [x] график визитов по данным, полученным из запроса (via [библиотека amcharts](https://www.npmjs.com/package/@amcharts/amcharts5))
- [x] при наведении на точки пересечения осей отображается дата и количество визитов конкретно для этой точки
- [x] защищенный роутинг. Без данных в localStorage - автоперенаправление на страницу "Авторизация"

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
