# Frontend of the graduation project

A service where you can find movies on demand and save them in your personal account.

## Description
The site consists of several pages:
- Home page. Contains information about the completed project.
- Registration page. Allows the user to register an account.
- Authorization page. Here, the user can log in.
- Profile editing page. The user can change the data of his account.
- A page with movies. Here a movie search form and a block with search results.
- A page with saved movies. Shows movies saved by the user.

## Technologies
`HTML` `CSS` `BEM` `Adaptive layout` `React`

- The project's infrastructure files are created through CRA.
- The project is adapted to different screen resolutions.
- The code uses semantic markup, which is placed in its corresponding components.
- A state variable has been created in the root component of the App that stores user data. It is used as a value for the context provider.
- When trying to switch to any secure router, a redirect to / occurs.
- If the user has been logged in and closed the tab, he can immediately return to any page of the application by URL.
- When trying to go to a non-existent page, a redirect occurs to the "404" page.
- API requests are placed in separate files: MainApi.js and MoviesApi.js . The promise processing chain ends with the catch block.
- All movies from the beatfilm-movies service are requested only during the first search; all saved movies are not requested from the server with each like or dislike; user data is requested once when the application is launched.
- After a successful call to the onSignOut handler, a redirect to / occurs.


## The "Registration" and "Authorization" pages
- Routes /saved-movies, /movies, /profile are protected by the HOC component ProtectedRoute. The routes / , /signin, /signup are not protected.
- On the "Registration" page, clicking on the "Register" button sends a request to the router /signup, if the data is entered correctly. If the request was successful, the login and redirect to the /movies page is automatically performed.
- On the "Authorization" page, clicking on the "Login" button sends a request to the router /signin, if the data is entered correctly. If the request was successful, a redirect to the /movies page takes place.
- All forms are validated. The user cannot send a request with invalid data.

## Profile editing page
- On the profile editing page, clicking on the "Save" button sends a request to the router /users/me, if the data is entered correctly.
- The user is notified of a successful request to the server when saving the profile.
- If the information entered on the profile editing page corresponds to the user's current data, the "Save" button is blocked and a save request cannot be sent.

## Movie search
- Search for movies is case-insensitive.
- If the request is executed for the first time, then work with the filter occurs after receiving the data.
- When searching, the query text, the found movies and the status of the short films switch are stored in the storage. If the user goes to the movies page again, then when mounting the component, the data is retrieved from the local storage.
- After a successful submission of the search form, a block with results appears.
- If nothing is found, the text is displayed: "Nothing is found".
- On the page of all movies, the same number of cards is displayed in the result block as in the layout. Clicking on the "More" button displays the next row with the same number of cards. When all cards are displayed, the "More" button is hidden.

## Cards
- The card consists of an image, the title of the movie and its duration. Clicking on the card leads to the movie trailer.
- When clicking on the "Like" icon in the card block, a request is made to the /movies API to set or remove the like, depending on the current state.

## Saved movies
- The search form is displayed on the page. It allows you to search for movies based on already received data about saved movies.
- The card block contains a delete button. When you click on the delete button, a request is made to delete the movie. After a successful request, the card is removed from the page.

## Project launch
- Clone repository: `git clone https://github.com/uladzimirfilipau/movies-explorer-frontend .git`
- Install dependencies in the root directory of the project using the command: `npm i`
- Run the frontend part of the application on port 3000: `npm start`
- For the full operation of the application, you need to run [backend](https://github.com/uladzimirfilipau/movies-explorer-api)
