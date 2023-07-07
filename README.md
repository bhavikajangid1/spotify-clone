## Spotify Clone

A Spotify clone built with React.js, Express.js, and MongoDB. This project allows users to sign up, log in, create playlists, search for songs, and play music using a song player that persists across the app.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Spotify Clone project is a web application that replicates some of the core functionalities of Spotify. It allows users to create accounts, log in, search for songs, create playlists, and play music seamlessly across the app. The project combines React.js for the frontend, Express.js for the backend, and MongoDB with Mongoose for the database.

## Features

- User authentication: Sign up and log in functionality using JWT and Passport.js for token-based authentication.
- Home page: Displays personalized recommendations and recently played songs.
- My Music: Shows the user's saved songs and playlists.
- Search: Enables users to search for songs and artists.
- Create Playlist: Allows users to create their own playlists and add songs to them.
- Song Player: A persistent song player that plays the selected song across the app using the useContext hook.

## Installation

To run the Spotify Clone project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/bhavikajangid1/spotify-clone.git`
2. Navigate to the project directory: `cd spotify-clone`
3. Install dependencies for the frontend:

    ```cd frontend
       npm install
    ```

4. Install dependencies for the backend:

    ```
    cd ../backend
    npm install
    ``` 
5. Set up the environment variables:
- Create a `.env` file in the `backend` directory.
- Add the following variables:
  ```
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```
6. Start the development servers:
- For the frontend, run `npm start` in the `frontend` directory.
- For the backend, run `npm start` in the `backend` directory.

The project will be accessible at `http://localhost:3000`.

## Usage

Once the project is set up and running, you can access the app through the browser. Here are some steps to get started:

1. Create a new account or log in using existing credentials.
2. Explore the home page for personalized recommendations and recently played songs.
3. Use the search functionality to find songs and artists.
4. Save songs to your personal collection or create playlists to organize your music.
5. Click on a song card to play it in the song player, which will persist across the app.

## API Endpoints

The backend server provides the following API endpoints:

- `POST /auth/register`: Creates a new user account.
- `POST /auth/login`: Logs in an existing user.
- `GET /playlist/get/playlist/:playlistId`: Retrieves the playlist of given playlistId.
- `GET /playlist/get/artist/me`: Retrieves the playlists of logged in user.
- `GET /playlist/get/artist/:artistId`: Retrieves the playlists of the given artistId.
- `POST /playlist/add/song`: Updates a specific playlist by the songId.
- `POST /playlist/create`: Creates a new playlist with the given data.
- `GET /song/get/artist/:artistId`: Retrieves the songs of the given artistId
- `GET /song/get/song/:songName`: Retrieves the song of the given songName.
- `POST /song/create`: Uploads a new song.

For detailed request and response information, refer to the server code and API documentation.

## Database Schema

The MongoDB database uses the following schema:

- `User`: Stores user account information, including username, email, password, and saved songs/playlists.
- `Song`: Represents a song, containing information such as title, artist, duration, and URL.
- `Playlist`: Represents a user's playlist, containing a name and an array of song references.

For detailed schema structure, refer to the server code and database models.

## Contributing

Contributions to the Spotify Clone project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push your changes to the branch: `git push origin my-feature`
5. Submit a pull request detailing your changes.

Please make sure to follow the project's code style and guidelines.

## License

The Spotify Clone project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this project.




