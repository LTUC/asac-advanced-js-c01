# LAB-08: Bearer Authorization

## Authentication App Part 2:

Bearer Authorization (Token)

In today's lab, you will be creating a Token using JWT when the user tries to signin. After the user is being logged-in to our application using Basic Authentication (user provides a username + password) the user will be considered as authenticated user.

We will be using that Token to re-authenticate users to grant access to any route that requires a valid login to access using Bearer Authorization.

## Steps

### Backend part

1. Continue working on `401-whiteboard-backend` repo based on the following structure.

```text
   ├── models
   │ ├── index.js
   │ ├── post.model.js
   │ ├── comment.model.js
   | ├── user.model.js
   ├── routes
   │ ├── post.route.js
   │ ├── comment.route.js
   │ ├── user.route.js
   ├── collections
   │ ├── post-comment-routes.js
   ├── middlewares
   │ ├── basic-auth.js
   │ ├── bearer-auth.js
   ├── error-handlers
   │ ├── 500.js
   ├── index.js
   ├── server.js
   └── package.json
   ├── .eslintrc.json
   ├── .gitignore
```

2. Create a new Branch called `lab-08`.
1. After completing the lab, create a PR from your `lab-08` branch to `main` then merge your code.
1. Deploy your server on Heroku from `main` branch.

### Frontend part

1. Continue working on `401-whiteboard-frontend` repo based on the previous structure in `lab-07`.
1. Create a new Branch called `lab-08`.
1. After completing the lab, create a PR from your `lab-08` branch to `main` then merge your code.
1. Deploy your server on Netlify from `main` branch.

## Lab Requirements - backend

- In this part, you will continue working on `/signin` route, so when the user signed in successfully, a new token will be generated using JWT and being sent back to the client as a response with the proper status code along with an object with the following properties

  ```JSON
  {
    user: {
      _id: 'ID FROM DB',
      username: 'myusername'
    },
    token: 'JWT Token Here'
  }
  ```

- The generated token will be used to re-authenticate users to grant access to the `/post` route with "Authorization" header, with the value of `Bearer TOKEN` and by that we grant access only for the signed in users. **note:** you will be adding the Bearer middleware to `/post` route.

- If the **TOKEN** is valid (actual user).
  - The route should function as it normally would (sending a response with all the posts information).
- If not

  - Send the user an error message stating "Invalid Login"

- Each user should be able to add a comment to any post
  - You will edit `/comment/postID` route in a way to add the comment along with it's user. The route should be `/comment/postID/userID`

## Lab Requirements - frontend

- When the user signed in successfully:

  - Store the generated token from the backend in `Cookies`.
  - Render the posts.

- Add the username along with the logout button in the header.
- When the user clicks on the logout button we should redirect the user to the homepage and remove the Token from the Cookies.
- When rendering the posts and their comments, each comment should have the username who added it.

## Submission Instructions

- Submit your Github repos links and the deployed Heroku and Netlify links.
