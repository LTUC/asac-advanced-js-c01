# LAB-07: Authentication

## Authentication App Part 1

In today's lab, we are going to build signup and signin using a Postgres database for storage.

You will continue working and deploying your previous Express server by implementing the Basic Authentication (sign up and login) part of your a full-stack application, where you will have new requirements to do.

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
   ├── error-handlers
   │ ├── 500.js
   ├── index.js
   ├── server.js
   └── package.json
   ├── .eslintrc.json
   ├── .gitignore
```

2. Create a new Branch called `lab-07`.
1. After completing the lab, create a PR from your `lab-07` branch to `main` then merge your code.
1. Deploy your server on Heroku from `main` branch.

### Frontend part

1. You will continue working on `401-whiteboard-frontend` repo, the repo structure should be implemented based on the following structure.

```text
├── src
│ ├── index.js
│ ├── App.js
│ ├── components
│ |   ├── Post.js
│ |   ├── Add-post-form.js
│ |   ├── Add-comment-form.js
│ |   ├── Signup.js
│ |   ├── Signin.js
├── .env
├── .env.sample
├── .gitignore
└── package.json
├── README.md
```

2. Create a new Branch called `lab-07`.
1. After completing the lab, create a PR from your `lab-07` branch to `main` then merge your code.
1. Deploy your server on Netlify from `main` branch.

## Lab Requirements - backend

- The user should be able to:

  - sign up
  - sign in

- The user should create an account and login later.

  - Create a signup:

    - Method: POST.
    - Route: `/signup`.
    - Request body: JSON object has the user data.
    - Response: 200 status.
    - an error handler.

  - Create a signin:

    - Method: POST.
    - Route: `/signin`.
    - Request: basic authentication header with a properly encoded username and password combination.
    - Response: 200 status.
    - an error handler should send “Invalid Login”.

## Lab Requirements - frontend

- In this lab, you will be creating two forms (signup / signin)
  which are going to be in App.js. **note:** make sure to add them as components.
- Signup Form that has the following inputs fields:

  - username
  - password
  - confirm password

- Signin Form that has the following inputs fields:

  - username
  - password

- When the users signed in successfully, redirect them to the posts page.
  **note:** you will use `<BrowserRouter>`

## Submission Instructions

- Submit your Github repos links and the deployed Heroku and Netlify links.
