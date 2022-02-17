# LAB-10: Authorization(roles)

## Authentication App Part 3:

Being able to login is great, but in this final part, you will be adding roles to the users by implementing an Access Control List (ACL) which allows valid users to access routes, and also based on the individual permissions. So we give each user a permission where the user with `user` role can add/read posts. Additionally,the user with `admin` role can perform add/read/update/delete actions to posts.

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
   │ ├── acl.js
   ├── error-handlers
   │ ├── 500.js
   ├── index.js
   ├── server.js
   └── package.json
   ├── .eslintrc.json
   ├── .gitignore
```

2. Create a new Branch called `lab-10`.
1. After completing the lab, create a PR from your `lab-10` branch to `main` then merge your code.
1. Deploy your server on Heroku from `main` branch.

## Lab Requirements- backend

1. You will add `role` and `capabilities` to the user model as demonstrated in the class.

   - **note:** make sure to add the role property along with the username and password when you create a new user in the `/signup` route.

1. Create a middleware to implement the Access Control List (ACL) by passing the capability as an argument which returns if the user role includes that capability.

1. Add the ACL middleware above to the routes as the following

   - GET `/post`: Get a list of all posts (`user` and `admin`)
   - POST `/post`': Add a post (`user` and `admin`)
   - PUT `/post/:id`: Update a post (`admin`)
   - DELETE `/post/:id` : Delete a post (`admin`)
   - **note:**
     - `user` role capabilities `['read','create']`
     - `admin` role capabilities `['read','create','update','delete']`

1. After completing the lab, create a PR from your `lab-08` branch to `main` then merge your code.
1. Deploy your server on Heroku from `main` branch.

### Frontend part

1. `Add` button should be displayed for `admin` and `user`.
1. `Edit` and `Delete` buttons should only be displayed to the `admin`.
1. When the `admin` clicks on `Edit` button, a Modal/Form should appear to edit the content.
1. When the `admin` clicks on `Delete` button a confirm alert should appear.

## Submission Instructions

- Submit your Github repos links and the deployed Heroku and Netlify links.
