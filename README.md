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



# SOP Generator

This repository contains the source code for an SOP (Standard Operating Procedure) generator application. This document provides an overview of the technologies used in building the application and explains the logic behind the process of user form submission and email delivery.

## Technologies Used

### Frontend

- **React**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
- **@emotion/react** and **@emotion/styled**: These libraries are used for styling components with Emotion, a performant and flexible CSS-in-JS library.
- **@fontsource/roboto**: Provides the Roboto font for the application's typography.
- **@mui/material** and **@mui/styled-engine-sc**: Material-UI components and styles are used for building a cohesive and responsive UI.
- **@hookform/devtools** and **react-hook-form**: These libraries help manage form state and validation in React applications.
- **react-icons**: Provides a collection of icons for use in the user interface.
- **react-router-dom**: Enables client-side routing and navigation within the application.

### Backend

- **Node.js**: The backend of the application is built with Node.js, a JavaScript runtime.
- **Express**: Express is used as the web application framework to handle routing and middleware.
- **cors**: Middleware for handling Cross-Origin Resource Sharing (CORS).
- **dotenv**: Allows the use of environment variables for configuration.
- **helmet**: Helps secure the application by setting HTTP headers.
- **body-parser**: Middleware for parsing HTTP request bodies.
- **axios**: A promise-based HTTP client for making API requests.
- **nodemailer**: Used for sending emails to users.
- **little-state-machine**: A library for managing state in React applications.

### Build and Styling

- **styled-components**: Used for styled-components and theming.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.
- **postcss-cli** and **autoprefixer**: Used for post-processing CSS to add vendor prefixes and other enhancements.
- **web-vitals**: Helps measure and track web performance metrics.

## Logic: User Form Submission and Email Delivery

1. **User Fills the Form**: The application presents a user-friendly form for users to enter SOP details such as title, content, and recipient email address.

2. **Form Data Validation**: The `react-hook-form` library is used for form state management and validation. It ensures that the user's input data is valid before submission.

3. **Form Submission**: When the user submits the form, the form data is sent as a POST request to the server using the `axios` library.

4. **Server Handling**: The Node.js server, powered by Express, receives the form data. It may perform additional validation and processing on the server-side if needed.

5. **Email Delivery**: Nodemailer is used to send an email to the recipient email address provided in the form. It includes the SOP title and content as the email body.

6. **Response to User**: The user receives a response on the frontend indicating whether the form submission was successful or if there were any errors during the process.

7. **Error Handling**: Error handling is implemented both on the client and server sides to provide a robust and user-friendly experience. If there are any issues, appropriate error messages are displayed to the user.

This logic ensures that users can easily create SOPs by filling out a form, and the generated SOP is delivered to their specified email address.

### Status 200
![Status 200](https://github.com/yashowardhan992/Multistep-Form/assets/52581482/f5445155-6395-48e7-8e35-0283fa9e41ee)

### Form Mail 
![form mail](https://github.com/yashowardhan992/Multistep-Form/assets/52581482/e424f460-f097-4fd2-8ee2-ba0c0e851d5a)


