# Template for React front-end + FastAPI back-end

This template is meant to act as a boilerplate for larger apps that require React
and/or FastAPI.

It includes some very basic 'examples' of most of its features, and some out-of-the-box
functionality like changing theme and locale. 


## Template libraries include

Front end:
1. React (instantiated from create-react-app)
2. Sass
3. Material UI (with overridable styling from Sass)
4. Redux + Redux Utils + Redux Thunk
5. React Hook Forms + Yup & Yup-locales
6. React-intl + Extract & Compile scripts
7. React-router
8. [Jest unit testing](https://create-react-app.dev/docs/running-tests/)

Back end:
1. FastAPI
2. Pydantic
3. SQLAlchemy + Databases
4. SQLite


## Installation

from inside `/web/` run `npm install` to install the required web libraries.

from inside `/api/` run `pipenv install` to install the required API libraries.:w



## Scripts

run: `npm start` to start the development web server.

run: `uvicorn main:app --reload` to start FastAPI.


### Internationalization (from `/web/` folder):

run: `npm run extract` to extract messages from source files into a messages.json file.
These files can then be placed in `src/intl/lang/${LOCALE}` folders and translated.

run: `npm run compile-int` to compile each `src/intl/lang/${LOCALE}` folder into a 
corresponding locale file readable by **react-intl**.


### SQLite DB (from `/api/`):

run: `python db/createdb.py` to create the example test.db file for SQLite usage.



# Extra Dev Notes (from Create-React-App)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
