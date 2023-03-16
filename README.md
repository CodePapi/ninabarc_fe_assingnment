## instructions: 

The interviewee should provide a GitHub repository containing the code for the application, along with instructions for running the application locally and running the tests. The repository should also include a README.md file with a brief overview of the application and any additional notes or comments the interviewee would like to provide.

## Project: 

Build a simple web application that allows users to search for books using the Open Library API and display the search results. Users should be able to select a book from the search results to view more details about the book.

## requirements:

- Use React and Redux to build the application.
- Use the Open Library API to search for books. The API documentation can be found here: https://openlibrary.org/developers/api.
- Display the search results as a list of books with their titles, authors and cover images.
- When a user clicks on a book from the search results, display more details about the book, including its title, author, cover image, publication date, and a brief description.
- Write unit tests for your components using Jest.

## instructions for running the application locally:

- Clone the repository
- Run `npm install` or `yarn` to install the dependencies
- Run `npm start` or `yarn run start` to start the application
- Open http://localhost:3000 to view it in the browser.

## instructions for running the tests:

- Run `npm test` or `yarn run test` to run the tests

## notes:

- The application is built using React and Redux.
- The Application uses the Redux Thunk middleware to handle asynchronous actions and redux-persist to persist the store in the local storage.
- The application uses the react-router-dom package to handle routing.
- The application uses Tailwind CSS for styling and MUI for components.
- The application uses the Open Library API to search for books.
- The application displays the search results as a list of books with their titles, authors and cover images.
- When a user clicks on a book from the search results, the application displays more details about the book, including its title, author, cover image, publication date, and a brief description in a new page.
- The application has unit tests for its components using Jest.

## Considerations:

- The code is well-organized and maintainable.
- The application is responsive and easy to use.
- The application handles errors gracefully and display meaningful error messages to the user.
- The unit tests covers all important functionality.
- Users to can add books to a "favorites" list
- Users can remove books from the "favorites" list
- Users can view the "favorites" list in the side drawer
- pagination to the search results
- TailwindCSS was used to style the application
- Loader was added to the application
- Data for favorites is persisted using redux-persist

## No deep consideration was given to the following:

- The types of some data returned from the API are not well defined and that cause the usage of the any type in several places.
- I did not consider the PR review process and the code review process because I did not want to give it so much attention considering it is just a test.