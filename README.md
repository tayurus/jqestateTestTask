# Замечания
1. Данная разбивка (редюсеры и экшены лежат в src) справедлива, поскольку у нас только одна фича - список объектов недвижимости; соответственно, будь у нас другие фичи (логин, регистрации), соответствующие редюсеры и экшены лежали бы рядом с компонентами этих фич

Например,

> * src
> > * features
> > > * cards
> > > > > * components
> > > > > * containers
> > > > > * actions
> > > > > * reducers
> > > > > * services
> > > * login
> > > > > * components
> > > > > * containers
> > > > > * actions
> > > > > * reducers
> > > > > * services

2. Также не понятно где было взять картинки (нет описания ендойнтов, а указанный в задаче возвращает только id картинки), поэтому картинка берется из ресурсов, при этом ссылка на неё обернутся в функцию (imageWrapper.js), чтобы в дальнейшем можно было просто заменить на свойство из данных


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
