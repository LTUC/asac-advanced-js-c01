# LAB-02: Express Middlewares

- In this lab, you will create an Express server along with routes which use middlewares.

## Steps
1. Create a new repo on Github called `express-server-middlewares` , then set it up based on the following structure.
    
```text
├── middlewares
│   ├── validate-number.js
├── error-handlers
│   ├── 500.js
├── index.js
├── server.js
└── package.json
├── .eslintrc.json
├── .gitignore
```
2. Work on a `non-main` branch.
3. After completing the lab, create a PR from your `non-main` branch to `main` then merge your code.
4. Deploy your server on Heroku from `main` branch.

## Lab Requirements

- Create a `/square` route using GET method within your `server.js` that expects a query number from the user with a "num" property.
    - If "num" is a number then output JSON string to the client side as response and contains the square of that number `{num: 25}`.
    - Else send a `500` error message.
    - You should use the `validate-number` middleware to acheive this part.

- The `index.js` file is the entry point to the `server.js` file, which should be responsible of starting the server by calling the `start()` method form your server as demonstrated in the demo. 

## Submission Instructions

- Submit your Github repo link and the deployed Heroku link.

