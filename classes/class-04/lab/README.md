# LAB-04: REST API

- Starting from today, you will start creating a full-stack application, where you will have new requirements daily, and keep adding features to the app on a daily basis until you reach the final running app.

- The app mainly will be a stress-relief cheerful whiteboard for your 401 class, where your classmates can meet and gather in one place for adding jokes about programming, sharing their happy/sad moments while coding through the program in addition to adding some motivational quotes to cheer others up. So, be creative and ENJOY developing it.

- In this lab, you will build a REST API using Express which has endpoints/routes that perform CRUD operations on a database for the posts/quotes with following the REST standard.

## Steps
1. Create a new repo on Github called `401-whiteboard-backend` , then set it up based on the following structure.
    
```text
├── models
    ├── index.js
│   ├── post.model.js
├── routes
│   ├── post.route.js
├── error-handlers
│   ├── 500.js
├── index.js
├── server.js
└── package.json
├── .eslintrc.json
├── .gitignore
```
2. Work on a `lab-04` branch.
3. After completing the lab, create a PR from your `lab-04` branch to `main` then merge your code.
4. Deploy your server on Heroku from `main` branch.

## Lab Requirements
- The user should be able to:
    - Get all posts
    - Get one post
    - Add post
    - Update post
    - Delete post

- Create four routes to cover the previous actions as the following:
    - Get all posts:
        - CRUD operation: Read
        - Method: GET
        - Route: `/post`
        - Response: array of post objects
    - Get one post:
        - CRUD operation: Read
        - Method: GET
        - Route: `/post/id`
        - Response: the post object of `id` 
    - Add post:
        - CRUD operation: CREATE
        - Method: POST
        - Route: `/post`
        - Request body: JSON object has the post data
        - Response: array of post objects
    - Update post:
        - CRUD operation: Update
        - Method: PUT
        - Route: `/post/id`
        - Request body: JSON object has the updated post data
        - Response: the updated post object
    - Delete post:
        - CRUD operation: Destroy
        - Method: DELETE
        - Route: `/post/id`
        - Response: Nothing

- Make sure to update the post in the whiteboard whenever you get, add, update or delete a post.

- Do the required steps as demonstrated in the class for setting up the sequelize library to connect your server with the Postgres server.

- Create a model for your post inside the `models` directory.

- Follow the code structure as demonstrated in the class.


## Testing Requirements
### Backend
- Test the returned data for each REST route
    - Create a post using POST
    - Read a list of posts using GET
    - Read one post using GET
    - Update a post using PUT
    - Delete a post using DELETE


## Submission Instructions
- Submit your Github repo link and the deployed Heroku link.

