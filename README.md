# KLONFLIX

## Getting Started with Create React App

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is a movie application built using React. Users can sign up, log in, browse movies, save their favorite ones, and each account can access their own favorite movies. The application utilizes Firebase for authentication and data storage.

## Dependencies

The project uses various dependencies such as `react`, `react-router-dom`, `firebase`, `tailwind` and `axios` for API requests.

## Components

- `App.js`: Main entry point of the application that handles routing and authentication context.
- `AuthContext.js`: Defines the authentication context for user authentication, sign up, login, and logout functionalities.
- `Navbar.js`: Renders the navigation bar with options for logging in, signing up, accessing the account, and logging out.
- `Home.js`: Displays the main page with different movie categories and titles.
- `Account.js`: Renders the user's account page with saved shows.
- `Signup.js` and `Login.js`: Handle the user signup and login functionalities.
- `ProtectedRoute.js`: Protects routes that require authentication to access.
- `Row.js` and `Movie.js`: Handle the rendering of movie rows and individual movie components.
- `Main.js`: Renders the main component with the main movie displayed on the landing page.

## Running the Application

To run the application, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the application through the provided local URL.

Feel free to explore the code and customize the application as needed.
