# Virtual Movies

This project is about listing some movies from [The Movie DB](https://www.themoviedb.org/).

The Movie Database API is available [here](https://developers.themoviedb.org/3/getting-started/introduction)

You can search a movie by its name in the search bar in the header.

You can click on a movie to see more details about it.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Framework / Libraries / Packages used

* [MUI](https://mui.com/) : UI library for the design    
* [Redux JS](https://redux.js.org/) : The state container
* [Axios](https://axios-http.com/docs/intro) : Promise-based HTTP client to handle API calls
* [Moment JS](https://momentjs.com/) : Parsing and formating dates
* [React Router](https://reactrouter.com/) : Handle Routing
* [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools/) : Developer Tools to power-up Redux development workflow
* [SASS](https://sass-lang.com/) : Powerfull CSS implementation
* [Jest](https://jestjs.io/fr/) : Unit tests (reducers, actions, ...)
* [Axios Mock Adapter](https://github.com/ctimmerm/axios-mock-adapter) : Mock Axios for Unit tests
* [Redux Mock Store](https://github.com/reduxjs/redux-mock-store) : A mock store for testing Redux async action creators and middleware.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## What's up next

Some improvements can be developed for better User Experience : 
* Display more movies, with a lazy loading to load page by page the movies from the API
* Add more filters (ex: by popularity, by release date, etc...)
* Add an icon to clear the search input (like a cross)
* Responsive Design (for mobile or tablet)
* Test React components

