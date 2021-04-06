# FE Northcoders News

Front-end for a news aggregator website.
[Hosted Link](https://the-nc-news-rsm.netlify.app/)

Mimicking the style of news aggregator websites such as Reddit, this project was created to marry up with a [back-end API](https://github.com/rsmutch/be-northcoders-news) that had previously been created. Handling asynchronous CRUD requests, the UI allows users to interact with data from the above API dependent on the returning HTTP response codes.

## Tech Used

- Framework is React
- HTML & CSS
- Request routing via Reach Router
- HTTP requests via Axios
- [Hosted on Netlify](https://the-nc-news-rsm.netlify.app/)

## Features

- Lists articles on home page which are able to be filtered and sorted
- View individual article
- View article comments
- Upvote or downvote articles and comments (if logged in)
- Delete ones own comments (if logged in)
- Comprehensive error handling

## Instructions

Preferably navigate to the [https://the-nc-news-rsm.netlify.app/](https://the-nc-news-rsm.netlify.app/), however to run locally follow the guidance below.

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
