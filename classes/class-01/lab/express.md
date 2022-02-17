# EXPRESS

## Steps

1. Create a new repo on Github called `express-server` , then set it up based on the following structure.

```text
├── __tests__
│   └── server.test.js
├── index.js
├── server.js
└── package.json
├── .eslintrc.json
└── .gitignore
```

2. Work on a `non-main` branch.
3. After completing the lab, create a PR from your `non-main` branch to `main` then merge your code.
4. Deploy your server on Heroku from `main` branch.

## Lab Requirements

- Create a `/` route using GET method within your `server.js` and return Hello World as a proof of life.
- Create a `/person` route using POST method within your `server.js` that will receive a persons name, age, gender.
- The `/person` route should take that data and return a response with the age + 5.
- The `index.js` file is the entry point to the `server.js` file, which should be responsible of starting the server by calling the `start()` method form your server as demonstrated in the demo.
- Add github action workflow to your repo for the express app and make sure it passes all tests.

## Submission Instructions

- Submit your Github repo link and the deployed Heroku link.