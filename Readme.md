# I will be using Express JS as the framework for this project and will use the REST protocol for API calls. I will also be using the ESLint linter and Prettier formatter to ensure code consistency and readability.

# Step 2: Create models for data

# a. Track resource:
id (auto-generated)
name
album
artist
duration
artwork (string: url to a .jpeg image)
audio (string: url to a .mp3 file)

# b. Playlist resource:
id (auto-generated)
name
creator
playtime
trackList (array of type Track)

# Step 3: Provide CRUD functionality

# a. CRUD operations for Tracks:
Create: POST /tracks
Edit: PUT /tracks/:id
Get All: GET /tracks
Get One: GET /tracks/:id
Delete: DELETE /tracks/:id

# b. CRUD operations for Playlists:
Create: POST /playlists
Edit: PUT /playlists/:id
Get All: GET /playlists
Get One: GET /playlists/:id
Delete: DELETE /playlists/:id

# c. Add Tracks to a given Playlist:
POST /playlists/:id/tracks

# Step 4: Implement db solution

I will be using MongoDB as the database for this project and will be using the Mongoose ORM for integration. I will also be handling exceptional cases and providing appropriate error messages.

# Step 5: Secure the app with JWT

I will be implementing JWT authentication for all routes in the app.
I will set an API token and include it in the header of each request.
I will check for the presence of the token in each route and provide appropriate error messages if the token is missing or invalid.



# Application Running structure

- Hot-reload
- Linting with ESLint
- Testing with Jest
- Debugging enabled

# Running Applications

- `yarn build` to lint and build the app
- `yarn dev` to start the app with hot-reload
- `yarn start` to start the app without hot-reload
- `yarn test` to run all test files

---
# Author :: [Julius Bright]
