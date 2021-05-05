## Rick and Morty Characters

Single page application built in react with TypeScript to present Rick and Morty Characters.

### Structure

## Folders and files
- api/services - Is where all needed services are. Inside is divided by files, depending on the purpose of api calls.
- /components - All components that can be reused. Each component is inside his own folder, have his own css and types.
- /constants - Hardcoded information that can be used in different places.
- /types - Types used accross the project.
- /views - All pages or views that are accessed directly throw path.
- index.ts files are used to reduce import verbosity.

## Brief Explanation
The App.tsx is where all routes are defined.\
The main page of the application is the view Homepage, where characters are fetched from rick and morty api.\
Different components have been made in order to reuse them in other views or components.\
Main info about each character is fetched in homepage.\
Specific info is fetched in CharacterInfo component, in order to make less calls to the api.\
This way, it is possible to only call the api once and when it is wanted (when '+info' button is clicked).\
Search of characters is done without taking into account the order of the character's name.\
For example, with this it is possible to search by surname, without need to write the first name.\
The limit of characters to be displayed is passed in props to the Homepage view.\
The Homepage view makes requests to the api and fetch all the passed number of characters.\
While the number of characters is not reached, it will be called the api with the url containing the following characters.\
Axios is used to make the api requests.

## TODO

With more time, it would be great to prototype a new design and apply the needed css.

## Run Project

1 - npm install;\
2 - npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
