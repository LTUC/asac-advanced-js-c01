# LAB-05: Data Modeling and React app

- In this lab, you will build the frontend part of the app using React, where the user will be able to add, get, update and delete quotes in addition to give the ability for the user to add comments to any specific post ,as well as to complete building your REST API by applying the `collection` design pattern.

## Steps
### Backend part
1. Continue working on `401-whiteboard` repo based on the following structure for the backend part.

```text
├── models
│   ├── index.js
│   ├── post.model.js
│   ├── comment.model.js
├── routes
│   ├── post.route.js
│   ├── comment.route.js
├── collections
│   ├── user-comment-routes.js
├── error-handlers
│   ├── 500.js
├── index.js
├── server.js
└── package.json
├── .eslintrc.json
├── .gitignore
```
2. Work on a `lab-05` branch.
3. After completing the lab, create a PR from your `lab-05` branch to `main` then merge your code.
4. Deploy your changes on Heroku from `main` branch.

### Frontend part
1. You will create a new React app and connect it with a Github repo called `401-whiteboard-frontend`, the repo structure should be implemented based on the following structure.

```text
├── src
│   ├── index.js
│   ├── App.js
│   ├── components
    │   ├── Post.js
    │   ├── Add-post-form.js
    │   ├── Add-comment-form.js
├── .env
├── .env.sample
├── .gitignore
└── package.json
├── README.md
```
2. Work on a `lab-05` branch.
3. After completing the lab, create a PR from your `lab-05` branch to `main` then merge your code.
4. Deploy your changes on Netify from `main` branch.


## Lab Requirements
### Frontend development part
- Build the frontend part of the app using React.
    - Get all the posts with their comments in your `App.js` component.
    - Make sure to add seperate components as the previous project structure.

### Backend development part
- The user should be able to:
    - Get all posts with their comments.
    - Add comment to post.

- Create two routes to cover the previous actions as the following:
    - Get all posts with their comments
        - You already have this route from `lab-04`, so you need to update it and add the comments part
        - CRUD operation: Read
        - Method: GET
        - Route: `/post`
        - Response: array of post objects with their comments
    - Add comment:
        - CRUD operation: CREATE
        - Method: POST
        - Route: `/comment/postID`
        - Request body: JSON object has the comment data
        - Response: array of comments for a specific post with `postID`

- Make sure to update the comment in the whiteboard whenever you add a new post.

- Do the required steps as demonstrated in the class for building your REST API by applying the `collection` design pattern.

- Follow the code structure as demonstrated in the class.

- Add styling to your whiteboard to make it attractive.

## Testing Requirements
### Backend
- Test the returned data for each REST route
    - Get all posts with their comments using GET.
    - Add a new comment using POST.

## Submission Instructions
- Submit your Github frontend and backend repo links and the deployed Heroku and Netlify links.

