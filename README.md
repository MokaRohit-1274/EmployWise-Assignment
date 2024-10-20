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

Reqres User Management React Application -File Structure Overview
1. Project Root Directory
The root directory holds the project, such as package configuration and project documentation
package.json- metadata about the project which holds information related to dependencies, scripts, and a whole lot more configurations in handling the application, specification of libraries used like (React, Axios), and includes scripts for running or building an application.

README.md: A markdown file that describes the project and also guides the developers and the users on how to install it, use it, and all other details of its usage.

2. Public Folder
All static files it serves are kept directly by the web server.

index.html This is the main HTML file of the React application, the main entry point into the application. It contains a <div> with an id of root inside which the React components will render. This file can also link in external stylesheets and scripts.
3. Src Folder
It contains all the React Components, styles and logic for the entire application inside the src folder.
 
a. Components Directory
The directory of components holds all functional components included in the application responsible for individual parts of the user interface.

Login.js: Provides the user authentication interface. That includes fields for an email and a password, and a button to send a request for the login. It manages the state for input values and error messages.

UsersList.js- This is the component that fetches and displays a list of users through the API. It uses child components to render individual user cards while handling pagination.
UserCard.js- This contains an instance for each user. It has functions for displaying a user's avatar, name, email address, along with edit and delete buttons for the user.

EditUser.js This is a component that will enable a user to edit details. It loads a pre-filled form with user existing information and can submit this back to the API.

Pagination.js This manages the pagination of users. Among the features given are navigation control buttons such as Next and Previous and even what is shown about the current page.

Stylesheets Each of the components has a corresponding CSS file for styling them out, thus providing modularity in how designs are adopted.

login.css: handles form styles for the login form-includes layout, font sizes, styles for input field and error messages.

usersList.css: manages all the styling specific to the user list view: all styling related to keeping the user cards in view.

UserCard.css: Styles the card that actually houses the user with their hover effects, buttons, and making sure things are responsive.

editUser.css: styles the edit user form, so it has a form style consistent with other forms in the app.

Pagination.css: It contains the styles for pagination controls. The styles control not only the appearance but also the layout for the navigation buttons.
   
c. Core Application Files
The core application files are those central files in an application
   
App.js: This is the main application component that integrates all other components of the application. In case of React Router, this will handle the routing and also tend to manage the overall state of the application, such as whether the user is logged in or not.

App.css: All global styles, that is, throughout your application; from styling your fonts to background colors, general rules about your layout.
 
index.js: This will be the entry point for your React app. This file will mount App component into DOM, but only if React Router is in action, it will integrate and render all the routes on the client-side.
 
index.css: In this one, we're applying global CSS. The whole application will have something applied directly to it. You can reset all the default browser styles and general layout rules.
This file structure is planned with maintainability, scalability, and clarity in mind. Each piece is a separate file with associated styles, which makes updating and collaborating much easier. The concerns such as presentation from logic make this application much more manageable and easier to extend with that feature which can be added later.

Let me know if you need more details or any specific sections!








This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
